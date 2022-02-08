var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];
var autobot = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
var decepticon =   "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

window.onload = function() {
    chrs.forEach(e => {
        var ele = document.createElement("div");
        ele.innerHTML = e.number;
        ele.classList.add("character");
        var image = autobot;
        if (e.afl === "decepticon") {
            image = decepticon;
        }

        var color = "";
        switch (e.vehicle) {
            case "truck":
                color = "blue";
                break;
            case "tank":
                color = "green";
                break;
            case "car":
                color = "gold";
                break;
            case "plane":
                color = "white";
                break;
            default:
                color = "white";
        }
        var character = `<img src=${image} />
Name: ${e.name}<br>
Class: ${e.class.toUpperCase()}<br>
Vehicle: ${e.vehicle.fontcolor(color)}`;
        ele.innerHTML = character;
        ele.classList.add(e.afl);
        document.body.appendChild(ele);
    });
}