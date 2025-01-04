let product = document.getElementById('prod')
let link = document.getElementById('link')
let image = document.getElementsByTagName("img")
let form = document.getElementsByTagName("form")
let previous = document.getElementById('prev')
let next = document.getElementById('next')
let shoe = document.getElementById('shoePic')


let images = ["images/product back.webp","images/product front.webp"]
let count = 0;
let item = images[count]

previous.onclick= function(){
    count-=1;
    if(count<0){
        count=0;
    }
    shoe.src = item
}
next.onclick=function(){
    count+=1;
    if(count>images.length-1){
        count=images.length-1;
    }
    shoe.src = item
}
console.log(images.length);

function see(){
product.classList.remove("hide")
link.classList.add("hide")
image[0].classList.add("hide")
form[0].classList.add("hide")
}
