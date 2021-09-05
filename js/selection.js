

function getValue(el) {

    return +(document.getElementById("bars" + el).style.height.split('p')[0]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ss() {
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

    for (i = 0; i < n - 1; i++) {
        a = getValue(i);
        value_i = a
        var temp = i;
        for (j = i + 1; j <= n - 1; j++) {

            b = getValue(j);
            if (a > b) {
                a = b;
                temp = j;

            }
        }
        await sleep(delay);
        document.getElementById("bars" + (i)).className = "red"
        document.getElementById("bars" + (temp)).className = "red"

        await sleep(delay);

        document.getElementById("bars" + (i)).style.height = a + "px";
        document.getElementById("bars" + (i)).innerText = a;
        document.getElementById("bars" + (temp)).style.height = value_i + "px";
        document.getElementById("bars" + (temp)).innerText = value_i;

        await sleep(delay);

        document.getElementById("bars" + (i)).className = "bars";
        document.getElementById("bars" + (temp)).className = "bars";



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
    await sleep(10);

    window.alert("Sort Completed !")
    //  createbars()



}