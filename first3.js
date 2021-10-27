let fun ={
  "What is your marital status?": ["Single", "Married"],
"Are you planning on getting married next year?": ["Yes", "No"],
"How long have you been married?": ["Less than a year", "More than a year"],
"Have you celebrated your one year anniversary?": ["Yes", "No"]
}

console.log(fun)
let keys = Object.keys(fun)
console.log(keys[0])
let values = Object.values(fun)
console.log(values[1])
console.log(values[0][0])
console.log(values[2])
console.log(values[3])

     const button1 = document.querySelector('.btn1')
    function firstFirst(event){
      let tempData = [];
            if(this.textContent == 'Single'){
           tempData.push(keys[0] + this.textContent)
            console.log(tempData);
            button1.removeEventListener('click',firstFirst)
                 }
      if(this.textContent == 'Married'){
        tempData.push(keys[0] + this.textContent)
         console.log(tempData);
         button2.removeEventListener('click',firstFirst)
   }
     if( this.textContent == 'No'){
    tempData.push(keys[0] + 'Married')
    tempData.push(keys[1] + this.textContent)
            console.log(tempData);
            button4.removeEventListener('click',firstFirst)
          }
                   if( this.textContent == 'Yes'){
            tempData.push(keys[0] + 'Single')
            tempData.push(keys[1] + this.textContent)
                    console.log(tempData);
                    button3.removeEventListener('click',firstFirst)
              }
              if( this.textContent == 'Less than a year'){
            tempData.push(keys[0] + 'Married')
            tempData.push(keys[1] + 'No')
       tempData.push(keys[2] + this.textContent)
      console.log(tempData);
      button5.removeEventListener('click',firstFirst)
            }
      if( this.textContent == 'More than a year'){
        tempData.push(keys[0] + 'Married')
        tempData.push(keys[1] + 'No')
     tempData.push(keys[2] + this.textContent)
    console.log(tempData);
    button6.removeEventListener('click',firstFirst)
      }
      
    }
    button1.addEventListener('click',firstFirst)
    const button2 = document.querySelector('.btn2')
        button2.addEventListener('click',firstFirst)
    const button3 = document.querySelector('.btn3')
       button3.addEventListener('click',firstFirst)
    const button4 = document.querySelector('.btn4')
       button4.addEventListener('click',firstFirst)
    const button5 = document.querySelector('.btn5')
       button5.addEventListener('click',firstFirst)
    const button6 = document.querySelector('.btn6')
       button6.addEventListener('click',firstFirst)
    const button7 = document.querySelector('.btn7')
    function firstRes(){
      let tempData = [];
      if( this.textContent == 'No'){
        tempData.push(keys[0] + 'Married')
        tempData.push(keys[1] + 'No')
        tempData.push(keys[2] + 'More than a year')
        tempData.push(keys[3] + this.textContent)
                console.log(tempData);
                button8.removeEventListener('click',firstRes)
              }
              if( this.textContent == 'Yes'){
                tempData.push(keys[0] + 'Married')
                tempData.push(keys[1] + 'No')
                tempData.push(keys[2] + 'More than a year')
                tempData.push(keys[3] + this.textContent)
                        console.log(tempData);
                        button7.removeEventListener('click',firstRes)
         }
    }
    button7.addEventListener('click',firstRes)

    const button8 = document.querySelector('.btn8')
   
    button8.addEventListener('click',firstRes)
   
   