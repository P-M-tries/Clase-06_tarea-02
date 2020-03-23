/*TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addRowsButton = document.getElementById('add-rows-button')
const $removeRowsButton = document.getElementById('remove-rows-button')
const $rowsManipulation = document.getElementById('add-rows');

let i = 2;
$addRowsButton.onclick = function () {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let labelText = document.createTextNode('Annual salary of member ' + i);
    label.appendChild(labelText);
    label.setAttribute("id", `${i}`);
    $rowsManipulation.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute("type","number");
    input.setAttribute("class","salary");
    div.appendChild(label)
    div.appendChild(input)
    $rowsManipulation.appendChild(div);
    //$rowsManipulation.appendChild(document.createElement('br'))
    i = i + 1;

    return false;

}

$removeRowsButton.onclick = function () {
   let lastChild = $rowsManipulation.lastChild;
   lastChild.remove();
    i = i - 1;
    return false;
}

const $calculateButton = document.getElementById('calculate-button')
let array = [];
let highest;
let lowest;
let average;
let monthlyAverage;

function HTMLCollectionIntoArray () {
    for (let i = 0; i < (document.getElementsByClassName('salary').length); i++) {
        let item = Number(document.getElementsByClassName('salary').item(i).value)
        if (document.getElementsByClassName('salary').item(i).value.length !== 0) {
            array.push(item);
        }

        //  if (inputtx.value.length == 0)
        
    }
}

function getHighestAnnualSalary () {
    highest = Math.max.apply(Math, array);
    
    return highest;
}

function getLowestAnnualSalary () {
    lowest = Math.min.apply(Math, array);

    return lowest;
}

function getAverage () {

    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = arraySum / array.length;

    return average;
}

function getMonthlySalaries () {

}

function getMonthlyAverage () {
    
    let monthlyArray = [];
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        let monthlyArrayItem = arrayItem / 12;
        monthlyArray.push(monthlyArrayItem);
    }

    let monthlyArraySum = 0;
    for (let i = 0; i < monthlyArray.length;i++) {
        let monthlyArrayItem = Number(monthlyArray[i]);
        monthlyArraySum += monthlyArrayItem;
    }

    monthlyAverage = monthlyArraySum / monthlyArray.length;

    return monthlyAverage;
    
}

$calculateButton.onclick = function() {
    HTMLCollectionIntoArray();
    getHighestAnnualSalary();
    getLowestAnnualSalary();
    getAverage();
    getMonthlyAverage();


    document.getElementById('highest-annual-salary').value = highest;
    document.getElementById('lowest-annual-salary').value = lowest;
    document.getElementById('annual-salary-average').value = average;
    document.getElementById('monthly-salary-average').value = monthlyAverage;

    array = [];

    return false;

}