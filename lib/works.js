import worksData from '../database/works.json';

export function getSortedWorksData() {
   // Sort posts by date
   return worksData.sort((a, b) => {
      if (a.date < b.date) {
         return 1;
      } else {
         return -1;
      }
   });
}
