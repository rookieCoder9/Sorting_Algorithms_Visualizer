
buffer = 9;

function getValue(el) {
    //  console.log(document.getElementById("bars" + el).height)
    return +(document.getElementById("bars" + el).style.height.split('p')[0]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bs() {
    if (height_glob.length == 0) {
        alert("Create an Array First");
        return;
    }
     if (document.getElementById("speed").value != "") {
        delay = document.getElementById("speed").value;
    }
    document.getElementById("bsort_button").disabled = true;
    document.getElementById("clear_button").disabled = true;
    document.getElementById("ssort_button").disabled = true;
    document.getElementById("isort_button").disabled = true;
    document.getElementById("new_button").disabled = true;
    document.getElementById("msort_button").disabled = true;
    document.getElementById("qsort_button").disabled = true;
    document.getElementById("sz").disabled = true;
    document.getElementById("speed").disabled = true;
    n = heights.length;
    swapped = false;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            a = getValue(j);
            b = getValue(j + 1);

            document.getElementById("bars" + (j)).className = "red"
            document.getElementById("bars" + (j + 1)).className = "red"

            if (a > b) {
                // myNode.childNodes[j + 9].style.


                await sleep(delay);

                document.getElementById("bars" + (j)).style.height = b + "px";
                document.getElementById("bars" + (j)).innerText = b;
                document.getElementById("bars" + (j + 1)).style.height = a + "px";
                document.getElementById("bars" + (j + 1)).innerText = a;




                // swap arr[j] and arr[j+1]


            } await sleep(delay); document.getElementById("bars" + (j)).className = "bars";
            document.getElementById("bars" + (j + 1)).className = "bars";
        }
    }
    document.getElementById("bsort_button").disabled = false;
    document.getElementById("clear_button").disabled = false;
    document.getElementById("ssort_button").disabled = false;
    document.getElementById("isort_button").disabled = false;
    document.getElementById("new_button").disabled = false;
    document.getElementById("msort_button").disabled = false;
    document.getElementById("qsort_button").disabled = false;
    document.getElementById("sz").disabled = false;
    document.getElementById("speed").disabled = false;
    await sleep(20);
    window.alert("Sort Completed !")
    //   createbars()





}
