// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
// Add a row
function addR() {
    let table = document.getElementById('grid'); // table reference
    var row = table.insertRow(0); // insert a row into the html
    numRows++; // add 1 to the global variable numRows
    if(numCols == 0){ // if Column is zero then add a new cell at 0 and add 1 to the global variable numCols
        var cell = row.insertCell(0);
        numCols++;
    }else{
        for(var i = 0; i <numCols; i++){ // for however many column in the table
            var cell = row.insertCell(i); // add as many column we have in the table
        }
    }
}

// Add a column
function addC() {
    
    var table = document.getElementById('grid'); // table reference

    if(numCols == 0){ // if no column exist yet
        var row = table.insertRow(0); // create a new row
        row.insertCell(0); // insert a new cell into the row
        numRows++; // update both globalnumber
        numCols++;
    }else{
        numCols++; // add 1 to column
        for(i = 0; i < table.rows.length; i++){ // for all the rows
            for(j = table.rows[i].cells.length; j < numCols;j++){ // add a cell at 0 place if the number of cell doesn't match the total column
                table.rows[i].insertCell(0);
            }
        }
    }
    
}
// Remove a row
// let numRows = 0;
// let numCols = 0;
function removeR() {
    if(numRows == 0){
        alert("No Rows to Remove"); // if no row exist, can't remove row
    }else{
        document.getElementById("grid").deleteRow(--numRows); // Get the grid element then delete the row. Also modifying the numRows.
        if(numRows == 0){ //if we reach zero rows. 
            numCols = 0; // SET numof Columns to zero
        }
    }
}

// Remove a column
function removeC() {
    if(numCols == 0){ // if no column exist, can't remove
        alert("No Column to Remove");
    }else{
        var table = document.getElementById('grid'); // table reference
        numCols--; // add 1 to column
        for(i = 0; i < numRows; i++){ // for all the rows
            table.rows[i].deleteCell(-1);
        }
        if(numCols == 0){ // if we reach zero column
            numRows = 0;// set numRows to zero
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    var table = document.getElementById('grid'); // table reference
    if(numCols == 0 || numRows == 0){ // if no column exist yet
        alert("nothing exist to fill")
    }else{

        for(i = 0; i < numRows; i++){
            for(j = 0; j < numCols;j++){
                if(table.rows[i].cells[j].className == '' ){ // if no color exist then
                    table.rows[i].cells[j].classList.add(colorSelected); // add the current selected color to the table cells
                }
            }
        }
    }
}

// Fill all cells
function fillAll(){
    var table = document.getElementById('grid'); // table reference
    

    if(numCols == 0 || numRows == 0){ // if no column exist yet
        alert("nothing exist to fill")
    }else{

        for(i = 0; i < numRows; i++){ // remove all the previous color from the class list
            for(j = 0; j < numCols;j++){
                table.rows[i].cells[j].className = '';
            }
        }

        for(i = 0; i < numRows; i++){
            for(j = 0; j < numCols;j++){
                table.rows[i].cells[j].classList.add(colorSelected); // add the current selected color to the table cells
            }
        }
        
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}