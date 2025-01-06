let input=document.querySelectorAll('input')
input.forEach((item)=>{
    item.addEventListener("input",function(e) {
        let val = item.value
        if(val.length>2) {
            item.value=val.slice(-2)
        }
    })
})
alert("Enter only positive values")
    
let reset = null
let divwala = `<div class="HR">HR:</div>
            <div class="MIN">MIN:</div>
            <div class="SEC">SEC</div>`

let show = document.querySelector('.show')
let prevSpent = 0
let reload = true
let func = null
let start = null
let totalMs = null
let hdiv,mdiv,sdiv
let myAudioElement = new Audio('../Assets/onloop.mp3')
myAudioElement.loop = true
let finalAudio = new Audio('../Assets/final.mp3')
let flag = true // true means start hoga
// false means already paused
let but = document.querySelector('#start')
document.querySelector('#start').addEventListener("click",function(e) {
    if(reload) {
        let hr = Number(document.querySelector('#hr').value.slice(-2))
        let mn = Number(document.querySelector('#min').value.slice(-2))
        let sec = Number(document.querySelector('#sec').value.slice(-2))
        if(hr==NaN || hr<0 || mn==NaN || mn<0 || sec==NaN || sec<0) {
            window.open("./index.html","_self")
        }
        
        mn+=(sec/60)
        sec%=60
        hr+=(mn/60)
        mn%=60
        hr=Math.trunc(hr)
        mn=Math.trunc(mn)
        sec=Math.trunc(sec)
        document.querySelector('#start').setAttribute('src','../Assets/circle-pause-regular.png')
        totalMs = (hr*60*60+mn*60+sec)*1000
        show.innerHTML=`${divwala}`
        reload=false
        hDiv = document.querySelector('.HR');
        mDiv = document.querySelector('.MIN');
        sDiv = document.querySelector('.SEC');
        hDiv.setAttribute('width','200px');
        mDiv.setAttribute('width','200px');
        sDiv.setAttribute('width','200px');

        let but = document.createElement('img')
        but.setAttribute('id','reset')
        but.setAttribute('src','../Assets/arrow-rotate-left-solid.png')
        but.setAttribute('width','47px')
        document.querySelector('.one').appendChild(but)  

        reset = document.querySelector('#reset')
        reset.addEventListener('click',function(e) {
            console.log('clicked')
            window.open("./index.html","_self")
        })
        start = new Date()
        myAudioElement.play()
        func = setInterval(function(e) {
            timeSpent = (new Date()) - start
            let left = totalMs - timeSpent 
            if(left<=0) {
                myAudioElement.pause()
                finalAudio.play()
                clearInterval(func)
            }
            let s1 = Math.trunc(left/1000)
            let m1 = Math.trunc(s1/60)
            s1 = Math.trunc(s1%60)
            let h1 = Math.trunc(m1/60);
            m1 = Math.trunc(m1%60)
            if(h1+m1+s1==0) {
                myAudioElement.pause()
                finalAudio.play()
                clearInterval(func)
            }
            h1 = String(h1)
            if(h1.length<2)h1="0"+h1
            m1 = String(m1)
            if(m1.length<2)m1="0"+m1
            s1 = String(s1)
            if(s1.length<2)s1="0"+s1
            hDiv.innerHTML=`${h1}:`
            mDiv.innerHTML=`${m1}:`
            sDiv.innerHTML=`${s1}`
        },1)
    }
    else {
        if(flag) { // already runnning now pausing
            prevSpent=timeSpent
            myAudioElement.pause()
            clearInterval(func)
            document.querySelector('#start').setAttribute('src','../Assets/circle-play-regular.png')
            flag=false
        }
        else { // pause tha , resuming
            flag=true
            document.querySelector('#start').setAttribute('src','../Assets/circle-pause-regular.png')
            start=new Date()
            myAudioElement.play()
            func = setInterval(function(e) {
                timeSpent = (new Date()) - start + prevSpent
                let left = totalMs - timeSpent 
                if(left<=0) {
                    myAudioElement.pause()
                    finalAudio.play()
                    clearInterval(func)
                }
                let s1 = Math.trunc(left/1000)
                let m1 = Math.trunc(s1/60)
                s1 = Math.trunc(s1%60)
                let h1 = Math.trunc(m1/60);
                m1 = Math.trunc(m1%60)
                if(h1+m1+s1==0) {
                    myAudioElement.pause()
                    finalAudio.play()
                    clearInterval(func)
                }
                h1 = String(h1)
                if(h1.length<2)h1="0"+h1
                m1 = String(m1)
                if(m1.length<2)m1="0"+m1
                s1 = String(s1)
                if(s1.length<2)s1="0"+s1
                hDiv.innerHTML=`${h1}:`
                mDiv.innerHTML=`${m1}:`
                sDiv.innerHTML=`${s1}`
            },1)
        }

    }
})

document.querySelector('#src1').addEventListener('click',function(e) {
    console.log("clicked clock")
    window.open("../index.html","_self")
})

document.querySelector('#src2').addEventListener('click',function(e) {
    console.log("clicked stopwatch")
    window.open("../StopWatch/index.html","_self")
})

document.querySelector('#src3').addEventListener('click',function(e) {
    console.log("clicked stopwatch")
    window.open("./index.html","_self")
})


