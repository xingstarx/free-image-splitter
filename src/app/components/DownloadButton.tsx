'use client';

// import { logEvent } from "~/utils/analytics";

interface DownloadButtonProps {
  zipContent: Blob;
  zipFilename: string;
  downloadAllAsZipButtonText?: string; // 使用可选参数
}

const DownloadButton = ({ zipContent, zipFilename, downloadAllAsZipButtonText = "Download All as ZIP" }: DownloadButtonProps) => {
    const handleDownloadAll = () => {
        if (typeof window !== 'undefined') {
          const url = window.URL.createObjectURL(zipContent);
          const link = document.createElement('a');
          link.href = url;
          link.download = zipFilename;
          link.click();
          window.URL.revokeObjectURL(url);

          // 记录下载所有图片事件
          // logEvent('download_all_images', 'ImageSplitter', zipFilename);
        }
    };

  return (
    <button
      onClick={handleDownloadAll}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      disabled={!zipContent}
    >
      {downloadAllAsZipButtonText}
    </button>
  );
};

export default DownloadButton;
