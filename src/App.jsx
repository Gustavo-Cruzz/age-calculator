import React, { useState } from 'react';
import './styles.css';
import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  return (
    <div className="age-calculator">
      <AgeCalculatorForm
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        errors={errors}
        setErrors={setErrors}
        setResult={setResult}
      />
      {result && <AgeResult result={result} />}
    </div>
  );
}

export default App;