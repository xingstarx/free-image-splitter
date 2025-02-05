import ImageSplitter from './components/ImageSplitter';

export default function Home() {
  const texts = {
    dropzoneTextActive: "Release to start splitting",
    dropzoneTextInactive: "Drag and drop an image here or click to upload",
    dropzoneTextInactiveSubtitle: "Supports PNG, JPG, JPEG and other common image formats",
    uploadedImageTitle: "Uploaded Image",
    splitModeLabel: "Split Mode",
    splitModeRow: "Split Horizontally",
    splitModeColumn: "Split Vertically",
    splitModeCustom: "Custom Grid",
    rowsLabel: "Rows",
    columnsLabel: "Columns",
    previewTitle: "Preview",
    noPreviewText: "Upload an image to see the preview",
    downloadButtonText: "Download",
    removeImageTitle: "Remove Image",
    downloadAllAsZipButtonText: "Download All as ZIP"
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold text-center mb-4">Free Online Image Splitter</h1>

        <ImageSplitter {...texts} />
        
        <div className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto space-y-8">
          <p className="text-lg">
            A simple and easy-to-use online tool for splitting images. Supports horizontal splitting, vertical splitting, and custom grid splitting. No software installation required - use it directly in your browser.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">What It Does</h2>
            <p>
              Image Splitter helps you divide a single image into multiple parts with precision. Whether you need to split a banner for social media, create image tiles for a website, or prepare assets for your project, this tool makes it quick and effortless.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">How It Works</h2>
            <ol className="list-decimal list-inside text-left max-w-2xl mx-auto space-y-2">
              <li>Upload your image by dragging and dropping or clicking to browse</li>
              <li>Choose your preferred splitting mode: horizontal, vertical, or custom grid</li>
              <li>For custom grids, specify the number of rows and columns</li>
              <li>Preview the split results in real-time</li>
              <li>Download individual pieces or get all parts in a ZIP file</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Key Features</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>✓ Multiple splitting modes (Horizontal, Vertical, Custom Grid)</li>
              <li>✓ Real-time preview of split results</li>
              <li>✓ Batch download all pieces as ZIP</li>
              <li>✓ Maintains original image quality</li>
              <li>✓ Works entirely in your browser - no server uploads</li>
              <li>✓ Supports common image formats (PNG, JPG, JPEG)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">FAQ</h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div>
                <h3 className="font-medium">What image formats are supported?</h3>
                <p>The tool supports all common image formats including PNG, JPG, JPEG, and other web-compatible formats.</p>
              </div>
              <div>
                <h3 className="font-medium">Is there a size limit for images?</h3>
                <p>Since all processing happens in your browser, the limit depends on your device's memory. We recommend images under 20MB for optimal performance.</p>
              </div>
              <div>
                <h3 className="font-medium">Will the split images maintain their quality?</h3>
                <p>Yes, the tool preserves the original image quality. The split pieces will maintain the same resolution and quality as the source image.</p>
              </div>
              <div>
                <h3 className="font-medium">Can I split images into unequal parts?</h3>
                <p>Currently, the tool splits images into equal parts. For custom dimensions, you may need to pre-crop your image before splitting.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
