import cn from 'classnames';

const Image = ({ title, cover, className }) => {
   let alt = `${title} cover`;
   return cover ? (
      <img
         src={cover}
         alt={alt}
         role='img'
         className={`relative rounded-lg transition object-cover duration-500 ease-in-out transform hover:scale-105 ${className}`}
      />
   ) : null;
};

export default Image;
