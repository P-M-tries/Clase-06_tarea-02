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


function createMembers(numberOfMembers) {
    addMember(i);
    i += 1;

}

function addMember (index) {
    const div = document.createElement('div');


    const label = document.createElement('label');
    label.textContent = 'Annual salary of member ' + index;

    const input = document.createElement('input');
    input.type = 'number'
    input.className = 'salary';

    div.appendChild(label)
    div.appendChild(input)

    $rowsManipulation.appendChild(div);

}

function removeDinamicallyAddedRows () {
    const lastChild = $rowsManipulation.lastChild;
    lastChild.remove();
    i = i - 1;

}

let i = 2;
$addRowsButton.onclick = function () {
    const numberOfMembers = 1;
    createMembers(numberOfMembers);
    return false;
}

$removeRowsButton.onclick = function () {
    removeDinamicallyAddedRows();
    return false;
}

const $calculateButton = document.getElementById('calculate-button')

function HTMLCollectionIntoArray (HTMLCollection) {
    let array = [];
    for (let i = 0; i < (HTMLCollection.length); i++) {
        let item = Number(HTMLCollection.item(i).value)
        if (HTMLCollection.item(i).value.length !== 0) {
            array.push(item);
        }       
    }
    
    return array;
}

function getHighestAnnualSalary (array) {
    const highest = Math.max.apply(Math, array);
    
    return highest;
}

function getLowestAnnualSalary (array) {
    const lowest = Math.min.apply(Math, array);
    return lowest;
}

function getAverage (array) {

    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = Number(array[i]);
        arraySum += arrayItem;
    }

    average = (arraySum / array.length).toFixed(2);

    return average;
}

function getMonthlyAverage (array) {
    
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

    monthlyAverage = (monthlyArraySum / monthlyArray.length).toFixed(2);

    return monthlyAverage;
    
}

function showResults (highest, lowest, average, monthlyAverage) {
    document.getElementById('highest-annual-salary').value = highest;
    document.getElementById('lowest-annual-salary').value = lowest;
    document.getElementById('annual-salary-average').value = average;
    document.getElementById('monthly-salary-average').value = monthlyAverage;
}

function clearDataForNewCalculation () {
    annualSalaries = [];
}

$calculateButton.onclick = function() {
    let annualSalaries = HTMLCollectionIntoArray(document.getElementsByClassName('salary'));
    const highest = getHighestAnnualSalary(annualSalaries);
    const lowest = getLowestAnnualSalary(annualSalaries);
    const average = getAverage(annualSalaries);
    const monthlyAverage = getMonthlyAverage(annualSalaries);

    showResults (highest, lowest, average, monthlyAverage);

    clearDataForNewCalculation();

    return false;

}