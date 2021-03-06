let multiTable = document.getElementById("multiTable");
let data = "";

for (let row = 1; row <= 9; row++) {
    data += "<tr>";
    for (let col = 2; col <= 9; col++) {
        data += "<td>" + col + "x" + row + "=" + (col * row);
    }
    data += "</tr>";
}

multiTable.innerHTML = data;