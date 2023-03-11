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
  "tr_index_CV":["CV","Résumé"],
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

  "tr_formation_JIN_1":["2021 - 2022 : Cours étudiés en autonomie : <b>Jeux vidéo, Interactions et Collaborations Numériques (JIN)</b>","2021 - 2022 : Lessons studied in autonomy : <b>Video Games, Digital Cooperations and Interactions</b>"],
  
  "tr_JIN_cpp_title":["Développement C++","C++ Programming"],
  "tr_JIN_cpp_1":["Bases du C++","C++ Basics"],
  "tr_JIN_cpp_2":["Vecteurs","Vectors"],
  "tr_JIN_cpp_3":["Programmation orientée objet","Oriented Object Programming"],
  "tr_JIN_cpp_4":["Gestion de la mémoire","Memory handling"],
  "tr_JIN_cpp_5":["Pointeurs intelligents","Smart pointers"],
  "tr_JIN_cpp_6":["Bibliothèque SFML (Simple and Fast Multimedia Library)","The SFML Library (Simple and Fast Multimedia Library)"],
  "tr_JIN_cpp_7":["Cmake","Cmake"],

  "tr_JIN_maths_title":["Outils mathématiques pour le jeu vidéo","Mathematical tools for video games"],
  "tr_JIN_maths_1":["Produit vectoriel, mixte, scalaire","Vectorial, Scalar and Mixt products"],
  "tr_JIN_maths_2":["Quaternions","Quaternions"],
  "tr_JIN_maths_3":["Projection, Translation, Mise à l'échelle, Rotation","Projection, Translation, Rotation, Scaling"],
  "tr_JIN_maths_4":["Topologie","Topology"],
  "tr_JIN_maths_5":["Détection de collision (Bounding Box, Enveloppe Convexe...)","Collision detection (Bounding Box, Convex Hull...)"],
  "tr_JIN_maths_6":["Variétés (manifold)","Manifolds"],
  "tr_JIN_maths_7":["Graphe de Voronoï-Dirichlet","Voronoï-Dirichlet Graph"],

  "tr_CSC4253_title":["Architecture des moteurs de jeux","Game Engine Architecture"],
  "tr_CSC4253_1":["Programmation orientée composants","Component-oriented programming"],
  "tr_CSC4253_2":["Calcul vectoriel","Vector calculations"],
  "tr_CSC4253_3":["Lancé de rayon, gestion des collisions, physique avancée","Ray casting, collision handling, advanced physics"],
  "tr_CSC4253_4":["Coroutines et animations","Coroutines and animations"],
  "tr_CSC4253_5":["Prefab Imbriqué","Nested prefabs"],
  "tr_CSC4253_6":["Réflexion sur les pratiques d'UI et d'UX","Reflections on UI and UX practices"],
  "tr_CSC4253_7":["Analyse de performances, optimisation","Performance analysis, optimisation"],
  "tr_CSC4253_8":["Patrons de conceptions classique","Classic design patterns"],

  "tr_proj_title":["Tous mes projets, scolaires, associatifs et personnels","All my projects, associative, scholar or personal"],
  "tr_proj_summary":["Sommaire","Summary"],
  "tr_zefxis_title":["Projet de fin d'étude : Zefxis","Final-year project : Zefxis"],
  "tr_zefxis_dates":["Septembre 2021 - Février 2022","September 2021 - February 2022"],
  "tr_tankaf_title":["Tank à Faire","Tank à Faire"],
  "tr_tankaf_dates":["Juin 2021 - Octobre 2021","June 2021 - October 2021"],
  "tr_proj_description":["Description","Description"],
  "tr_proj_zefxis_1":["Zefxis est un projet créé autours de la thématique des Objects Connectés. La problématique du projet est la suivante :","Zefxis is a project created around the subject of Internet of Things. The problematic is the following:"],
  "tr_proj_zefxis_2":["Soient différents écosystèmes d'objets connectés. Chaque écosystème a un ensemble d'objets connectés qui sont agencés de manière à générer, échanger et traiter des données. Les écosystèmes sont organisés selon un patron de conception \"éditeur-abonnés\", avec un courtier au centre de chaque écosystème. Chaque écosystème a sa propre architecture, et ses propres normes et protocoles. On veut que ces différents écosystèmes puissent échanger entre eux différentes données. Quelle(s) architecture(s) employer au sein de chaque écosystème et entre ces écosystèmes pour assurer une interopérabilité ?",
    "Let there be various ecosystems of connected objets. Each ecosystem has a set of connected objects which are arranged to produce, exchange and process data. The ecosystems are organised following a publish-subscribe design pattern, with a broker in the middle of every ecosystem. Each ecosystem has its own architecture, with its own norms and protocoles. We want all ecosystems to be able to exchange data of various types. Which architecture to use within and between each ecosystems in order to insure interoperability ?"],
  "tr_proj_zefxis_3":["Une première partie du problème est de pouvoir configurer des environnements facilement : on souhaite créer un scenario où on définit via un fichier les différents écosystèmes, avec les différents objets, les courtiers, les connexions entre ces acteurs et les connexions entre écosystèmes. Cette partie a été faite à l'aide d'un script Bash qui crée les écosystèmes, sous la forme de conteneurs Docker qui représentent le broker et auxquels des script Java vont se connecter pour échanger des messages à la manière ordonnée par le scénario.",
    "The first part of the project is to be able to easily configure environments: we want to create a scenario where we define in a configuration file the various ecosystems, with the objects, the brokers, the connections between these actors and the connections between the different ecosystems. This part was done using a Bash script which creates the ecosystems, in the form of Docker containers which act as the brokers, and to which Java scripts connect to exchange messages as defined by the scenario."],
  "tr_proj_zefxis_4":["La seconde partie du problème a consisté à tester différentes architectures pour gérer les problèmes de communication d'un écosystème à un autre : comment transmettre les données d'un écosystème utilisant un certain courtier (ex : MQTT) vers un autre écosystème utilisant un courtier différent (ex : RabbitMQ) ? De la même manière, un écosystème formate ses données d'une certaine manière (ex : JSON selon un format propre à l'écosystème) et qu'il souhaite envoyer ses données à un autre écosystème qui les formate d'une autre manière (ex : selon le standard NGSI-LD), comment gérer la traduction ?",
    "The second part of the problem is to try out various architectures to handle the problems of communications from one ecosystem to another: how to transfer data from one ecosystem which uses a broker (e.g. MQTT) to another which uses another broker (e.g. RabbitMQ)? Similarly, an ecosystem that formats data in a certain way (e.g. a JSON with a format specific to the ecosystem), and that wants to send its data to another ecosystem that formats them in an other way (e.g. following the NGSI-LD standard), how to handle the translation?"],
  "tr_proj_zefxis_5":["Cette seconde partie a constitué le cœur du projet, et a été riche en enseignements pour mon partenaire et moi : nous avons pu explorer l'état de l'art sur le sujet, découvrir des normes de formatage visant à couvrir les différents domaines. Cette partie nous a également permis de gérer différentes architectures pour résoudre les problèmes, en changeant la charge de la tâche de traduction à l’émetteur, au récepteur ou bien entre deux.",
    "This second part was the core of the project, and proved itself rich in lessons for my partner and myself: we could explore the state of the art on the subject and discover the existing norms aimed at covering most domains. This part also offered us the occasion to test many architectures to solve our problems, by changing where we put the charge of the translation: on the sender, the receiver or between them."],
  "tr_proj_zefxis_benefits":["Apports","Lessons"],
  "tr_proj_zefxis_6":["Ce projet a été pour moi l'occasion de mener un travail de recherche et d'expérimenter différentes architectures pour élaborer un outil sur lequel les années suivantes pourront s'appuyer.",
    "This project has offered me the opportunity to carry out a research work and to try out various architectures, in order to create a tool that the following students may use to further their research."],
  "tr_proj_zefxis_7":["Il m'a également permis d'apprendre à manipuler des technologies essentielles, telles que les conteneurs Docker, avec les dockerfile et les instructions \"docker compose\". En outre, j'ai pu manipuler différents systèmes de courtiers comme EMQX, RabbitMQ et MQTT, et utiliser des outils comme Paho pour assurer la communication entre Java et MQTT.",
    "It has also allowed me to learn how to use some essential technologies, such as the Docker containers, along with dockerfiles and the \"docker compose\" instructions. Furthermore, I also could manipulate various implementations of brokers such as EMQX, RabbitMQ or MQTT, and use tools like Paho to allow Java and MQTT to communicate."],
  "tr_proj_tankaf_context":["Contexte","Context"],
  "tr_proj_tankaf_1":["Tous les trois ans, MiNET, l'association de réseau de Télécom SudParis, organise à l'aide de ses clubs affiliés une grande soirée, au cours de laquelle elle propose différentes attractions variées. À ce titre, le club de création de jeux de Télécom SudParis, le CELL, a travaillé durant l'été sur un jeu sur le thème de la soirée : \"Steampunk\".",
    "Every three years, MiNET, the association handling the network at Télécom SudParis, organises with the help of its affiliated clubs a great party, during which it offers many varied activities. On this occasion, the games creation club at Télécom SudParis, the CELL, worked during the summer to create a game on the theme of the party : \"Steampunk\"."],
  "tr_proj_tankaf_desc":["Description du jeu","Description of the game"],
  "tr_proj_tankaf_2":["<b>Tank à Faire</b> propose à deux joueurs de s'affronter dans une arène, après avoir assemblé leur tank en choisissant chaque partie du tank parmi les différents éléments proposés (chenille, tourelle, châssis...). Chaque partie modifie différentes caractéristique du tank, telles que les dégâts, la vitesse de déplacement, la forme du tir principal et du tir secondaire...",
    "<b>Tank à Faire</b> lets two players face each other in an arena, after they have assembled their tanks by selecting each part among the various elements available (tracks, turrets, chassis...). Each part modifies the tank's characteristics, like the damage, speed, the trajectory of the main firing or secondary firing..."],
  "tr_proj_tankaf_dev":["Développement","Development"],
  "tr_proj_tankaf_3":["Nous étions 13 personnes à travailler sur ce projet. Nous avons pris la décision de travailler sur Godot pour créer le jeu <b>Tank à Faire</b>, car nous souhaitions découvrir Godot. Tous les assets de ce jeu ont été faits par nos soins, des modèles 3D aux effets sonores et aux musiques, en passant par l'interface en pixel art.",
    "We were 13 persons working on this project. We made the decision to work with Godot to create the game <b>Tank à Faire</b>, as we all wanted to learn Godot. All the game's assets were made by us, from the 3D models to the sound effects and the music, as well as the pixel-art UI."],
  "tr_proj_tankaf_role":["Rôle","Role"],
  "tr_proj_tankaf_4":["J'ai participé à ce projet en tant que <b>programmeur</b> et <b><i>game designer</i></b>. Cette expérience en tant que <i>game designer</i> m'a permis de travailler en équipe pour choisir quelles fonctionnalités apporter au jeu, mais aussi rédiger des instructions claires avec des schémas pour aider les autres participants à avancer durant le projet.",
    "I participated in this project as a <b>programmer</b> and a <b>game designer</b>. This experience as a game designer allowed me to work in a team to chose the functionalities to add to the game, but also to write clear instructions with schematics that the other participants can refer to all along the project"],
  "tr_proj_cassiop_title":["Projet Cassiopée : Je Suis Ma Ville", "Cassiopée Project : Je Suis Ma Ville"],
  "tr_proj_cassiop_dates":["Janvier 2021 - Juin 2021", "January 2021 - June 2021"]

}
// Translation est un dictionnaire

// Ça, c'est pour sélectionner toutes les divs (et autre) de la classe "translatable"
$(".translatable").html((index) => {
    // .text est une méthode qui prends en argument une fonction
    // Cette fonction doit renvoyer un texte, qui sera le nouveau texte l'intérieur de cette div
    // console.log($(".translatable")[index].id)
    // console.log($(cur_language))
    let myId = $(".translatable")[index].id
    // myId est l'identifiant de notre div
    return translation[myId][id_language]
  }
)
