const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //to prevent default actions when form is submitted

  const height = parseInt(document.querySelector('#height').value); //.value returns a string value so we parse it into integer.
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) { 
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let comment;
    if (bmi < 18.6) {
      comment = 'Under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      comment = 'in Normal Range';
    } else if (bmi > 24.9) {
      comment = 'Overweight';
    }
    result.innerHTML = `<span>${bmi}, you are ${comment}</span>`;
  }
});
