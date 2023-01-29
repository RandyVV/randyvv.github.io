const presentationArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">Qui je suis</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">Le passé</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">L\'avenir</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">Mes passions</button>'
]

const projectArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">GameFriendZ</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">Mario-animation</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">To-do-list</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">En-voiture-Laravel</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button05">Tic-tac-toe</button>',
]

const technoArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button01">Javascript</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button02">React</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">HTML</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">CSS</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button05">GitHub</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button06">Laravel</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button08">Symfony</button>',
]

const contactArray = [
    '<button class="secondary-button secondary-button-display-none" id="secondary-button03">Reseaux</button>',
    '<button class="secondary-button secondary-button-display-none" id="secondary-button04">CV en ligne</button>',

]

const contentMap = {
    "Qui je suis": {
        text: "Qui je suis",
        image: "/images/maphoto.jpg",
        description: "Je m'appelle Randy Venant-Valéry, je suis un développeur web passionné basé à Villeneuve-Sur-Lot, dans le Sud-Ouest de la France. L'été 2022 a été le début d'une nouvelle aventure pour moi, lorsque j'ai décidé de me reconvertir dans le développement web. Depuis, je me suis plongé avec enthousiasme dans l'apprentissage de nombreuses technologies, que je mets maintenant au service de projets passionnants."
    },
    "Le passé": {
        text: "Le passé",
        image: "/images/clock.png",
        description: "Je suis passé par plusieurs secteurs d'activité, j'étais Chef de ligne en agroalimentaire puis je suis devenu vendeur en magasin."
    },
    "L'avenir": {
        text: "L'avenir",
        image: "/images/futur.png",
        description: "Ayant suivi une formation certifiée par l'État (bac+2), je suis prêt à relever de nouveaux défis et à mettre mes compétences à disposition d'une entreprise inspirante et bienveillante où je pourrais continuer à apprendre et à grandir professionnellement. Je suis motivé à prouver mes capacités et à contribuer au succès de l'entreprise."
    },
    "Mes passions": {
        text: "Mes passions",
        image: "/images/newtechno.jpg",
        description: "Passionné de nouvelles technologies et des jeux vidéo, ces passions ne sont pas sans lien avec mon attirance vers le métier de développeur. En effet on y retrouve beaucoup de similitude que se soit la réflexion, l'entraide et l'aventure. Je suis également un grand passionné de cinéma et tout ce qui touche à la réalisation."
    },
    "GameFriendZ": {
        text: "GameFriendZ",
        image: "/images/gfz.png",
        description: "GameFriendZ est un site de recherche de joueurs dans le domaine du jeu vidéo. C'est le site que j'ai réalisé durant ma formation et présenté le jour de mon passage au Titre Professionnel. Ayant suivi une spécialisation sur Symfony, je me suis occupé de la partie Back-End du projet. Aujourd'hui je continue d'améliorer le projet.",
        link: '<a class="link-project" target="_blank" href="https://www.gamefriendz.com">Voir le site</a>'
    },
    "Mario-animation": {
        text: "Mario-animation",
        image: "/images/mario.png",
        description: "Ce projet m'a permis de travailler HTML, CSS et un peu de JS en prenant l'exemple du jeu de mon enfance.",
        link: '<a class="link-project" target="_blank" href="https://github.com/RandyVV/mario-animation">GitHub</a>'
    },
    "To-do-list": {
        text: "To-do-list",
        image: "/images/todolist.png",
        description: "Ayant suivi un socle PHP et une spécialisation sur Symfony durant ma formation, j'ai voulu me tourner vers du JS pour revoir des notions en prenant pour base une to do list.",
        link: '<a class="link-project" target="_blank" href="https://github.com/RandyVV/to-do-list">GitHub</a>'

    },
    "En-voiture-Laravel": {
        text: "En-voiture-Laravel",
        image: "/images/voitures.webp",
        description: "Durant la formation on a légérement touché à Laravel, j'ai voulu continuer en effectuant une API Rest avec Laravel 9. De mon point de vue je retrouve beaucoup de choses similaires à Symfony mais en moins verbeux.",
        link: '<a class="link-project" target="_blank" href="https://github.com/RandyVV/En-voiture-Laravel">GitHub</a>'

    },
    "Tic-tac-toe": {
        text: "Tic-tac-toe",
        image: "/images/morpion.png",
        description: "Toujours pour m'entraîner sur du HTML, CSS et JS j'ai réalisé un jeu du morpion.",
        link: '<a class="link-project" target="_blank" href="https://github.com/RandyVV/tic-tac-toe">GitHub</a>'

    },
    "Javascript": {
        text: "Javascript",
        image: "/images/javascript.png",
        description: "Le Javascript est un outil merveilleux que j'applique avec methodologie depuis que j'ai découvert toutes les possibilités qu'il offre pour manipuler le DOM. Que ce soit pour les projets Front ou Back-End, JS me permet de gérer des projets complets avec une seule et même syntaxe, cela me permet de me concentrer sur les fonctionnalités de mon projet."
    },
    "React": {
        text: "React",
        image: "/images/react.png",
        description: "React est une librairie JavaScript qui m'a permis de découvrir de nouvelles possibilités de création tout en gardant une grande flexibilité pour maintenir les projets. Ayant une bonne maîtrise du Javascript, j'ai pu me concentrer sur l'apprentissage de React pour écrire des codes propres et facilement modifiables."
    },
    "Symfony": {
        text: "Symfony",
        image: "/images/symfo.png",
        description: "Symfony est la technologie que j'ai suivi en spécialisation durant ma formation, il m'a permi de développer la partie Back-end de mon projet. "
    },
    "HTML": {
        text: "HTML",
        image: "/images/html.png",
        description: "Le HTML5 est la pierre angulaire du développement web, c'est pourquoi je me suis efforcé de le maîtriser de manière à respecter les normes W3C et les bonnes pratiques SEO. Cela me permet de créer des sites web standards et bien structurés."
    },
    "CSS": {
        text: "CSS",
        image: "/images/css.png",
        description: "En utilisant des outils tels que SASS et CSS Grid, je peux créer des designs réactifs et modernes tout en maintenant une structure de code propre et facile à maintenir. Je m'efforce également de suivre les dernières tendances en matière de design pour offrir des designs contemporains à mes projets."
    },
    "Laravel": {
        text: "Laravel",
        image: "./images/laravel.png",
        description: "J'ai commencé à apprendre Laravel dans le cadre de ma formation et je continue à appronfondir en réalisant des projets"
    },
    "GitHub": {
        text: "GitHub",
        image: "/images/github.png",
        description: "GitHub est également un outil indispensable pour la collaboration sur des projets en équipe, avec des fonctionnalités telles que les pull requests et les branches, qui facilitent la gestion des contributions et des modifications de code. Je m'efforce de maintenir un code clair et documenté pour que mes projets soient faciles à comprendre et à utiliser pour d'autres développeurs."
    },
    "Reseaux": {
        text: "Reseaux",
        image: "/images/social.webp",
        description: "Je suis présent sur les réseaux sociaux professionnels tels que LinkedIn et Twitter afin de partager mes connaissances et mon expérience dans le développement web avec la communauté. Je maintiens une présence active sur ces plateformes en partageant mes projets et en discutant avec d'autres développeurs. Cela me permet également de rester informé des dernières tendances et des nouvelles technologies.",
        link: '<a class="link-project" target="_blank" href="https://www.linkedin.com/in/randy-vv/">Me contacter sur LinkedIn</a>'
    },
    "CV en ligne": {
        text: "CV en ligne",
        image: "/images/cv.jfif",
        description: '<a target="_blank" class="link-project" href=/images/RandyVENANT-VALERYCV.pdf>mon CV</a>'
    },
};
const mainContent = document.getElementById('main-content')
const mainTitle = document.getElementById('main-title')
const mainImage = document.getElementById('main-image')
const mainDescription = document.getElementById('main-description')
const mainLink = document.getElementById('main-link')

