//Document
document.title = "Cas's Javascript Website"

//Body
const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);

const Title = document.createElement("div");
Title.id = "title";
Title.innerHTML = "My Cool Website";

mainDiv.appendChild(Title);
