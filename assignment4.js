// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
//single line comment

//this is single line comment

/**
 * this is multiline comment
 */

// Q2. Print "Welcome to JavaScript Assignment" using console.log.
let string="Welcome to JavaScript Assignment"
console.log(string)

// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var a=12
a=23
console.log(a)
// Q4. Declare a variable using let, update its value, and print it.
let b="sneha"
b="devansh"
console.log(b)
// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi=3.14
//pi=10
console.log(pi)
// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstname="sneha"
let middlename="suresh"
let lastName="anap"
console.log(firstname+  middlename+ lastName)
console.log(`${firstname} ${middlename} ${lastName}`)

// Q7. Create variables using valid names: city1, _city, $city and print them.
let city1="sangamner"
let _city="pune"
let  $city="nashik"
console.log(city1,_city,$city)
// Q8. Show with an example that variable names are case-sensitive in JavaScript.
// let name="Sneha"
// console.log(Name)//name not accept for the printing because N is LOWERCASE

// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
let num=25
console.log(typeof(num))

let string1="hello"
console.log(typeof(string1))

let boolean=true
console.log(typeof boolean)
// let undefined=undefined
// console.log(typeof undefined)
const null1=null
console.log(null1)
// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %

let a1=5
let b1=3
console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)
// Q11. Round the number 10.99 down to nearest integer using Math.floor.
let number=10.99
console.log(Math.floor(number))

// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
let num1=10.01
console.log(Math.ceil(num1))
// Q13. Round 10.05 and 10.99 using Math.round.
let nu=10.01
let nu2=10.99
console.log(Math.round(nu))
console.log(Math.round(nu2))
// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.round(Math.random()*1))

// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
console.log(Math.ceil(Math.random()*6))

// Q16. Generate a random number between 10 and 20.
console.log(Math.floor(Math.random()*10+10))

// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
let m5=32
let a3=(Math.round(m5/5))
console.log(a3*5)

// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
console.log(Math.round(Math.random()*9999+1000))
// Q19. Generate a random Aadhaar-like 12-digit nu
// mber (using Math.random).
// console.log(Math.round(Math.random()*1000000000000))
let z=Math.round(Math.random()*9999+1000)
let z1=Math.round(Math.random()*9999+1000)
let z2=Math.round(Math.random()*9999+1000)
let z3=Math.round(Math.random()*9999+1000)
console.log(`${z} ${z1} ${z2} ${z3}`)

// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character

let string12="Siddhant Arjun Gadakh"
console.log(string12.length)
console.log(string12[0])
console.log(string12[string12.length-1])
// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
let es= "Siddhant\nArjun\nGadakh"
console.log(es)
// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
let s="my name is \'Siddhant\'"
console.log(s)
// Q23. Convert "javascript" into UPPERCASE using string method.
let up="javascript"
console.log(up.toUpperCase())

// Q24. Convert "HELLO WORLD" into lowercase using string method.
let word= "HELLO WORLD"
console.log(word.toLowerCase())

// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
console.log(word.toUpperCase().toLowerCase().length)
// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
console.log(string12.substr(0,8))

// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
console.log(string12.substring(9,14))

// Q28. Split the string "I love JavaScript" into an array by spaces.
let new1="I love JavaScript"
console.log(new1.split(" "))
// Q29. Split the string "banana" into parts wherever "a" occurs.
let spl="banana"
console.log(spl.split("a"))
// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";
 let siddhantArjunGadakh = "snehaSureshAnap";
 console.log(siddhantArjunGadakh)



// Q31. Generate a random integer between 50 and 100.
console.log(Math.round(Math.random()*(100-50)+50))

// Q32. Generate a random integer between -20 and -10.
console.log(Math.round(Math.random()*(-20+10)-10))

// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").
// let h="Head"
// let t="tails"
// console.log(Math.random().toStringstring[h,t])
// Q34. Generate a random integer between 100 and 999 (3-digit number).
console.log(Math.round(Math.random()*(999-100)+100))

// Q36. Generate a random number between 1 and 100 and check if it is even or odd.
let m=(Math.round(Math.random()*100))
console.log(`${m} ${m%2===0}`)

// Q37. Generate 5 random numbers between 1 and 10 
console.log(Math.floor(Math.random()*10))

// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
let stri="qwertyuiopasdfghjklzxcvbnm"
let n12=1234567890
console.log(Math.random()*toString(stri))