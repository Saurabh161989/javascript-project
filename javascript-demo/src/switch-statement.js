let day = 'Monday';

switch (day) {
    case 'Monday': //whatever value is passed in day variable, it will try to compare with case value
        console.log('It\'s monday');
    case 'Tuesday':
        console.log('It\'s tuesday')
    case 'Wednesday':
        console.log('It\'s wednesday')
    default:
        console.log('holiday');
}

//output: even if it finds match for only Monday, it will execute all the statements in the switch after that case including default case
//Use break statement if you don't want all the statements to be executed.
//It's monday
//It's tuesday
//It's wednesday

//---------------------------------------

day = 'Tuesday';

switch (day) {
    case 'Monday':
        console.log('monday');
    case 'Tuesday':
        console.log('tuesday')
        break;
    case 'Wednesday':
        console.log('wednesday')
    default:
        console.log('holiday 2');
}

//output: Tuesday

//Note: if none of the case is succeeded, it will execute default statement


//---------------------------------------

day = 'Monday';

switch (day) {
    case 'Monday':
    case 'Tuesday':
        console.log('monday or tuesday')
        break;
    case 'Wednesday':
        console.log('wednesday')
    default:
        console.log('holiday 2');
}

//output: monday or tuesday