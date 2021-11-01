let spaceCapsule = {
  'main_thruster':[0,8,6,0],
  'sec_thruster':[2,4,2,0],
  'delta_velocity': 18
}
let engine = {
  'correction':[1,12,7,1],
  'cell':[8,4,6,2,2],
  'attempt':''
} 
let keys = Object.keys(spaceCapsule)
let keyS = Object.keys(engine)
let values = Object.values(spaceCapsule)
  let valuesSecond = Object.values(engine)
let count = 4
let countVal = 5
let m = 12
let n = 0
let max = 12
let min = 0
let result = []
let arrRes = []
let increase = []
let increaseSpeed = []
let increaseNeed = []
let tempData = [];
let tempNext = [];
for( let i = 0; i < count; i ++){
    increase.push(Math.round(Math.random() * (m - n ) + n))
  }
  valuesSecond[0] = increase
  tempData.push(keyS[0]+' '+valuesSecond[0])
 for( let i = 0; i < countVal; i ++){
    increaseSpeed.push(Math.round(Math.random() * (m - n ) + n))
  }
     valuesSecond[1] = increaseSpeed
     tempData.push(keyS[1] +' '+ valuesSecond[1])
for( let i = 0; i < count; i ++){
    arrRes.push(Math.round(Math.random() * (m - n ) + n))
  }
  values[0] = arrRes
  tempNext.push(keys[0] +' ' + values[0])
 for( let i = 0; i < count; i ++){
     result.push(Math.round(Math.random() * (max - min ) + min))
}
values[1] = result
tempNext.push(keys[1]+' '+values[1])
console.log(tempNext)
if(result[0] !== 0 && arrRes[0] !== 0 && result[1] !== 0 && arrRes[1] !== 0 &&
result[2] !== 0 && arrRes[2] !== 0 && result[3] !== 0 && arrRes[3] !== 0){
increaseNeed.push(result[0] + arrRes[0] + result[1] + arrRes[1] + result[2] + arrRes[2] + result[3] + arrRes[3])
}
values[2] = increaseNeed
tempData.push(keys[2]+' '+values[2])
console.log(tempData)
const sumFirst = increase.reduce((accum, item)=> {
return accum += item
},0)
const sumSecond = increaseSpeed.reduce((accum, item)=> {
return accum += item
},0)
let sp = 'start'
let sp2 = 'false start'
if(sumSecond > sumFirst ){
  valuesSecond[2] = sp
  tempNext.push(keyS[2] +' ' + valuesSecond[2])
  console.log(tempNext)
   }else{
  valuesSecond[2] = sp2
  tempNext.push(keyS[2] +' ' + valuesSecond[2])
  console.log(tempNext)
}