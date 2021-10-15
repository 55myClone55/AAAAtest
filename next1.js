const measureEL = {
    'distance':{'unit':'sm','values': 1000},
    'convert':'m'
}
let values = Object.values(measureEL)
  let firstMeasuer = values[0]['unit']
  console.log(firstMeasuer)
let secondValue = values[0]['values']
let num = Number(secondValue)
  console.log(num)
let newMeasuer = values[1]
console.log(newMeasuer)
  function countString(){
     let arrVal = ['ft','d','m','mm','km','yr']
  let rand = Math.floor(Math.random() * arrVal.length);
  let count = arrVal[rand];
 console.log(count)
     return count
  }
  countString()
newMeasuer = countString()
function countNumber(){
     let argVal = [50,80,1000,200,600,900]
  let ran = Math.floor(Math.random() * argVal.length);
  let number = argVal[ran];
     return number
  }
secondValue = countNumber()
   if (newMeasuer ==='ft'){
 let ft = (num / 30.48).toFixed(2)
    value = String(ft)
     values[0]['unit'] = 'ft'
    values[0]['values'] = value
    console.log(values[0])
   }                    
 if (newMeasuer ==='d'){
   let d = (num / 2.54).toFixed(2)
value = String(d)
     values[0]['unit'] = 'd'
    values[0]['values'] = value
    console.log(values[0])
 }
  if( newMeasuer =='m'){
      let m = (num / 100).toFixed(2)
value = String(m)
     values[0]['unit'] = 'm'
    values[0]['values'] = value
    console.log(values[0])
  }
     if (newMeasuer =='mm'){
        let mm = (num * 10).toFixed(2)
value = String(mm)
     values[0]['unit'] = 'mm'
    values[0]['values'] = value
    console.log(values[0])
    }
   
    if(newMeasuer =='km'){
        let km = (num / 100000).toFixed(2)
 value = String(km)
     values[0]['unit'] = 'km'
    values[0]['values'] = value
    console.log(values[0]) 
    }
       if (newMeasuer =='yr'){
        let yr = (num / 91.44).toFixed(2)
 value = String(yr)
     values[0]['unit'] = 'yr'
    values[0]['values'] = value
    console.log(values[0]) 
    }