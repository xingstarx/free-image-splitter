'use client'
import { useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import DownloadButton from './DownloadButton';
// import { logEvent } from '~/utils/analytics';

interface ImageSplitterComponentTextProps  {
  dropzoneTextActive: string;
  dropzoneTextInactive: string;
  dropzoneTextInactiveSubtitle: string;
  uploadedImageTitle: string;
  splitModeLabel: string;
  splitModeRow: string;
  splitModeColumn: string;
  splitModeCustom: string;
  rowsLabel: string;
  columnsLabel: string;
  previewTitle: string;
  noPreviewText: string;
  downloadButtonText: string;
  removeImageTitle: string;
  downloadAllAsZipButtonText: string;
}

const ImageSplitter = ({ dropzoneTextActive, dropzoneTextInactive, dropzoneTextInactiveSubtitle, uploadedImageTitle, splitModeLabel, splitModeRow, splitModeColumn, splitModeCustom, rowsLabel, columnsLabel, previewTitle, noPreviewText, downloadButtonText, removeImageTitle, downloadAllAsZipButtonText }: ImageSplitterComponentTextProps ) => {
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [splitMode, setSplitMode] = useState<'row' | 'column' | 'custom'>('row');
  const [rows, setRows] = useState<number>(2);
  const [columns, setColumns] = useState(2);
  const [splitPreviews, setSplitPreviews] = useState<string[]>([]);
  const [zipContent, setZipContent] = useState<Blob | null>(null);
  const [zipFilename, setZipFilename] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': []},
    multiple: false
  });

  useEffect(() => {
    if (image) {
      splitImage();
    }
  }, [image, splitMode, rows, columns]);


  const splitImage = () => {
    if (!image) return;

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      let actualRows = 2;
      let actualColumns = 2;

      switch (splitMode) {
        case 'row':
          actualRows = 2;
          actualColumns = 1;
          break;
        case 'column':
          actualRows = 1;
          actualColumns = 2;
          break;
        case 'custom':
          actualRows = rows;
          actualColumns = columns;
          break;
      }

      const pieceWidth = img.width / actualColumns;
      const pieceHeight = img.height / actualRows;
      const previews: string[] = [];

      for (let y = 0; y < actualRows; y++) {
        for (let x = 0; x < actualColumns; x++) {
          const pieceCanvas = document.createElement('canvas');
          pieceCanvas.width = pieceWidth;
          pieceCanvas.height = pieceHeight;
          const pieceCtx = pieceCanvas.getContext('2d');
          if (!pieceCtx) continue;

          pieceCtx.drawImage(
            canvas,
            x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight,
            0, 0, pieceWidth, pieceHeight
          );
          previews.push(pieceCanvas.toDataURL());
        }
      }

      setSplitPreviews(previews);
    };
    img.src = image;
  };
  const handleDownload = (previewUrl: string, index: number) => {
    const extension = imageName.split('.').pop();
    const link = document.createElement('a');
    link.download = `${imageName.split('.')[0]}_split_${index + 1}.${extension}`; // Changed index to index + 1
    link.href = previewUrl;
    link.click();

    // 记录单个图片下载事件
    // logEvent('download_single_image', 'ImageSplitter', imageName);
  };


  const generateZipContent = async () => {
    const zip = new JSZip();
    const timestamp = Date.now();
    const filename = `${imageName.split('.')[0]}_split_${timestamp}.zip`;

    splitPreviews.forEach((preview, index) => {
      const imageData = preview.split(',')[1];
      const imageName = `split_${index + 1}.png`;
      zip.file(imageName, imageData, {base64: true});
    });

    const content = await zip.generateAsync({type: 'blob'});
    setZipContent(content);
    setZipFilename(filename);
  };

  useEffect(() => {
    if (splitPreviews.length > 0) {
      generateZipContent();
    }
  }, [splitPreviews]);

  const handleRemoveImage = () => {
    setImage(null);
    setImageName('');
    setSplitPreviews([]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto mt-8">
      <div className="w-full md:w-1/2">
        {!image ? (
          <div {...getRootProps()} className="mb-4 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>{dropzoneTextActive}</p>
            ) : (
              <>
                <p className="text-lg mb-2">{dropzoneTextInactive}</p>
                <p className="text-sm text-gray-500">{dropzoneTextInactiveSubtitle}</p>
              </>
            )}
          </div>
        ) : (
        <>
          <h3 className="text-xl font-bold mb-4">{uploadedImageTitle}</h3>
          <div className="mb-4 relative inline-block group">
            <img src={image} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <button
                onClick={handleRemoveImage}
                className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        </>
        )}
        <div className="mb-4">
          <label className="block mb-2">{splitModeLabel}</label>
          <div className="flex gap-2">
            <button
              onClick={() => setSplitMode('row')}
              className={`px-4 py-2 rounded ${splitMode === 'row' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {splitModeRow}
            </button>
            <button
              onClick={() => setSplitMode('column')}
              className={`px-4 py-2 rounded ${splitMode === 'column' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {splitModeColumn}
            </button>
            <button
              onClick={() => setSplitMode('custom')}
              className={`px-4 py-2 rounded ${splitMode === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {splitModeCustom}
            </button>
          </div>
        </div>
        {splitMode === 'custom' && (
          <>
            <div className="mb-4">
              <label className="block mb-2">{rowsLabel}</label>
              <input
                type="number"
                value={rows}
                onChange={(e) => setRows(Math.max(1, parseInt(e.target.value)))}
                className="w-full p-2 border rounded"
                min="1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">{columnsLabel}</label>
              <input
                type="number"
                value={columns}
                onChange={(e) => setColumns(Math.max(1, parseInt(e.target.value)))}
                className="w-full p-2 border rounded"
                min="1"
              />
            </div>
          </>
        )}

        {zipContent && <DownloadButton 
          zipContent={zipContent} 
          zipFilename={zipFilename} 
          downloadAllAsZipButtonText={downloadAllAsZipButtonText} 
        />}
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-bold mb-4">{previewTitle}</h3>
        {splitPreviews.length > 0 ? (
          <div className="grid gap-2" style={{
            gridTemplateColumns: `repeat(${splitMode === 'row' ? 1 : (splitMode === 'column' ? 2 : columns)}, 1fr)`,
            gridTemplateRows: `repeat(${splitMode === 'column' ? 1 : (splitMode === 'row' ? 2 : rows)}, 1fr)`
          }}>
            {splitPreviews.map((preview, index) => (
              <div key={index} className="relative group">
                <img src={preview} alt={`Split ${index + 1}`} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleDownload(preview, index)}
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">{noPreviewText}</p>
        )}
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageSplitter;
