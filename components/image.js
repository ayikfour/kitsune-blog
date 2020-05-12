import cn from 'classnames';

const canPreload = (href) => {
   if (!href || !href.startsWith('/')) {
      return false;
   }

   return true;
};

const Image = ({ title, url, className }) => {
   let alt = `${title} cover`;

   return url ? (
      <img
         src={url}
         alt={alt}
         role='img'
         className={`rounded-sm object-cover ${className}`}
         loading='lazy'
      />
   ) : null;
};

export default Image;
