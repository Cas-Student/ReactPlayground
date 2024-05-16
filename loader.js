var elements = {};

//Document
document.title = "Cas's Javascript Website"

//Body
const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);
elements.push("main",mainDiv.id);

const Title = document.createElement("div");
Title.class = "title";
Title.innerHTML = "My Cool Website";

mainDiv.appendChild(Title);

alert(elements);
