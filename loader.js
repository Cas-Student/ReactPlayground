const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);

document.getElementById(mainDiv.id || "main").innerHTML = "My Website";
