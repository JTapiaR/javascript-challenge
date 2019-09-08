// from data.js
//guardamos los datos en una variable
var tableData = data;
//Seleccionamos el cuerpo de la tabla(previamente definido en el html)
var tbody = d3.select("tbody");
//llamamos los datos
console.log(data);
//Creamos cada fila y poblamos cada celda con el texto del array data.js (key and value)
data.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// 
var tableData = data;
// Seleccionamos el boton "Filter table" previamente definido en el html
var button = d3.select("#filter-btn");
//creamos una función para asignarle un evento, cada vez que se pulse click en el boton va a tomar el valor de fecha que se ingrese en el campo input
// y va a consultar la base de datos filtrando por el campo datetime con el valor ingresado
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
//el resultado de la consulta se guarda en la variable filteredData, que se despliega en consola con console.log
    var filteredData =tableData.filter(sighting => sighting.datetime === inputValue);
 // borramos el contenido de la tabla  
    var tbody = d3.select("tbody");
    console.log(filteredData);
    tbody.html("");
// añadimos el contenido de filteredData  
    filteredData.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});
