var count1 =1;
var count2 = 2;
var rowIndex=0;
//Method that insert rows with 2 columns
function addRow () {
    var table = document.getElementById ("dynamic-table");
    var row = table.insertRow (rowIndex++);
    var cell1 = row.insertCell (0);
    var cell2 = row.insertCell (1);  
    cell1.innerHTML = "cell" + count1;
    cell2.innerHTML = "cell" + count2;
    count1= count1 + 2; 
    count2 = count2 + 2;
} 

