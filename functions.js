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

    average = Number((arraySum / array.length).toFixed(2));

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

    monthlyAverage = Number((monthlyArraySum / monthlyArray.length).toFixed(2));

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


