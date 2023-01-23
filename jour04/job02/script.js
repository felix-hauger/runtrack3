document.addEventListener('DOMContentLoaded', () => {
    const jsonString = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
    const jsonValueKey = function(json, key) {
        let newJson = JSON.parse(json);
        return newJson[key];
    }

    console.log(jsonValueKey(jsonString, 'name'));
    
});
