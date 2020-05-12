const Glyph = (className = null) => {
   return (
      <svg
         className={`stroke-current ${className}`}
         width='26'
         height='26'
         viewBox='0 0 30 30'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <circle cx='15' cy='15' r='10' strokeWidth='6' />
      </svg>
   );
};

export default Glyph;
