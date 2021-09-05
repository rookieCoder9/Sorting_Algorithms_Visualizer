function getValue(el) {
    //  console.log(document.getElementById("bars" + el).height)
    return +(document.getElementById("bars" + el).style.height.split('p')[0]);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function qs() {
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


    await quickSort(0, heights.length - 1);
    document.getElementById("bsort_button").disabled = false;
    document.getElementById("clear_button").disabled = false;
    document.getElementById("ssort_button").disabled = false;
    document.getElementById("isort_button").disabled = false;
    document.getElementById("new_button").disabled = false;
    document.getElementById("msort_button").disabled = false;
    document.getElementById("qsort_button").disabled = false;
    document.getElementById("sz").disabled = false;
    document.getElementById("speed").disabled = false;
    console.log(heights)
    await sleep(10);
    window.alert("Sort Completed !")

    //  createbars()
}

async function quickSort(low, high) {
    if (low < high) {
        /* pi is partitioning index, arr[p] is now 
        at right place */
        let pi = await partition(low, high);

        // Separately sort elements before 
        // partition and after partition 
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
}
async function partition(low, high) {
    pivot = heights[high]; // pivot 
    i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
    document.getElementById("bars" + (high)).className = "pivot"
    for (j = low; j <= high - 1; j++) {
        await sleep(delay);
        document.getElementById("bars" + (j)).className = "red"
        if (heights[j] < pivot) {
            i++;
            document.getElementById("bars" + (i)).className = "left"
            let temp = heights[i];
            heights[i] = heights[j];
            document.getElementById("bars" + (i)).style.height = heights[j] + "px";
            document.getElementById("bars" + (i)).innerText = heights[j];

            heights[j] = temp;
            document.getElementById("bars" + (j)).style.height = temp + "px";
            document.getElementById("bars" + (j)).innerText = temp;
            await sleep(delay)
            document.getElementById("bars" + (i)).className = "bars"
        }
        await sleep(delay)
        document.getElementById("bars" + (j)).className = "bars"
    }
    document.getElementById("bars" + (high)).className = "bars"

    let temp = heights[i + 1];
    heights[i + 1] = heights[high];
    document.getElementById("bars" + (i + 1)).style.height = heights[high] + "px";
    document.getElementById("bars" + (i + 1)).innerText = heights[high];
    heights[high] = temp;
    document.getElementById("bars" + (high)).style.height = temp + "px";
    document.getElementById("bars" + (high)).innerText = temp;
    await sleep(delay);


    return (i + 1);
}