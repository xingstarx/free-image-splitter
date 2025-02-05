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
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          A simple and easy-to-use online tool for splitting images. Supports horizontal splitting, vertical splitting, and custom grid splitting. No software installation required - use it directly in your browser.
        </p>
        <ImageSplitter {...texts} />
      </main>
    </div>
  );
}
