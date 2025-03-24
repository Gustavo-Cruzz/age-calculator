import React from 'react';

function AgeResult({ result }) {
  return (
    <div className="result">
      <p>Anos: {result.years}</p>
      <p>Meses: {result.months}</p>
      <p>Dias: {result.days}</p>
    </div>
  );
}

export default AgeResult;