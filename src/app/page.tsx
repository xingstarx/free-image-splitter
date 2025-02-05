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

        <div className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto space-y-8">
          <p className="text-lg">
            A professional online image splitter tool for all your image processing needs. Our advanced image splitting technology supports horizontal splitting, vertical splitting, and custom grid splitting, making it perfect for web development, social media marketing, and digital asset management. No software installation required - use it directly in your browser.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">What Image Splitter Does</h2>
            <p>
              Our Image Splitter is a powerful web-based tool that helps you divide a single image into multiple parts with pixel-perfect precision. Whether you need to split a banner for social media platforms, create responsive image tiles for your website, prepare visual assets for your digital projects, or segment large images for optimal web performance, this versatile tool makes the process quick and effortless.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Common Use Cases</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>• Social Media Content Creation: Split panoramic images for Instagram carousel posts or create perfectly sized graphics for different social platforms</li>
              <li>• Web Development: Divide large background images into smaller tiles for faster loading and better performance</li>
              <li>• Digital Marketing: Create banner segments for responsive web designs or email marketing campaigns</li>
              <li>• UI/UX Design: Split design mockups into individual assets for implementation</li>
              <li>• E-commerce: Prepare product images for various display formats and devices</li>
              <li>• Game Development: Split sprite sheets or texture atlases for game assets</li>
              <li>• Print Design: Segment large images for multi-page printing or poster designs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">How Image Splitter Works</h2>
            <ol className="list-decimal list-inside text-left max-w-2xl mx-auto space-y-2">
              <li>Upload your image using our intuitive drag-and-drop interface or file browser</li>
              <li>Select your preferred splitting mode: horizontal slicing, vertical splitting, or custom grid division</li>
              <li>For custom grids, specify the exact number of rows and columns for precise control</li>
              <li>Preview the split results in real-time with our interactive preview feature</li>
              <li>Download individual image segments or get all pieces in a convenient ZIP file</li>
              <li>Use the split images immediately in your projects with no quality loss</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Image Splitter Advanced Features</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>✓ Multiple Splitting Modes: Choose between horizontal slicing, vertical splitting, or custom grid division</li>
              <li>✓ Real-time Interactive Preview: See exactly how your image will be split before downloading</li>
              <li>✓ Batch Processing: Download all image segments at once in a ZIP archive</li>
              <li>✓ High-Quality Output: Maintains original image resolution and quality in all split pieces</li>
              <li>✓ Client-side Processing: All operations happen in your browser for maximum privacy and speed</li>
              <li>✓ Wide Format Support: Works with PNG, JPG, JPEG, WebP, and other common image formats</li>
              <li>✓ Responsive Design: Works perfectly on desktop, tablet, and mobile devices</li>
              <li>✓ No Registration Required: Start splitting images instantly with no sign-up needed</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Image Splitter Technical Specifications</h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div>
                <h3 className="font-medium">Supported Image Formats</h3>
                <p>Our image splitter tool supports a wide range of web-compatible formats including PNG, JPG, JPEG, WebP, GIF (static), and BMP. All common image formats used in web development and digital design are supported.</p>
              </div>
              <div>
                <h3 className="font-medium">Image Size Limits and Performance</h3>
                <p>The tool processes images directly in your browser for optimal performance and privacy. While there's no strict size limit, we recommend images under 20MB for the best experience. Larger images are supported but may require more processing time depending on your device's capabilities.</p>
              </div>
              <div>
                <h3 className="font-medium">Output Quality and Resolution</h3>
                <p>Our advanced splitting algorithm ensures that each segment maintains the exact same quality and resolution as the source image. There's no compression or quality loss during the splitting process, making it perfect for professional use cases where image quality is crucial.</p>
              </div>
              <div>
                <h3 className="font-medium">Browser Compatibility</h3>
                <p>The Image Splitter works flawlessly on all modern web browsers including Chrome, Firefox, Safari, and Edge. Our tool uses the latest web technologies while maintaining broad compatibility.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Image Splitter Best Practices and Tips</h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div>
                <h3 className="font-medium">Preparing Your Images</h3>
                <p>For optimal results, ensure your source images are high quality and properly sized before splitting. Consider the final use case when choosing your split configuration - for example, use horizontal splitting for carousel posts or vertical splitting for long-form content.</p>
              </div>
              <div>
                <h3 className="font-medium">Choosing the Right Split Mode</h3>
                <p>Select your splitting mode based on your specific needs: use horizontal splitting for banner segmentation, vertical splitting for creating scrolling content, or custom grid for more complex layouts. The preview feature helps you ensure perfect results before downloading.</p>
              </div>
              <div>
                <h3 className="font-medium">Working with Custom Grids</h3>
                <p>When using the custom grid feature, consider the aspect ratio of your original image to maintain proportional segments. For web galleries or responsive layouts, try to keep the number of segments manageable for better performance.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Image Splitter FAQ</h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div>
                <h3 className="font-medium">What makes this Image Splitter different from other tools?</h3>
                <p>Our Image Splitter combines professional-grade features with an intuitive interface, offering real-time previews, multiple splitting modes, and high-quality output. It works entirely in your browser, ensuring your images remain private and processing is instant.</p>
              </div>
              <div>
                <h3 className="font-medium">Can I use this tool for commercial projects?</h3>
                <p>Yes! Our Image Splitter is perfect for both personal and commercial use. Whether you're working on client projects, creating marketing materials, or developing websites, you can rely on our tool for professional-quality results.</p>
              </div>
              <div>
                <h3 className="font-medium">How do you ensure image quality is maintained?</h3>
                <p>We use advanced image processing algorithms that preserve the original quality of your images. Each split segment maintains the exact same resolution, color accuracy, and quality as the source image, with no compression or degradation.</p>
              </div>
              <div>
                <h3 className="font-medium">Is there a limit to how many times I can split images?</h3>
                <p>No! You can use our Image Splitter as many times as you need, with no usage limits or restrictions. It's completely free and doesn't require any registration.</p>
              </div>
              <div>
                <h3 className="font-medium">Can I split images into unequal parts?</h3>
                <p>Currently, the tool splits images into equal parts for consistent results. For custom dimensions or unequal splits, we recommend pre-cropping your image to achieve the desired proportions before splitting.</p>
              </div>
              <div>
                <h3 className="font-medium">How secure is my data when using this tool?</h3>
                <p>Very secure! All image processing happens locally in your browser - your images are never uploaded to any server. This ensures complete privacy and security for your visual assets.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="https://free.imagesplitter.vip" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium">
              free.imagesplitter.vip
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Free Image Splitter - A powerful online tool for splitting images into multiple parts with pixel-perfect precision.
              No installation required, works directly in your browser.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Free Image Splitter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
