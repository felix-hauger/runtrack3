document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
          button = document.querySelector('#button'),
          article = document.createElement('article'),
          citation = "L'important n'est pas la chute, mais l'atterrissage.";
    
    article.textContent = citation;

    button.addEventListener('click', () => {
        let createdArticle = document.querySelector('article');
        // if article exists !! convert in boolean true (the 1st ! convert to false & the second convert to true)
        if (!!createdArticle) {
            createdArticle.remove();
        } else {
            body.append(article);
        }
    });


});