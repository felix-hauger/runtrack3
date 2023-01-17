document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button'),
          citation = function () {
              const myCitation = document.querySelector('#citation');
              console.log(myCitation.textContent);

          }
    
    button.addEventListener('click', citation);
});