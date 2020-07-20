const Code = ({ className = null }) => {
   return (
      <svg
         className={`stroke-current ${className}`}
         xmlns='http://www.w3.org/2000/svg'
         width='24'
         height='24'
         viewBox='0 0 24 24'
         fill='none'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
      >
         <polyline points='16 18 22 12 16 6'></polyline>
         <polyline points='8 6 2 12 8 18'></polyline>
      </svg>
   );
};

export default Code;