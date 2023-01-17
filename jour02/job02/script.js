document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button'),
        showhide = function() {
            const body = document.querySelector('body'),
                  article = document.createElement('article'),
                  citation = "L'important n'est pas la chute, mais l'atterrissage.";
                  createdArticle = document.querySelector('article');

            article.textContent = citation;

            // if article exists !! convert in boolean true (the 1st ! convert it to false & the 2nd ! convert it to true)
            if (!!createdArticle) {
                createdArticle.remove();
            } else {
                body.append(article);
            }
        }

    button.addEventListener('click', showhide);
});