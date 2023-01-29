// Get the current language
var cur_language = document.cookie.split(";").find((row) => row.startsWith('lang='))?.split("=")[1];
var id_language = 0;
switch (cur_language) {
  case "fr": id_language = 0; break;
  case "en": id_language = 1; break;
  default: //idk
}

// Absolutely horrible practice, but I don't have time to make something to read local files, as this requires a local server to test on my own and the goal is to have something that works rather than something that is right.
let translation = {
  "tr_BIENVENUE_1": ["Bienvenue !", "Welcome !"],
  "tr_BIENVENUE_2": ["Je suis <b>Guillaume Caucheteux</b>, développeur junior, diplômé en 2022 de l'école d'ingénieur <b>Télécom SudParis</b>, où j'ai suivi la voie d'approfondissement <b>Architecture des Systèmes Réparties (ASR)</b>, ainsi qu'étudié en autonomie les cours de la voie d'approfondissement <b>Jeux Vidéo, Interactions et Collaborations Numériques (JIN)</b>.",
    "I am <b>Guillaume Caucheteux</b>, a French junior developer. In 2022, I got the engineer diploma from the french engineering school <b>Télécom SudParis</b>, in which I followed the courses from the major <b>Distributed Systems Architecture (ASR)</b>, as well as studied in autonomy the courses from the major <b>Video Games and Digital Interactions and Collaborations (JIN).</b> major."],
  "tr_BIENVENUE_3": ["Après avoir créé de nombreux projets liés au jeu vidéo durant ma scolarité et avoir effectué mon stage de fin d'études durant 6 mois sur le jeu vidéo <i>Mage Noir : Infinity</i>, je cherche un premier emploi dans ce domaine en tant que <b>développeur</b>.",
    "Having created many video game projects throughout my scholarship and having done my 6-month end-of-scholarship internship working on the video game <i>Mage Noir : Infinity</i>, I am looking for a first position  in this domain as a <b>programmer</b>."],

  "tr_index_album_buttons": ["Voir", "View"],

  "tr_album_game_jams": ["Game Jams", "Game Jams"],
  "tr_date_game_jams": ["Depuis 2019", "Since 2019"],
  "tr_album_game_jams_description": ["La liste des jeux réalisés aux cours des différentes game jams auxquelles j'ai participé.", "The list of all the games I participated creating during game jams"],

  "tr_album_formation": ["Formation", "Education"],
  "tr_date_formation": ["Depuis 2016", "Since 2016"],
  "tr_album_formation_description": ["Mon parcours scolaire depuis le Baccalauréat jusqu'à l'obtention de mon diplôme d'ingénieur.", "My scholarship since the Baccalauréat (french A-Level) to my graduation as an engineer"],

  "tr_album_projets": ["Projets", "Projects"],
  "tr_date_projets": ["2016 - 2023", "2016 - 2023"],
  "tr_album_projets_description": ["Tous les projets réalisés durant mes études à Télécom SudParis.", "All the projects made during my studies at Télécom SudParis"],

  "tr_album_experience": ["Expérience professionnelle", "Professional experience"],
  "tr_date_experience": ["Depuis 2019", "Since 2019"],
  "tr_album_experience_description": ["Mes expériences professionnelles, associatives et professionnalisantes", "My professional experiences, as well as associative and professionnalising experiences"],

  "tr_album_all_games": ["Tous mes jeux", "All my games"],
  "tr_date_all_games": ["Depuis 2019", "Since 2019"],
  "tr_album_all_games_description": ["Tous les jeux vidéo auxquels j'ai participé, que ce soit en game jam, dans les études ou ailleurs.", "All the games whose creation I took part in, during game jams as well as during my studies or elsewhere"],

  "tr_album_divers": ["Divers", "Miscellaneous"],
  "tr_date_miscellaneous": ["Depuis 2020", "Since 2020"],
  "tr_album_divers_description": ["Mes projets liés à<br> la programmation en général", "My projects related<br> to programming in general"],

  "tr_back_to_top": ["Retourner en haut de la page", "Back to the top"],

  "tr_formation_ASR_1": ["2021 - 2022 : Voie d'approfondissement <b>Architecture des Systèmes Répartis</b>", 
      "2020 - 2021 : Major <b>Distributed Systems Architecture</b>"],
  "tr_ASR_CSC5001_title": ["Systèmes Hautes Performance", "High Performance Systems"],
  "tr_ASR_CSC5001_1": ["Algorithmique parallèle", "Parallel Algorithmics"],
  "tr_ASR_CSC5001_2": ["MPI", "MPI"],
  "tr_ASR_CSC5001_3": ["OpenMP", "OpenMP"],
  "tr_ASR_CSC5001_4": ["Programmation GPU avec CUDA", "GPU Programming with CUDA"],
  "tr_ASR_CSC5001_5": ["Analyse de performance avec EZTrace", "Performance analysis with EZTrace"],
  "tr_ASR_CSC5001_6": ["Projet : Parallélisation et optimisation du problème à n-corps", "Project : Parallelization of the n-body problem"],

  "tr_ASR_CSC5002_title": ["Middleware et architecture logicielle pour applications réparties ", "Middleware and software architecture for distributed applications"],
  "tr_ASR_CSC5002_1": ["MQTT", "MQTT"],
  "tr_ASR_CSC5002_2": ["RabbitMQ", "RabbitMQ"],
  "tr_ASR_CSC5002_3": ["JavaEE", "JavaEE"],
  "tr_ASR_CSC5002_4": ["Étude de différents patrons de conception d'applications réparties", "Study of various design patterns for distributed applications"],
  "tr_ASR_CSC5002_5": ["Projet : Réalisation d'une application de visite groupées où les utilisateurs partagent leur position et ont un accès à un messagerie instantanée.", "Projet : Creation of an application to make a group visit in which users can share their position and may access an instant messenger"],

  "tr_ASR_CSC5003_title":["Web sémantique et infrastructures pour le big data", "Semantic Web and Big Data Architecture"],
  "tr_ASR_CSC5003_1":["Scala", "Scala"],
  "tr_ASR_CSC5003_2":["Hadoop", "Hadoop"],
  "tr_ASR_CSC5003_3":["Le framework MapReduce", "The MapReduce framework"],
  "tr_ASR_CSC5003_4":["Kafka", "Kafka"],
  "tr_ASR_CSC5003_5":["Spark", "Spark"],
  "tr_ASR_CSC5003_6":["Études d'ontologies", "Study of ontologies"],
  "tr_ASR_CSC5003_7":["Projet : Prendre une base de donnée de notre choix et mener une étude dessus : choisir un ensemble de données, définir un objectif, étudier les données, les nettoyer, les trier et appliquer des algorithmes dessus pour tirer des conclusions et rédiger un bref rapport.", 
    "Project : Take a dataset of our choice and carry out a study of it : choose a dataset, define an objective, study the data, clean the dataset, select the corresponding data and apply algorithms on it in order to draw conclusions and write a brief report."],
  "tr_ASR_CSC5003_8":["Projet : Choisir une base de donnée et créer une ontologie basée dessus, et générer des protocoles adaptés en tenant compte des données.", 
  "Project : Choose a dataset and build an ontology around it, and generate protocoles suited to the data"],

  "tr_ASR_CSC5004_title":["Infrastructures pour le Cloud","Cloud infrastructures"],
  "tr_ASR_CSC5004_1":["Docker","Docker"],
  "tr_ASR_CSC5004_2":["Kubernetes","Kubernetes"],
  "tr_ASR_CSC5004_3":["La notion de virtualisation","Virtualization"],

  "tr_formation_JIN_1":["2021 - 2022 : Cours étudiés en autonomie : <b>Jeux vidéo, Interactions et Collaborations Numériques (JIN)</b>","2021 - 2022 : Lessons studied in autonomy : <b>Video Games, Digital Cooperations and Interactions</b>"]
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
