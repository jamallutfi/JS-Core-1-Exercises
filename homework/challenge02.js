/* Challenge 2: FizzBuzz

Write a for loop that prints the numbers from 1 to 100. But for multiples of 3 print “Fizz” instead of the number and for the multiples of 5 print “Buzz”. For numbers which are multiples of both 3 and 5 print “FizzBuzz”.

Counting to 15 should look like this:

1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'

*/
for (var i = 1; i <= 15; i++) {
    //console.log(i)

   if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    }
    if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } 

    else {
        console.log(i);

    }

}


// go through each element in the list
//for each element
    // is the element divisible by both 3 and 5?
        // print fizz buzz
    // is the element divisible by 3?
        // print fizz
    // is the element divisble by 5?
        //print buzz
    // else, if none of the above is true
        // print the number








































































































































































































































