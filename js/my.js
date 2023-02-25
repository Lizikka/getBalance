// const numberInput = document.getElementById("number-input");
//   const number = Number(numberInput.value);
//   console.log(number)

// const taryf = 24.516
// const abonplataForMonth = 30.1

// function getSumOfVoda(data){
//     return sumOfVoda = data*taryf
    
// }

// getSumOfVoda(number)
// // console.log( "Ваша оплата Водоканалу:" +" " + sumOfVoda + " грн" )

// const taryf2 = 1.44

// function getSumOfElektro(data){
//     return sumOfElektro = data*taryf2
    
// }

// getSumOfElektro(201)
// function getAllSum(){
//      return AllSum = sumOfVoda + sumOfElektro + abonplataForMonth
// }
// getAllSum()
// // console.log( "Ваша оплата Харобленерго:" +" " + sumOfElektro + " грн" )

// // console.log("Абонплата Водоканалу: " + abonplataForMonth + " грн" )

// // console.log("Усього: " + AllSum + " грн")

// document.write(`<div><li> Ваша оплата Харобленерго: ${sumOfElektro} грн </li>
//  <li>Ваша оплата Водоканалу: ${sumOfVoda} грн </li>
//  <li>Абонплата Водоканала: ${ abonplataForMonth} грн</li>
//  <li> Усього: ${ AllSum } грн</li></div>`)

function showNumber() {
    const numberInput1 = document.getElementById("number-input1");
    const numberInput2 = document.getElementById("number-input2");

    const numberElektroInput1 = document.getElementById("numberElektro-input1");
    const numberElektroInput2 = document.getElementById("numberElektro-input2");
    
    const number = Number(numberInput1.value) - Number(numberInput2.value);
    const numberDisplay = document.getElementById("number-display");
    const taryf = 24.516
    let sum = number * taryf

    const numberEl = Number(numberElektroInput1.value) - Number(numberElektroInput2.value);
    const numberDisplay1 = document.getElementById("number-display1");
    const taryf1 = 1.44
    let sum1 = numberEl * taryf1
    const abonPlata = 30.1

    let score = sum + sum1 + abonPlata
    const numberDisplay2 = document.getElementById("number-display2");
    

    numberDisplay.textContent = `Ваша оплата Водоканалу: ${sum} грн`;
    numberDisplay1.textContent = `Ваша оплата Харенерго: ${sum1} грн`;
    numberDisplay2.textContent = `Ваша оплата усього: ${score} грн`;

  }