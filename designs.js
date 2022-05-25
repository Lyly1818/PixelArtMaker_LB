// Select color input
// Select size input
//the driver launch the program and build initial table
function driver(){
    //access the form element
    let sizeForm = document.getElementById("sizePicker");
    let height = 10
    let width = 10
    makeGrid(height, width)//take initial H and W
    submit_btn(sizeForm); //
}

driver();

//take a row element and change color background
//when click event is registered.
function click_fill_cell(cell) {
    cell.addEventListener("click", event => {
        cell.style.background = $('#colorPicker').val()

    });
}
//take column and row elements and build
// a table by appending rows to table at each iteration
//it returns a table at the end

function makeGrid(height_val, width_val) {
    let table = document.getElementById("pixelCanvas");
    for (let i = 0; i < height_val; i++) {
        let rows = document.createElement("tr");
        for (let j = 0; j < width_val; j++) {
            let columns = document.createElement("td");
            click_fill_cell(columns)
            rows.appendChild(columns);
        }
        table.appendChild(rows);

    }
    return table;
}
//Take a form, register a submit event
//
function submit_btn(form) {
   // let initialTable =  makeGrid(height, width)
   //  console.log("BEFORE THE EVENT")
    form.addEventListener("submit", event => {
        reset(document.querySelector("table"));//reset current table
        let height = form.elements["height"].value;// access current  H value
        let width = form.elements["width"].value; //access current  W value
        makeGrid(height, width)// build a new table
        // console.log("AFTER THE EVENT: "+"width: " + width + " height: " + height)
        event.preventDefault() // prevent reloading at submit event
    });
}

function reset(table) {
    table.innerText ="";
}


