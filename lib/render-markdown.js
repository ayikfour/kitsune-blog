import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

const renderer = new marked.Renderer();

renderer.link = (href, _, text) =>
   `<a href=${href} target="_blank" rel="noopener noreferrer" role="link" class="decoration relative">${text}</a>`;

// <iframe src=${href} class="opacity-0 left-0 rounded-md absolute h-0 w-32 transition-all transform mb-2 duration-300 ease-in-out"></iframe>

renderer.checkbox = () => '';
renderer.listitem = (text, task, checked) => {
   if (task) {
      return `<li class="reset"><span class="check">&#8203;<input type="checkbox" disabled ${
         checked ? 'checked' : ''
      } /></span><span>${text}</span></li>`;
   }

   return `<li>${text}</li>`;
};

renderer.image = (href, title, text) => {
   return `
   <img loading='lazy' alt=${title} src=${href} class='my-8 w-full relative rounded-sm object-cover shadow-lg' />
`;
};

marked.setOptions({
   gfm: true,
   breaks: true,
   headerIds: true,
   renderer,
   highlight: (code, language) => {
      return Prism.highlight(code, Prism.languages[language]);
   },
});

export default (markdown) => marked(markdown);
