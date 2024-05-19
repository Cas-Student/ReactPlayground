var elements = {};

//Document
document.title = "Cas's Javascript Website"

//Body
const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);

const header = document.createElement("div");
header.class = "header";
header.innerHTML = "My Cool Website";

//Adds the title to the webpage.
mainDiv.appendChild(header);
