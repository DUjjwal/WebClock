async function loadQuote() {
    let item = document.querySelector('#quote')
    const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=life",{headers:{'X-Api-Key': '/mHi5V/p9TjKcS0G3DvOAQ==1LD5K90KpfxUXS4u'}})
    let data = await response.json()
    let data2=data[0]
    item.innerHTML=`"${data2["quote"]}"`
    

    

    
}

loadQuote()

let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let date = new Date()
let hr = date.getHours()
let mn = date.getMinutes()

let hr2 = String(hr)
if(hr2.length<2)
    hr2="0"+hr2

let mn2 = String(mn)
if(mn2.length<2)
    mn2="0"+mn2


let day = date.getDay()
let item2 = document.querySelector('#temp')
item2.innerHTML=`Ready to tackle, ${arr[day-1]} ?`
let item = document.querySelector('#clock')
item.innerHTML=`${hr2} : ${mn2}`


document.querySelector('#src1').addEventListener('click',function(e) {
    console.log("clicked clock")
    window.open("./index.html","_self")
})

document.querySelector('#src2').addEventListener('click',function(e) {
    console.log("clicked stopwatch")
    window.open("./StopWatch/index.html","_self")
})
document.querySelector('#src3').addEventListener('click',function(e) {
    console.log("clicked stopwatch")
    window.open("./Timer/index.html","_self")
})



// console.log(item)