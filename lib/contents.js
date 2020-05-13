/**
 * this module used for any contents related utilities
 * retrieving etc
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import renderMardown from '../lib/render-markdown';
import calcReadTime from 'reading-time';

/**
 * get contents directory path
 */
const postsDirectory = path.join(process.cwd(), 'contents');

/**
 * slugify as slug generator
 * strip foreign caracter
 */
const slugify = (string = '') => {
   return string
      .replace(/\.md$/, '') //replace the extention
      .toString() // Cast to string
      .toLowerCase() // Convert the string to lowercase letters
      .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
      .trim() // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

/**
 * get all available contents in its directory
 * then sorted it by newest to latest
 */
export function getSortedContentsMetadata() {
   // Get file names under /posts
   const fileNames = fs.readdirSync(postsDirectory);
   const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" and invalid char from file name to get slug
      const slug = slugify(fileName);

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // get estimated reading time
      const readingTime = calcReadTime(content);

      // Combine the data with the slug
      return {
         slug,
         readingTime: readingTime.text,
         ...data,
      };
   });

   // Sort posts by date
   return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
         return 1;
      } else {
         return -1;
      }
   });
}

/**
 * get all available contents from directory
 * used for path in nextjs
 */
export function getAllContentSlugs() {
   const fileNames = fs.readdirSync(postsDirectory);

   return fileNames.map((fileName) => {
      // Remove ".md" and invalid char from file name to get slug
      const slug = slugify(fileName);
      return {
         params: {
            slug,
         },
      };
   });
}

/**
 * get content detail by slug
 * @param {*} slug
 * slug is the name of the content
 */
export async function getContentBySlug(slug) {
   const fullPath = path.join(postsDirectory, `${slug}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');

   const { data, content } = matter(fileContents);

   const renderedHTML = renderMardown(content);

   const readingTime = calcReadTime(content);

   // Combine the data with the slug
   return {
      slug,
      renderedHTML,
      readingTime: readingTime.text,
      ...data,
   };
}
