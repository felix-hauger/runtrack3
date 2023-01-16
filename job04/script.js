// Déclarez une fonction “bisextile” qui prend en paramètre une variable “année”. Si l’année
// est bisextile, la fonction retourne true, sinon elle retourne false.

// Selon WikiPédia : 
// Une année bissextile (ou un an bissextil) est une année comportant 366 jours au lieu des 365 pour une année commune. Le jour ajouté est le 29 février car ce mois compte habituellement vingt-huit jours dans le calendrier grégorien. Les années sont en général bissextiles si elles sont multiples de quatre, toutefois elles ne le sont pas si elles sont multiples de cent à l'exception des années multiples de quatre cents qui sont elles bissextiles. C'est ainsi que les années 2020, 2024 et 2028 sont bissextiles, et que 2000 et 2400 le sont aussi, mais pas 1900, 2100, 2200 et 2300.

let bissextile = function(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

let test = bissextile(2104);
console.log(test);