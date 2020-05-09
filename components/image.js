import cn from 'classnames';
import { useState } from 'react';

const canPreload = (href) => {
   if (!href || !href.startsWith('/')) {
      return false;
   }

   return true;
};

const Image = ({ title, cover, className }) => {
   let alt = `${title} cover`;

   return cover ? (
      <img
         src={cover}
         alt={alt}
         role='img'
         className={`relative rounded-lg object-cover ${className}`}
      />
   ) : null;
};

export default Image;
