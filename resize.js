// Import necessary modules
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Resizes and converts an image to multiple formats and sizes.
 *
 * @param {string} inputImagePath - The path to the input image.
 * @param {string} outputDirectory - The directory to save the processed images.
 * @param {string} baseName - The base name for the output files (e.g., 'dog-bike').
 * @param {number[]} widths - An array of widths to resize the image to.
 */
async function processImage(inputImagePath, outputDirectory, baseName, widths) {
  try {
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory, { recursive: true });
      console.log(`Created directory: ${outputDirectory}`);
    }

    // Load the image with sharp
    const image = sharp(inputImagePath);

    await image.clone().toFile(path.join(outputDirectory, `${baseName}.webp`));

    // Generate images for each specified width
    for (const width of widths) {
      const webpPath = path.join(outputDirectory, `${baseName}${width}w.webp`);
      const pngPath = path.join(outputDirectory, `${baseName}${width}w.png`);

      // --- Generate WebP version ---
      await image
        .clone() // Use clone to avoid mutating the original sharp instance
        .resize(width)
        .toFile(webpPath);
      console.log(`Successfully created: ${webpPath}`);

      // --- Generate PNG version ---
      await image
        .clone() // Use clone again for the next format
        .resize(width)
        .toFile(pngPath);
      console.log(`Successfully created: ${pngPath}`);
    }

    console.log('\nImage processing complete!');
  } catch (error) {
    console.error('An error occurred during image processing:', error);
  }
}

// --- Configuration ---
// The image you want to process
const inputFile = 'dog-bike.png';

// The base name for your output files
const outputBaseName = inputFile.split('.')[0];

// The directory where you want to save the new images
const inputDir = path.join('src/images', inputFile);

// This will create a subdirectory based on the outputBaseName
const outputDir = path.join('src/images', outputBaseName);
// The different widths you want to generate
const targetWidths = [300, 600, 900];

// --- How to Run This Script ---
// 1. Make sure you have Node.js installed.
// 2. Install the 'sharp' library by running: npm install sharp
// 3. Place your input image (e.g., 'dog-bike.png') in the same directory as this script.
// 4. Run the script from your terminal: node your_script_name.js

// Execute the function with your configuration
processImage(inputDir, outputDir, outputBaseName, targetWidths);
