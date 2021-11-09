const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

let audio = new Audio('https://www.myinstants.com/media/sounds/cringe.mp3');
decision = new Audio ('https://soundbible.com/mp3/Shake%20And%20Roll%20Dice-SoundBible.com-591494296.mp3');

function startGame(){
    state={}
    showTextNode(1)

}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}

textNode.options.forEach(option => {
    if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)
            decision.play()
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0){
        return startGame() + audio.play()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id:1,
        text:"Bienvenidx al recorrido por la Educación Sexual Integral. Aquí se encuentra información primordial para educarse en lo que se necesite respecto a diversos temas. Dejá tu vergüenza por algún lado antes de entrar y preparate.",
        options: [
            {
                text:"Estoy preparadx, sigamos.",
                nextText: 2
            },
            {
                text:"¿Necesito algo para seguir?",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "El término ‘sexualidad’ se refiere a una dimensión fundamental del hecho de ser humano. Se expresa en forma de pensamientos, fantasías, deseos, creencias, actitudes, valores, actividades, prácticas, roles y relaciones. La sexualidad es el resultado de la interacción de factores biológicos, psicológicos, socioeconómicos, culturales, éticos y religiosos o espirituales.En resumen, la sexualidad se practica y se expresa en todo lo que somos, sentimos, pensamos y hacemos ",
        options: [
            {
                text: "Sigamos",
                nextText: 3
            },
            {
                text: "Pensé que tenía que ver con mis genitales o relaciones sexuales ¿No es así?",
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: "",
        options: [
            {
                text: "",
                nextText: 4
            },
            {
                text: "",
                nextText: 5
            },
            {
                text: "",
                nextText: 6
            }
        ]
    },  
    {
        id: 4,
        text: "Consideramos a la sexualidad como una de las dimensiones constitutivas de la persona, relevante para su despliegue y bienestar durante toda la vida",
        options: [
            {
                text: "",
                nextText: -1,
            
            }
        ]

    },
    {
        id: 5,
        text: "",
        options: [
            {
                text: "",
                nextText: 7
            },{
                text: "",
                nextText: 6
            }
        ]

    },
    {
        id: 6,
        text: "",
        options: [
            {
                text: "",
                nextText: -1,
                
            }
        ]

    },
    {
        id: 9,
        text: "",
        options: [
            {
                text: "",
                nextText: 3
            }
        ]

    },
    {
        id: 22,
        text: "",
        options: [
            {
                text: "",
                nextText: 3
            }
        ]

    },
    {
        id: 7,
        text: "",
        options: [
            {
                text: "",
                nextText: 10
            },
            {
                text: "",
                nextText:10
            }
            
        ]

    },
    {
        id: 10,
        text: "",
        options: [
            {
                text: "",
                nextText: 11
            },
            {
                text: "",
                nextText: 13
            }
        ]

    },
    {
        id: 11,
        text: "",
        options: [
            {
                text: "",
                nextText: 12
            },
            {
                text: "",
                nextText: 21
            }
        ]

    },
    {
        id: 12,
        text: "",
        options: [
            {
                text: "",
                nextText: 16
            }
        ]

    },
    {
        id: 21,
        text: "",
        options: [
            {
                text: "",
                nextText: -1,
                
            },
            {
                text: "",
                nextText: -1,
                
            }
        ]

    },
    {
        id: 13,
        text: "",
        options: [
            {
                text: "",
                nextText: 17
            },
            {
                text: "",
                nextText: 18
            },
            {
                text: "",
                nextText: 19
            }
        ]

    }
]

startGame()