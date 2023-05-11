/*


const nameCalled = (name) => console.log(`hello ${name}`)

nameCalled("Chris")


const nameVar = (name) => 
{
    const isTrue = true

    if (isTrue === true)
    console.log(`hello ${name}`)
    else
    console.log("Please log in")

}

nameVar("chris")

// -------------3:

const reSod = (len, wid, priceSqFt, basePrice) =>
{

const area = len * wid
const sodPrice = area * priceSqFt
const totalCost = sodPrice + 100
console.log(`The area is ${area}, the price of the sod is ${sodPrice},
the total cost is ${totalCost}.  Enjoy your new lawn`)
}

reSod(10, 20, 5.5, 100)



// -------------4



    const students = [
        'Alice',
        'Andrew',
        'Casey',
        'Damian',
        'Grant',
        'Howie',
        'Wade',
        'Kat',
        'Kimbrad',
        'Kiu',
        'Natasha',
        'Obi',
        'Pedro',
        'Sarah',
        'Scott',
        'Tiffany',
        'Zhe'
      ]
    

const iHateLoops = () =>
{

for (i = 0; i < students.length; i++){
console.log(students[i])
console.log(students[i].length)

}
}
iHateLoops(students)


// -------------5:

const numbers = [10, 15, 32, 522, 4251, 3329, 39475]
const fizBuzz = (fizz, buzz) => {


for (i = 0; i < numbers.length; i++)
{

    if(numbers[i] % (fizz * buzz) === 0 )
    {
        console.log("FizzBuzz")
    }
    else if (numbers[i] % fizz === 0) 
    {
        console.log("Fizz")
    }
    else if (numbers[i] % buzz === 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log("Neither fizz nor buzz")
    }
}
}
fizBuzz(3, 5)

// -------------6-9
*/


const fizzBuzz = () =>
{

for (i = 0; i <= 100; i++)
{
    if(i % (3*5) === 0)
    {
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0)
    {
        console.log("Fizz")
    }
    else if (i % 5 === 0)
    {
        console.log("Buzz")
    }
    else {
    console.log(i)
    }


}
}

fizzBuzz()


/*
// -------------10

const checkerBoard = (size) =>
{
    for (i = 0; i <= size; i++)
    {
        if (i % 2 === 0)
        {
        console.log(" # # # # # # # # # #")
        }   
        else
        {
        console.log("# # # # # # # # # # ")
        }
    }

}

checkerBoard(22)

*/