document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button'),
          citation = document.querySelector('#citation');
    
    button.addEventListener('click', () => {
        console.log(citation.textContent);
    });
});