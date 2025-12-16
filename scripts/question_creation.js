let doc_calls = {
    preset_view_div: document.getElementById("current_preset"),
    reset_button: document.getElementById("reset_button")
}

//TODO Il faut pouvoir editer les values des reponses.

let question_list = JSON.parse(localStorage.getItem("current_quiz"))


/**
 * Edit DOM to embed questions
 * @param {questions} list 
 */
function render_preview(list) {
    let temp_html_element = ""
    doc_calls.preset_view_div.innerHTML = ""

    // Each element in questions root
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        temp_html_element = ""

        ///////////////////////
        //! DOM Modification //
        ///////////////////////

        // Summon Title Inputs template
        temp_html_element = `
        <input placeholder="${element.title}" id="title_${index}" class="text-xl text-[#cfcec3] font-semibold w-full text-center max-md:text-lg mt-10"></input>`

        // Summon every Anwsers Inputs beneith the Title 
        for (let i = 0; i < list[index].answers.length; i++) {
            const answer = list[index].answers[i];
            temp_html_element += `
            <input placeholder="${answer.text}" id="question_button_${i.toString()}" class="question_${index.toString()} bg-[#2c2e31] m-2 max-md:bg-[#323438] shadow-2xl text-[#cfcec3] max-md:text-xs text-sm py-3 px-5 max-w-100 rounded-2xl text-center transition-all duration-500 hover:bg-amber-300 hover:text-[#323437] hover:shadow-amber-300/30">
            </input>`
            if (i === list[index].answers.length - 1) {
                temp_html_element += `
                <button id="add_button_${index.toString()}" class="bg-[#2c2e31] max-md:bg-[#323438] w-10 shadow-2xl text-[#cfcec3] max-md:text-sm text-lg py-1 px-2 max-w-100 rounded-2xl text-center transition-all duration-500 hover:bg-amber-300 hover:text-[#323437] hover:shadow-amber-300/30">
                    +
                </button>`
            }
        }

        // Wrap Title + Answers + Buttons in a div.
        doc_calls.preset_view_div.innerHTML += `<div id="question_element${index}" class="flex flex-col items-center">${temp_html_element}</div>`
    }

    creation_part_input()
}

/**
 * Sets the even listeners using the master div childrens
 */
function creation_part_input() {
    let displayed_button = Array.from(doc_calls.preset_view_div.children)

    displayed_button.forEach(div_element => {

        for (let index = 0; index < Array.from(div_element.children).length; index++) {
            const input_element = Array.from(div_element.children)[index];

            // Handle input,
            // Filter id to locate where to edit,
            // Apply changes
            input_element.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    if (input_element.id.includes("title_")) {
                        question_list[input_element.id.replace(/\D/g, "")].title = input_element.value
                    }
                    else if (input_element.id.includes("question_button_")) {
                        question_list[input_element.parentNode.id.replace(/\D/g, "")].answers[input_element.id.replace(/\D/g, "")].text = input_element.value
                    }

                    render_preview(question_list)
                    localStorage.setItem("current_quiz", JSON.stringify(question_list))
                }
            });
            input_element.addEventListener("click", (event) => {
                if (input_element.id.includes("add_button_")) {
                    question_list[input_element.id.replace(/\D/g, "")].answers.push({ text: "Reponse 1", value: 1, })

                    render_preview(question_list)
                    localStorage.setItem("current_quiz", JSON.stringify(question_list))
                }
            })
        }
    });
}



doc_calls.reset_button.addEventListener("click", (event) => {
    console.log("test")
    confirm("ça va delete tout ce qui est deja la.")
    question_list = [
        {
            title: "Example question 1",
            answers:
                [
                    {
                        text: "❌ Non",
                        value: -1
                    },
                    {
                        text: "✔️ Oui",
                        value: 1
                    },

                ]
        },
        {
            title: "Example question a trois reponses",
            answers:
                [
                    {
                        text: "❌Nan pour le coup",
                        value: -1
                    },
                    {
                        text: "✔️Bah ouais j'ai des yeux gros shlag",
                        value: 1
                    },
                    {
                        text: "PLaceholder de zinzin",
                        value: 1
                    },
                ]
        },
        {
            title: "Example question 2",
            answers:
                [
                    {
                        text: "Tellement",
                        value: 1,
                    },
                    {
                        text: "nan ça pue la merde",
                        value: -1,
                    },
                ]
        }
    ]

    localStorage.setItem("current_quiz", JSON.stringify(question_list))
    console.log('localStorage, edited')
    render_preview(question_list)
})

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


render_preview(question_list)




// TODO Remove after debug
document.addEventListener("keydown", (event) => {
    if (event.key === "k") {
        console.log(question_list)
    }
});
