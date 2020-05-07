import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import renderMardown from '../lib/render-markdown';
import calcReadTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'contents');

export function getSortedContentsData() {
   // Get file names under /posts
   const fileNames = fs.readdirSync(postsDirectory);
   const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      const readingTime = calcReadTime(content);

      // Combine the data with the id
      return {
         id,
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

export function getAllContentIds() {
   const fileNames = fs.readdirSync(postsDirectory);

   return fileNames.map((fileName) => {
      return {
         params: {
            id: fileName.replace(/\.md$/, ''),
         },
      };
   });
}

export async function getContentData(id) {
   const fullPath = path.join(postsDirectory, `${id}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');

   const { data, content } = matter(fileContents);

   const contentHtml = renderMardown(content);

   const readingTime = calcReadTime(content);

   // Combine the data with the id
   return {
      id,
      contentHtml,
      readingTime: readingTime.text,
      ...data,
   };
}
