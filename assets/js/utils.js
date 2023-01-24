function init_cookie(){
    // Get the cookie
    // If the cookie is empty : set to navigator value 
    // Else : Do nothing
    if (!document.cookie.split(";").some((item => item.trim().startsWith('lang=')))){
        console.log("Le cookie lang n'existe pas")
        var lang = "en";
        if (navigator.languages.includes("fr")){
            console.log("Il est français !")
            lang = "fr";
        }
        document.cookie = "lang="+lang+'; path="/"'
    }
}

function change_language(lang){
    console.log("Je change le langage pour "+lang);
    document.cookie = "lang="+lang+'; path="/"';
    window.location.reload();
}
init_cookie();