const container = document.querySelector(".container");

const cardRow = document.createElement("div");
cardRow.classList.add("row","align.content-start");

container.append(cardRow);

// -----------------**Milestone 0**----------------------------------------
const staff =[
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];



// -----------------**Milestone 1**----------------------------------------
for (const member of staff) {
    let st = "";
    st += 
`\n<-------------------------------------------------->\n
nome: ${member.name}\n
ruolo: ${member.role}\n
image src = ${member.image}\n`;
    console.log(st);
}


// -----------------**Milestone 2**----------------------------------------
function printInfo(){
    let st = "";
    const infoRow = document.createElement("div");
    infoRow.classList.add("row","align.content-start");
    container.append(infoRow);

    for (const member of staff) {
        st += 
    `<--------------------------------------------------> <br>
    nome: ${member.name}<br>
    ruolo: ${member.role}<br>
    image src = ${member.image}<br>`;
    }

    infoRow.innerHTML = `<div class="col"> <p> ${st}</p> </div>`
}

printInfo();