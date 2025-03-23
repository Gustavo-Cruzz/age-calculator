import React, { useState } from 'react';
import './styles.css'; 
import { validateInput, calculateAge } from './ValidateAge';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errors: validationErrors } = validateInput(
        parseInt(day),
        parseInt(month),
        parseInt(year)
        );
        setErrors(validationErrors);
        if (isValid) {
        const age = calculateAge(
            parseInt(day),
            parseInt(month),
            parseInt(year)
        );
        setResult(age);
        } else {
        setResult(null);
        }
    };

  return (
    <div className="age-calculator">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="day">Dia</label>
          <input type="number" id="day" value={day} onChange={(e) => setDay(e.target.value)} />
          {errors.day && <span className="error">{errors.day}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="month">Mês</label>
          <input type="number" id="month" value={month} onChange={(e) => setMonth(e.target.value)} />
          {errors.month && <span className="error">{errors.month}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="year">Ano</label>
          <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
          {errors.year && <span className="error">{errors.year}</span>}
        </div>
        <button type="submit">Calcular</button>
      </form>
      {result && (
        <div className="result">
          <p>Anos: {result.years}</p>
          <p>Meses: {result.months}</p>
          <p>Dias: {result.days}</p>
        </div>
      )}
    </div>
  );
}
export default App; 