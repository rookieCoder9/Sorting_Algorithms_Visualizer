
function getValue(el) {
    //  console.log(document.getElementById("bars" + el).height)
    return +(document.getElementById("bars" + el).style.height.split('p')[0]);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sort() {
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

    temp = document.createElement("div");
    temp.id = "merge_body_left";
    temp.className = "mergebodyleft";
    document.body.appendChild(temp);
    let temp2 = document.createElement("div");
    temp2.id = "merge_body_right";
    temp2.className = "mergebodyright";
    document.body.appendChild(temp2);
    // await sleep(500);
    await mergeSort(0, heights.length - 1);
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
    //  createbars()

}
async function mergeSort(l, r) {
    if (l < r) {
        let mid = Math.floor(l + (r - l) / 2);

        await mergeSort(l, mid);
        //  await sleep(100)

        await mergeSort(mid + 1, r);
        //  await sleep(100)

        await merge(l, mid, r);
        //  await sleep(100)
    }
}
async function merge(l, mid, r) {
    for (let a = l; a <= r; a++) {
        document.getElementById("bars" + (a)).className = "red"
    }
    await sleep(delay);
    let s1 = mid - l + 1;
    let s2 = r - (mid);
    left = []; right = [];
    left_body = document.getElementById("merge_body_left");
    left_body.innerHTML = "";
    right_body = document.getElementById("merge_body_right")
    right_body.innerHTML = "";
    for (let a = 0; a < (s1); a++) {
        left[a] = heights[l + a];
        //   let temp = document.createElement("div");
        //   temp.id = "mergebarsleft" + (a);
        //   temp.className = "mergebars";



        //   temp.style.height = left[a];
        //   left_body.appendChild(temp);

    }



    for (let a = 0; a < s2; a++) {
        right[a] = heights[mid + 1 + a];
        //    let temp = document.createElement("div");
        //   temp.id = "mergebarsright" + (a);
        //   temp.className = "mergebars";



        //  temp.style.height = right[a];
        //   right_body.appendChild(temp);


    }



    let i = 0, j = 0, k = l;
    while (i < s1 && j < s2) {

        //    document.getElementById("mergebarsleft" + (i)).className = "red"
        //   document.getElementById("mergebarsright" + (j)).className = "red"
        await sleep(delay);
        if (left[i] > right[j]) {
            heights[k] = right[j];
            document.getElementById("bars" + (k)).style.height = heights[k] + "px";
            document.getElementById("bars" + (k)).innerText = heights[k];

            j++;
        }
        else {
            heights[k] = left[i];
            document.getElementById("bars" + (k)).style.height = heights[k] + "px";
            document.getElementById("bars" + (k)).innerText = heights[k];
            i++;
        }
        await sleep(delay)
        document.getElementById("bars" + (k)).className = "bars";
        k++;
    }
    while (i < s1) {
        await sleep(delay);

        //  await sleep(100);
        //  console.log(i + "---- " + s1);
        //   document.getElementById("mergebarsleft" + (i)).className = "red"
        heights[k] = left[i];
        document.getElementById("bars" + (k)).style.height = heights[k] + "px";
        document.getElementById("bars" + (k)).innerText = heights[k];
        await sleep(delay);
        document.getElementById("bars" + (k)).className = "bars";
        k++; i++;
    }
    while (j < s2) {
        await sleep(delay);

        //   await sleep(100);
        //  document.getElementById("mergebarsright" + (j)).className = "red"
        heights[k] = right[j];
        document.getElementById("bars" + (k)).style.height = heights[k] + "px";
        document.getElementById("bars" + (k)).innerText = heights[k];
        await sleep(delay)
        document.getElementById("bars" + (k)).className = "bars";
        k++; j++;
    }
    // await sleep(delay);

}




/* Iterative mergesort function to sort arr[0...n-1] */
