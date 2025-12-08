let doc_calls = {
    preset_view_div: document.getElementById("current_preset")
}

let question_list = [
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
            }
            
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

function render_preview(list){
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        

        doc_calls.preset_view_div.innerHTML += `
        <input placeholder="${element.title}" class="text-xl text-[#cfcec3] font-semibold w-full text-center max-md:text-lg mt-10"></input>
        `
        for (let i = 0; i < list[index].answers.length; i++) {
            const e = list[index].answers[i];

            doc_calls.preset_view_div.innerHTML += `
            <input placeholder="${e.text}" id="question_button_${i.toString()}" 
            class="question_${index.toString()} bg-[#2c2e31] m-2 max-md:bg-[#323438] shadow-2xl text-[#cfcec3] max-md:text-xs text-sm py-3 px-5 max-w-100 rounded-2xl text-center transition-all duration-500 hover:bg-amber-300 hover:text-[#323437] hover:shadow-amber-300/30">
            </imput>`
        }
        
    }
    // list.forEach(element => {
    //     console.log(element)
    //     doc_calls.preset_view_div.innerHTML += `
    //     <h5 class="text-2xl text-[#cfcec3] font-semibold w-full text-center max-md:text-lg">${element.title}</h5>
    //     `
    // });
}

render_preview(question_list)