const container = document.querySelector(".container");

const cardRow = document.createElement("div");
cardRow.classList.add("row","h-100","align.content-start");

container.append(cardRow);

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

for (const member of staff) {
    let st = "";
    st += 
`<-------------------------------------------------->
nome: ${member.name}
ruolo: ${member.role}
image src = ${member.image}`;
    console.log(st);
}