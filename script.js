let previous = document.getElementById('previous')
let next = document.getElementById('next')

let arr = ['edu2.jpeg','newclass1.jpeg','newclass2.jpeg','newclass4.jpeg']
let i = 0
previous.addEventListener('click',()=>{
    i++
    if(i>arr.length-1){
        i=0
    }
    document.getElementById('image').src=arr[i]
})

next.addEventListener('click',()=>{
    i--
    if(i<0){
        i=arr.length-1
    }
    document.getElementById('image').src=arr[i]
})