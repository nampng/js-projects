var pictures = [
    "pic1",
    "pic2",
    "pic3",
    "pic4",
    "pic5"
];

var button_left = document.getElementById("prev");
var button_right = document.getElementById("next");
var imagebox = document.getElementById("showcase");
var counter = 0;

button_left.onclick = function(){
    if (counter > 0) {
        counter--;
        imagebox.src = "./img/" + pictures[counter] + ".jpg"
    }
};

button_right.onclick = function() {
    if (counter < 4) {
        counter++;
        imagebox.src = "./img/" + pictures[counter] + ".jpg"
    }
};