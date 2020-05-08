import React from 'react';

import Error from '../components/error';

function E({ statusCode }) {
   return <Error status={statusCode} />;
}

E.getInitialProps = ({ res, err }) => {
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
   return { statusCode };
};

export default E;
