const Glyph = (className = null) => {
   return (
      <svg
         className={`stroke-current ${className}`}
         width='26'
         height='26'
         viewBox='0 0 28 28'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <circle cx='13' cy='13' r='10' strokeWidth='2' />
      </svg>
   );
};

export default Glyph;
