# Free Image Splitter

🌐 **Online Demo**: [https://free.imagesplitter.vip/](https://free.imagesplitter.vip/)

Access our online tool now and easily split images without downloading or installing!

Free Image Splitter is a powerful web-based tool that allows you to easily split images into multiple pieces. Built with [Next.js](https://nextjs.org), this tool provides a user-friendly interface for dividing images into rows, columns, or custom grids.

## Features

- 🖼️ Split images into rows, columns, or custom grids
- 📱 Responsive design that works on desktop and mobile devices
- 💾 Download split images individually or as a ZIP file
- 🚀 Fast and efficient image processing
- 🎨 Supports various image formats (PNG, JPG, JPEG, etc.)
- 🆓 Completely free and open source

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment on Vercel

### Prerequisites

1. **GitHub Account**
   - If you don't have a GitHub account yet, register one at [GitHub](https://github.com)
   - Push your project code to a GitHub repository

2. **Vercel Account**
   - Visit [Vercel](https://vercel.com) website
   - Click "Sign Up" to create an account
   - Recommended: Sign in with your GitHub account for seamless repository integration

### Deployment Steps

1. **Import Project**
   - After logging into Vercel, click the "New Project" button
   - Select your GitHub repository
   - If you can't see your repository, click "Adjust GitHub App Permissions" to add repository access

2. **Configure Project**
   - Project Name: Keep default or customize
   - Framework Preset: Will be automatically detected as Next.js
   - Root Directory: Keep default (if your project is in the root)
   - Build and Output Settings: Keep default configuration

3. **Environment Variables (if needed)**
   - If your project uses environment variables, click on "Environment Variables" section
   - Add required variables, ensuring names match those used in your project

4. **Deploy**
   - After confirming all settings, click the "Deploy" button
   - Vercel will automatically start the build and deployment process
   - Wait for deployment to complete, typically takes 1-2 minutes

### Custom Domain (Optional)

1. **Add Domain**
   - In your project dashboard, go to "Settings" -> "Domains"
   - Click "Add Domain" button
   - Enter your desired domain name

2. **DNS Configuration**
   - Vercel will provide necessary DNS records
   - Add these DNS records at your domain registrar
   - Allow up to 48 hours for DNS propagation

### Automatic Deployments

- Vercel automatically monitors your GitHub repository for changes
- New commits to main/master branch trigger automatic redeployments
- Each Pull Request generates a preview deployment

### Deployment Best Practices

1. **Build Optimization**
   - Ensure proper `.gitignore` configuration to exclude unnecessary files
   - Optimize images and other static assets
   - Consider using Vercel's image optimization features

2. **Performance Monitoring**
   - Use Vercel Analytics to monitor website performance
   - Regularly check deployment logs and performance metrics
   - Set up performance budgets and alerts

3. **Troubleshooting**
   - Check build logs if deployment fails
   - Ensure all dependencies are properly installed
   - Verify environment variables are correctly set

### Additional Resources

- [Vercel Deployment Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/cli)

If you encounter any issues during deployment, check the [Vercel Help Center](https://vercel.com/help) or seek assistance in the [Vercel Community](https://github.com/vercel/vercel/discussions).
