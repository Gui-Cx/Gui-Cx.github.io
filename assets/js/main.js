  // Get the current language
  var cur_language = document.cookie.split(";").find((row) => row.startsWith('lang='))?.split("=")[1];
  var id_language = 0;
  switch (cur_language) {
    case "fr": id_language = 0;break;
    case "en": id_language = 1; break;
    default: //idk
  }
  
  let translation = {
    "tr_BIENVENUE_1":["Bienvenue !", "Welcome !"],
    "tr_BIENVENUE_2":["Je suis <b>Guillaume Caucheteux</b>, développeur junior, diplômé en 2022 de l'école d'ingénieur <b>Télécom SudParis</b>, où j'ai suivi la voie d'approfondissement <b>Architecture des Systèmes Réparties (ASR)</b>, ainsi qu'étudié en autonomie les cours de la voie d'approfondissement <b>Jeux Vidéo, Interactions et Collaborations Numériques (JIN)</b>.",
      "Untranslated"]
  }
  // Translation est un dictionnaire

  // Ça, c'est pour sélectionner toutes les divs (et autre) de la classe "translatable"
  $(".translatable").html((index) => {
    // .text est une méthode qui prends en argument une fonction
    // Cette fonction doit renvoyer un texte, qui sera le nouveau texte l'intérieur de cette div
    console.log($(".translatable")[index].id)
    console.log($(cur_language))
    let myId = $(".translatable")[index].id
    // myId est l'identifiant de notre div
    return translation[myId][id_language]
    }
  )
