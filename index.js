// console.log("yokkkk")

// var readlineSync =require("readline-sync")

// let bill = readlineSync.question("Enter the bill amount: ")
// let note = readlineSync.question("Enter the note you want to give/gave: ")
// let rem = note-bill
// console.log(rem)

// let notes = [2000,500,200,100,50,10,5,1]

//  givnote = []

// for (let i=0;i<notes.length;i++){
//     givnote[i]=Math.floor(rem/notes[i])
//     rem=rem-givnote[i]*notes[i]
    
//     if (rem===0){
//         break
//     }
// }

// for (let i=0;i<notes.length;i++){
    // if (givnote[i]===0){
    // } 
    // else{
    //     console.log(givnote[i],notes[i])
    // }
    
// }



let calculate = document.querySelector(".button")


function Calculate(){

    let bill = document.querySelector(".bill")
    let noteGiven = document.querySelector(".noteGiven")
    let remainder = document.querySelector(".rem")

    let TwoTh = document.querySelector(".TwoTh")
    let fivehund = document.querySelector(".fivehund")
    let Twohund = document.querySelector(".Twohund")
    let hund = document.querySelector(".hund")
    let fifty = document.querySelector(".fifty")
    let ten = document.querySelector(".ten")
    let five = document.querySelector(".five")
    let one = document.querySelector(".one")


    
    let output = document.querySelector(".output")

    let rem = noteGiven.value - bill.value
    remainder.innerText = rem

    let notes = [2000,500,200,100,50,10,5,1]
    let givnote = []

    if (rem<0){
        alert("The customer needs to give more!")
    }
    else{
    

    // notes = new Array(8)
   

    for (let i=0;i<notes.length;i++){
        givnote[i]=Math.floor(rem/notes[i])
        rem=rem-givnote[i]*notes[i]
        
        if (rem===0){
            break
        }
    }
    
  


        TwoTh.innerText = givnote[0]
        fivehund.innerText = givnote[1]
        Twohund.innerText = givnote[2]
        hund.innerText = givnote[3]
        fifty.innerText = givnote[4]
        ten.innerText = givnote[5]
        five.innerText = givnote[6]
        one.innerText = givnote[7]
    
    }
}

calculate.addEventListener("click",Calculate)



//COLD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!REMAIN COLD.

