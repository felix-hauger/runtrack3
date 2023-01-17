document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button'),
        showhide = function() {
            const article = document.querySelector('article');

            // if article exists !! convert in boolean true (the 1st ! convert it to false & the 2nd ! convert it to true)
            if (!!article) {
                article.remove();
            } else {
                const body = document.querySelector('body'),
                      createArticle = document.createElement('article'),
                      citation = "L'important n'est pas la chute, mais l'atterrissage.";

                      createArticle.textContent = citation;
                body.append(createArticle);
            }
        }

    button.addEventListener('click', showhide);
});