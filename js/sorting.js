delay = 100
size = 50;
var myNode = document.body;
height_glob = [];
function createbars() {
    let temp = document.getElementById("sz").value;
    if (temp != "") {
        size = +(temp);
    }
    if (document.getElementById("speed").value != "") {
        delay = document.getElementById("speed").value;
    }

    let barbody = document.getElementById("bar_body");
    barbody.innerHTML = "";
    barbody.style.width = size * (22.2);




    heights = [];



    for (let i = 0; i < size; i++) {
        heights.push(Math.floor(Math.random() * ((100) - 1) + 1));

        bars_temp = document.createElement("div");
        bars_temp.id = "bars" + (i);
        bars_temp.className = "bars";



        bars_temp.style.height = heights[i];
        bars_temp.innerText = heights[i];
        document.getElementById("bar_body").appendChild(bars_temp);





    }


    height_glob = heights;

}

function clrscreen() {

    let temp = document.getElementById("bar_body");
    if (temp.childNodes.length == 0) {
        alert("Create Array First !");
        return;
    }
    else {
        temp.innerHTML = "";
    }
    height_glob = [];
}




