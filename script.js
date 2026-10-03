document.addEventListener('DOMContentLoaded', () => {
    const lessons = document.querySelectorAll('.lessons-list li');

   
    lessons.forEach((li, index) => {
        const savedText = localStorage.getItem(`lesson-${index}`);
        if (savedText) {
            li.innerText = savedText;
        }

       
        li.addEventListener('input', () => {
            localStorage.setItem(`lesson-${index}`, li.innerText);
        });
    });
});
