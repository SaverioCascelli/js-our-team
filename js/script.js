const container = document.querySelector(".container");

const cardRow = document.createElement("div");
cardRow.classList.add("row","align.content-start" ,"sc-row");

container.append(cardRow);



// -----------------**Milestone 0**----------------------------------------
//Creare l’array di oggetti con le informazioni fornite.
const staff =[
    {
        name:"Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name:"Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }
];

printInfo();

staffInCard();

addQualities();
addQualityInHtml();
console.log(staff);




//-----------------**Milestone 1**----------------------------------------
//Stampare su console le informazioni di nome, ruolo e la stringa della foto
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
//Stampare le stesse informazioni su DOM sotto forma di stringhe
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


// -----------------**Milestone 3 + Bonus**----------------------------------------
//Stampare delle card formattate contenete immagini e testo
//Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
function staffInCard(){
    for (const member of staff) {


         cardRow.innerHTML += `<div class="col-4 mb-5">
                            <div class="card text-center" style="width: 18rem" name="${member.name}">
                                <div class="card-img-top position-relative overflow-hidden">
                                    <img class="card-img-top" src="img/${member.image}"  alt="${member.name}">
                                    <div class="sc-toggle" >
                                    </div>    
                                </div>
                                
                                <div class="card-body">
                                    <h5 class="text-secondary">${member.name}</h5>
                                    <p class="text-secondary card-text">${member.role}</p>          
                                </div>
                            </div>
                        </div>`
        
    }
}


// -----------------**Bonus**----------------------------------------

function addQualities(){
    staff[0].qualities = ["Intuitive","Passionate","Leadership"];
    staff[1].qualities = ["Intuitive","Passionate","Friendly"];
    staff[2].qualities = ["Intuitive","Passionate","Leadership"];
    staff[5].qualities = ["Intuitive","Passionate","Leadership"];
}

function addQualityInHtml(){
    const htmlQualities = document.getElementsByClassName("sc-toggle");
    for (const memberIndex in staff) {
        if(staff[memberIndex].qualities){
            let height = 15;
            for (const quality of staff[memberIndex].qualities) {
                htmlQualities[memberIndex].innerHTML += `<span class="position-absolute badge rounded-pill text-bg-primary " style="bottom:${height}%;">${quality}</span>`;
                height += 10;
            }
           height =15; 
        }
    }
}








