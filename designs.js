// Select color input
// Select size input

let  canvas  = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
let submitBtn =  document.querySelector("input[type ='submit']");
// let color = $('#colorPicker').val();



// // Sets the color to default (i.e. Black)
// let selectedColor = $('#colorPicker').val();
// // Updates the color to the selected color by the user.
// $('#colorPicker').on('input', function() {
//     // Fetching the user's input
//     selectedColor = $('#colorPicker').val();
// });

// color.addEventListener("input", changeTracker, false );
// function changeTracker(event) {
//     document.querySelectorAll("").forEach(function(p) {
//         p.style.color = event.target.value;
//         color = p.style.color;
//
//     });
// }
// function colorPicker(){
//     let color = document.getElementById("colorPicker");
//     color.addEventListener("input", event=>{
//         color.style.color = event.target.value;
//         console.log(color);
//     })
//      return color.value;
// }

submitBtn.addEventListener("click", ()=>{
    // let width_a = $("inputWidth").val();
    makeGrid(width, height);
    // console.log("value: " + height);
});



function click_fill_cell( cell){
    $("#colorPicker").on("input", function (){
        color = $("#colorPicker").val();
    });

    cell.addEventListener("click", event=>{

        cell.style.background = $('#colorPicker').val()

    });
}

function makeGrid(num_row, num_column ) {
    let table  =  document.getElementById("pixelCanvas");
    for(let i = 0; i < num_row; i++){
        let rows = document.createElement("tr");
        for(let j = 0; j < num_column; j++){
            let columns = document.createElement("td");
            click_fill_cell(columns)
            rows.appendChild(columns);
        }
        table.appendChild(rows);
    }
    return table;
}

document.appendChild(makeGrid(4,4));
