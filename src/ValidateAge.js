export function validateInput(day, month, year) {
    let errors = {};
    let isValid = true;
  
    if (!day) {
      errors.day = 'Campo obrigatório';
      isValid = false;
    } else if (day < 1 || day > 31) {
      errors.day = 'Dia inválido';
      isValid = false;
    }
  
    if (!month) {
      errors.month = 'Campo obrigatório';
      isValid = false;
    } else if (month < 1 || month > 12) {
      errors.month = 'Mês inválido';
      isValid = false;
    }
  
    if (!year) {
      errors.year = 'Campo obrigatório';
      isValid = false;
    } else if (year > new Date().getFullYear()) {
      errors.year = 'Ano inválido';
      isValid = false;
    }
  
    if (day && month && year) {
      const date = new Date(`${year}-${month}-${day}`);
      if (isNaN(date.getTime())) {
        errors.day = 'Data inválida';
        errors.month = 'Data inválida';
        errors.year = 'Data inválida';
        isValid = false;
      } else if (date > new Date()) {
        errors.day = 'Data no futuro';
        errors.month = 'Data no futuro';
        errors.year = 'Data no futuro';
        isValid = false;
      }
    }
  
    return { isValid, errors };
  }
  
  export function calculateAge(birthDay, birthMonth, birthYear) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
  
    let years = todayYear - birthYear;
    let months = 0;
    let days = 0;
  
    if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
      years--;
    }
  
    if (todayMonth >= birthMonth) {
      months = todayMonth - birthMonth;
    } else {
      months = 12 + todayMonth - birthMonth;
    }
  
    if (todayDay >= birthDay) {
      days = todayDay - birthDay;
    } else {
      const prevMonthLastDay = new Date(todayYear, todayMonth - 1, 0).getDate();
      days = prevMonthLastDay - birthDay + todayDay;
      months--;
      if (months < 0) {
        months = 11;
      }
    }
  
    return {
      years,
      months,
      days,
    };
  }