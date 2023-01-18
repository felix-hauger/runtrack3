// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
// sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
// l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

myNumbers = [1, 7, -19, 113, 2*7, 8-13, 55, 41+1, 0, 5/5];

const sort = function(numbers, order = 'asc') {

    if (order == 'asc') {
        for (let i = numbers.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (numbers[j+1] < numbers[j]) {
                    let tmp = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j+1] = tmp;
                }
            }
        }
    } else if (order == 'desc') {
        for (let i = numbers.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (numbers[j+1] > numbers[j]) {
                    let tmp = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j+1] = tmp;
                }
            }
        }
    }


    return numbers;
}

sort(myNumbers);
console.log(myNumbers);
sort(myNumbers, 'desc');
console.log(myNumbers);