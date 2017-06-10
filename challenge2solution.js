
var laptop = 'IBM';

if (laptop === 'ibm' || laptop === 'IBM') {
    console.log('good');
} else if (laptop === 'apple') {
    console.log('great');
} else if (laptop === 'mac') {
    console.log('old');
} else {
    console.log('notgood');
}



//for loop writing code and numbers:
for (i = 1; i <= 10; i++) {


    if (i === 3 || i === 5 || i === 1 || i === 7 || i === 9) {
        console.log(i);
    } else {
        console.log('even number');
    }


}
// students
var students = [{
    name: 'simon',
    nationality: 'southafrica',
    hobbies: ['swimming']

}, {
    name: 'habiba',
    nationality: 'somalia',
    hobbies: ['programming']
}
];
for (var i = 0; i < student.length; i++) {
    console.log('i am' + students[i].nationality);
}

