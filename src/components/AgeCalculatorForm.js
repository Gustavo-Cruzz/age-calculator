import React from 'react';
import AgeInput from './AgeInput';

function AgeCalculatorForm({ day, month, year, setDay, setMonth, setYear, errors, setErrors, setResult }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = require('./ValidateAge').validateInput(
      parseInt(day),
      parseInt(month),
      parseInt(year)
    );
    setErrors(validationErrors);
    if (isValid) {
      const age = require('./ValidateAge').calculateAge(
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
    <form onSubmit={handleSubmit}>
      <AgeInput
        label="Dia"
        type="number"
        id="day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        error={errors.day}
      />
      <AgeInput
        label="Mês"
        type="number"
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        error={errors.month}
      />
      <AgeInput
        label="Ano"
        type="number"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        error={errors.year}
      />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default AgeCalculatorForm;