const secondaryNavigationTitle = document.getElementById('secondary-navigation-title')
const secondaryNavigation = document.getElementById('secondary-navigation')

const allMainButtons = document.getElementsByClassName('main-button')

const mainButton01 = document.getElementById('main-button01')
const mainButton02 = document.getElementById('main-button02')
const mainButton03 = document.getElementById('main-button03')
const mainButton04 = document.getElementById('main-button04')


const secondaryButton01 = document.getElementById('secondary-button01')
const secondaryButton02 = document.getElementById('secondary-button02')
const secondaryButton03 = document.getElementById('secondary-button03')
const secondaryButton04 = document.getElementById('secondary-button04')

const mainBorderLeft = document.getElementById('main-border-left')
const mainBorderRight = document.getElementById('main-border-right')

mainButton01.addEventListener('click', displayButtonPresentation)
mainButton02.addEventListener('click', displayButtonProject)
mainButton03.addEventListener('click', displayButtonTechno)
mainButton04.addEventListener('click', displayButtonContact)

for (let i = 0; i < allMainButtons.length; i++) {
    //ecoute le clik sur chaque bouton
    allMainButtons[i].addEventListener("click", ActiveBtn);
    allMainButtons[i].addEventListener("click", AnimationBtn);
}

function AnimationBtn() {

    let secondaryButtons = document.querySelectorAll('.secondary-button');
    for (let i = 0; i < secondaryButtons.length; i++) {
        setTimeout(function () {
            secondaryButtons[i].classList.remove('secondary-button-display-none')
            secondaryButtons[i].classList.add('secondary-button-animation');
        }, 200 * i);
    }

}

