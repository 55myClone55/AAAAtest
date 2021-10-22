let fun =[
    {'name':'John','email':'john2@mail.com'},
    {'name':'John','email':'john1@mail.com'},
    {'name':'Jane','email':'jane@mail.com'}
]
let dataCondition = [
    {"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}
]
     
    const collator = new Intl.Collator('en-EN')
    fun.sort((a,b)=> collator.compare(a.email,b.email))
   
    let itemString = ''
    for(let item of fun)
    if(item.name === item.name){
     itemString += item.name
    }
   let nameFirst = 'John'
let newItem = ''
const functionFilter = () => {
        let a = fun.filter(item => {
        if (nameFirst == item.name){
            newItem += item.name
return newItem
        } 
           })
    return a
 }
console.log(functionFilter())
let firstData = false
let itemData = ''
const filterData = () => {
        let a = dataCondition.filter(item => {
        if (firstData == item.disabled){
            itemData += item.disabled
return itemData
        } 
           })
    return a
 }
console.log(filterData())