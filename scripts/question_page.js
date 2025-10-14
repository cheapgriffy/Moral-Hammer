const title_node = document.getElementById("question_text")
const button_div = document.getElementById("button_div")
let question_index = 0


// TODO PLACEHOLDER, change later
let question_list = 
[
    {
        "title":"un example de question ",
        "answers" :
        [
            {
                "text":"❌Non",
                "value": -1
            },
            {
                "text":"✔️Oui",
                "value": 1
            }
            
        ]
    },
    {
        "title":"t'avait remarquer que dans la question precedante il y avait un espace en trop ?",
        "answers":
        [
            {
                "text":"❌Nan pour le coup",
                "value": -10
            },
            {
                "text":"✔️Bah ouais j'ai des yeux gros shlag",
                "value": 11
            }
        ]
    },
]


//////////////////////////////////////
//     TODO faire une fonction      //
//     pour les question a plusieur //
//     boutons                      //
//////////////////////////////////////



function init()
{
    question_index = 0
    render_question()
    
}

/**
 * Check for input, 
 * @returns button node
 */
function input()
{
    // filter la sert a degager les retour a la ligne qui pop dans le childnode de la button_div
    let button_div_array = Array.from(button_div.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

    button_div_array.forEach(element => {
        element.addEventListener("click", () =>
            {
                question_index++
                console.log("question_index = " + question_index)
                return element
            })
    });
}

function render_question()
{
    input()
}



init()