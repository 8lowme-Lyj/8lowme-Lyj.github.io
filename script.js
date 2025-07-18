<!-- script.js（新增函数） -->
function showPage(page) {
  const sections = ['home', 'portfolio', 'trivia'];
  sections.forEach(id => {
    document.getElementById(id).style.display = id === page ? 'block' : 'none';
  });
}

function calculateBMI() {
  const h = parseFloat(document.getElementById('height').value) / 100;
  const w = parseFloat(document.getElementById('weight').value);
  if (h && w) {
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  } else {
    document.getElementById('result').textContent = 'Please enter valid height and weight.';
  }
}