function ActiveBtn() {
    let secondaryButtons = document.querySelectorAll('.secondary-button');
    for (let i = 0; i < secondaryButtons.length; i++) {
        secondaryButtons[i].addEventListener('mouseover', function () {
            this.style.borderColor = "#e0acd5";
        });
    }
    let currentBtn = document.getElementsByClassName("active");
    //retire la classe active sur le bouton courant
    currentBtn[0].classList.remove('active');
    //ajoute la classe active sur le nouveau bouton
    this.classList.add('active');

    //L211 à L214, rajout puis suppression de classe pour l'animation
    mainContent.classList.add('main-content-animation')
    setTimeout(function () {
        mainContent.classList.remove('main-content-animation')
    }, 1000)
    for (let i = 0; i < allMainButtons.length; i++) {
        allMainButtons[i].style.borderColor = "white";
    }
    if (this.id === 'main-button01') {
        this.style.borderColor = "#3abeff";
        mainBorderLeft.style.borderColor = "#3abeff";
        mainBorderRight.style.borderColor = "#3abeff";
        secondaryNavigation.style.borderColor = "#3abeff";
        mainImage.style.borderColor = "#3abeff"
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#3abeff";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#3abeff";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button02') {
        this.style.borderColor = "#fdca40";
        mainBorderLeft.style.borderColor = "#fdca40";
        mainBorderRight.style.borderColor = "#fdca40";
        secondaryNavigation.style.borderColor = "#fdca40";
        mainImage.style.borderColor = "#fdca40"
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#fdca40";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#fdca40";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button03') {
        this.style.borderColor = "#e0acd5";
        mainBorderLeft.style.borderColor = "#e0acd5";
        mainBorderRight.style.borderColor = "#e0acd5";
        secondaryNavigation.style.borderColor = "#e0acd5";
        mainImage.style.borderColor = "#e0acd5";
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#e0acd5";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#e0acd5";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
    else if (this.id === 'main-button04') {
        this.style.borderColor = "#32936f";
        mainBorderLeft.style.borderColor = "#32936f";
        mainBorderRight.style.borderColor = "#32936f";
        secondaryNavigation.style.borderColor = "#32936f";
        mainImage.style.borderColor = "#32936f";
        for (let i = 0; i < secondaryButtons.length; i++) {
            secondaryButtons[i].addEventListener('mouseover', function () {
                this.style.borderColor = "#32936f";
            });
            secondaryButtons[i].addEventListener('mouseout', function () {
                this.style.borderColor = "white";
            });
            secondaryButtons[i].addEventListener('focus', function () {
                this.style.backgroundColor = "#32936f";
            });
            secondaryButtons[i].addEventListener('focusout', function () {
                this.style.backgroundColor = "#1d1d20";
            });
        }
    }
}

function displayButtonPresentation() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "/images/presentation.png"
    mainTitle.innerHTML = "Présentation"
    mainDescription.innerHTML = "Vous voulez en savoir plus sur moi ? parcourez cette section pour faire un tour d'horizon de qui je suis.";
    secondaryNavigationTitle.innerHTML = "Je me présente"
    presentationArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('presentation-button')
    });
}

function displayButtonProject() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "/images/rouage.png"
    mainTitle.innerHTML = "Mes projets"
    mainDescription.innerHTML = "Vous trouverez ici un récapitulatif de mes differents projets de développeur. Certains sont conçus dans le cadre de la formation O'clock, d'autres sont des projets personnels."
    secondaryNavigationTitle.innerHTML = "Mes projets"
    projectArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('project-button')
    });
}

function displayButtonTechno() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "/images/tech-icon.png"
    mainTitle.innerHTML = "Les technologies"
    mainDescription.innerHTML = "Decouvrez les differentes technologies que j'ai apprit à maitriser depuis le début de ma formation en tant que développeur web.";
    secondaryNavigationTitle.innerHTML = "Les technologies"
    technoArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('techno-button')
    })
}

function displayButtonContact() {
    secondaryNavigation.innerHTML = ""
    mainLink.innerHTML = ""
    mainImage.src = "/images/contact.png"
    mainTitle.innerHTML = "comment me joindre?"
    mainDescription.innerHTML = "<p>Vous desirez me contacter? En savoir plus sur moi ou tout simplement parler dev?</p> <p>Ca se passe ici...</p>"
    secondaryNavigationTitle.innerHTML = "Me contacter"
    contactArray.forEach(element => {
        let newButton = document.createElement("nav");
        newButton.innerHTML = element;
        secondaryNavigation.appendChild(newButton);
        newButton.classList.add('contact-button')
    })
}

secondaryNavigation.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        displayContent(event.target.innerHTML);
    }
});

function displayContent() {
    const content = contentMap[event.target.innerHTML];
    if (content) {
        mainTitle.innerHTML = content.text;
        mainImage.src = content.image;
        mainDescription.innerHTML = content.description;
        mainDescription.classList.add('main-description-animation')
        mainImage.classList.add('main-image-animation')
        setTimeout(function () {
            mainDescription.classList.remove('main-description-animation')
            mainImage.classList.remove('main-image-animation')
        }, 500)
        if (content.link === undefined) {
            mainLink.innerHTML = ""
        } else {
            mainLink.innerHTML = content.link
        }
    } else {
        console.log("content not found")
    }
}
