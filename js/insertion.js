
buffer = 9;

function getValue(el) {
    //  console.log(document.getElementById("bars" + el).height)
    return +(document.getElementById("bars" + el).style.height.split('p')[0]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function is() {
    if (height_glob.length == 0) {
        alert("Create an Array First");
        return;
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


    for (let i = 1; i < n; i++) {

        let current = getValue(i);

        let j = i - 1;

        await sleep(delay);
        while ((j > -1) && (current < (getValue(j)))) {
            document.getElementById("bars" + (i)).className = "red"
            document.getElementById("bars" + (j)).className = "red"
            await sleep(delay);
            document.getElementById("bars" + (j + 1)).style.height = getValue(j) + "px";
            document.getElementById("bars" + (j + 1)).innerText = getValue(j);
            await sleep(delay);
            document.getElementById("bars" + (i)).className = "bars"
            document.getElementById("bars" + (j)).className = "bars"
            j--;

        }
        document.getElementById("bars" + (j + 1)).style.height = current + "px";
        document.getElementById("bars" + (j + 1)).innerText = current;
        await sleep(delay);



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
    await sleep(100);
    window.alert("Sort Completed !")
    // createbars()
}





