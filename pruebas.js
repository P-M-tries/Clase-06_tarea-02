function probarGetHighestAnnualSalary () {
    console.assert(
        getHighestAnnualSalary([5, 7, 80]) === 80,
        'Get Highest Annual Salary no devolvió el mayor salario anual',
    );
};

function probarGetLowestAnnualSalary () {
    console.assert(
        getLowestAnnualSalary([5, 7, 80]) === 5,
        'Get Lowest Annual Salary no devolvió el menor salario anual',
    );
};

function probarGetAverage () {
    console.assert(
        getAverage([5, 7, 80]) === 30.67,
        'Get Average no devolvió el promedio entre los salarios anuales',
    );
};

function probarGetMonthlyAverage () {
    console.assert(
        getMonthlyAverage([5, 7, 80]) === 2.56,
        'Get Montly Average no devolvió el promedio entre los salarios mensuales',
    );
};

probarGetHighestAnnualSalary();
probarGetLowestAnnualSalary();
probarGetAverage();
probarGetMonthlyAverage();
