
let interval = null
let hrItem = document.querySelector('#hr')
let minItem = document.querySelector('#min')
let secItem = document.querySelector('#sec')
let miliItem = document.querySelector('#mili')
let resetButton = document.querySelector('.reset')
let startstop = document.querySelector('.start')
let date = null
let status = false
let timeSpent=0

//status false means clock isnt running
//status true means clock is running

document.querySelector('.start').addEventListener('click',function(e) {
    let local = 0
    if(status==false) {
        startstop.setAttribute('src','../Assets/circle-pause-regular.png')
        date = new Date()
        status=true
        interval = setInterval(function() {
            let newDate = new Date()
            let ms = newDate - date
            ms+=timeSpent
            let sec = Math.trunc(ms/100)
            ms = ms%1000

            let mn = Math.trunc(sec/60)
            sec = sec%60
            let hr = Math.trunc(mn/60)
            mn = mn%60

            hr=String(hr)
            if(hr.length<2)hr="0"+hr
            mn=String(mn)
            if(mn.length<2)mn="0"+mn
            sec=String(sec)
            if(sec.length<2)sec="0"+sec
            ms=String(ms)
            if(ms.length==1)ms="00"+ms
            else if(ms.length==2)ms="0"+ms
            hrItem.innerHTML=`${hr}:`
            minItem.innerHTML=`${mn}:`
            secItem.innerHTML=`${sec}.`
            miliItem.innerHTML=`${ms}`
            
        },3)
    }
    else {
        let temp = new Date()
        timeSpent+=(temp-date)
        console.log(timeSpent)
        clearInterval(interval)
        interval = null
        startstop.setAttribute('src','./circle-play-regular.png')
        status=false

         
    }
    
})
document.querySelector('.reset').addEventListener('click',function(e) {
    
    clearInterval(interval)
    interval=null
    
    hrItem.innerHTML=`00:`
    minItem.innerHTML=`00:`
    secItem.innerHTML=`00.`
    miliItem.innerHTML=`000`
    startstop.innerHTML=`Start`
    status=false
    timeSpent=0

})


document.querySelector('#src1').addEventListener('click',function(e) {
    console.log("clicked clock")
    window.open("../Clock/index.html","_self")
})

document.querySelector('#src2').addEventListener('click',function(e) {
    console.log("clicked stopwatch")
    window.open("../StopWatch/index.html","_self")
})



