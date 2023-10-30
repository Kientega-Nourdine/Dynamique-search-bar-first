const input = document.querySelector('input');
const professors = document.querySelectorAll('.professor');

input.addEventListener('input', () => {
    professors.forEach(professor => {
    if (professor.textContent.includes(input.value)){
        professor.style.display = '';
    } else {
        professor.style.display = 'none';
    }
   });
});

 