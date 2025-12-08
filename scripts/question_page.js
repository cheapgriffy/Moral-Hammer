let player_stats ={
    current_score: 0
}

let doc_calls =
{
    title_node: document.getElementById("question_text"),
    button_div: document.getElementById("button_div")
}

let question_list = JSON.parse(localStorage.getItem("current_quiz"))

let question_list_bcpk = [
    {
        title: "un example de question ",
        answers:
        [
            {
                text:"❌ Non",
                value: -1
            },
            {
                text:"✔️ Oui",
                value: 1
            },
            
        ]
    },
    {
        title: "t'avait remarquer que dans la question precedante il y avait un espace en trop ?",
        answers:
        [
            {
                text:"❌Nan pour le coup",
                value: -10
            },
            {
                text:"✔️Bah ouais j'ai des yeux gros shlag",
                value: 11
            }
        ]
    },
    {
        title: "un petit test vite fait pour voir si l'array arrive bien a lire",
        answers:
        [
            {
                text: "ouais ça marche !",
                value: 10,
            },
            {
                text: "nan ça pue la merde",
                value: -19,
            },
        ]
    }
]

let question_index = 0

function render_questions(){
    doc_calls.title_node.innerText = question_list[question_index].title
    doc_calls.button_div.innerHTML = ""


    for (let i = 0; i < question_list[question_index].answers.length; i++) {
        const element = question_list[question_index].answers[i];


        doc_calls.button_div.innerHTML += `
        <button id="question_button_${i.toString()}" 
        class="bg-[#2c2e31] max-md:bg-[#3e4146] shadow-2xl text-[#cfcec3] max-md:text-lg text-2xl py-5 px-10 max-w-100 rounded-2xl text-center transition-all duration-500 hover:bg-amber-300 hover:text-[#323437] hover:shadow-amber-300/30">
        ${element.text}</button>`
    }
    
    console.log(`finished rendering "${doc_calls.title_node.innerText}"`)
    input()
}

function input(){
    let displayed_button = Array.from(doc_calls.button_div.children)

    for (let i = 0; i < displayed_button.length; i++) {
        const element = displayed_button[i];
        
        element.addEventListener("click", () => {
            player_stats.current_score += question_list[question_index].answers[i].value
            question_index ++
            render_questions()

            console.log(`Click sur "${question_list[question_index].answers[i].text}" ajout de ${question_list[question_index].answers[i].value} points, total : ${player_stats.current_score}`)
        })
    }

}

render_questions()

