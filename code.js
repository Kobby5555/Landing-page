let product = document.getElementById('prod')
let link = document.getElementById('link')
let image = document.getElementsByTagName("img")
let form = document.getElementsByTagName("form")
let previous = document.getElementById('prev')
let next = document.getElementById('next')
let shoe = document.getElementById('shoePic')


let images = ["images/product side.png","images/product back.webp","images/product front.webp"]
let count = 0;
let item;
shoe.src = images[0];

previous.onclick= function(){
    count-=1;

    if(count<0){
        count=images.length-1;
    }
    item = images[count]
    shoe.src = item
    console.log(count);

}
next.onclick=function(){
    count+=1;

    if(count>images.length-1){
        count=0;
    }
    item = images[count]
    shoe.src = item
    console.log(count);

}

function see(){
product.classList.remove("hide")
link.classList.add("hide")
image[0].classList.add("hide")
form[0].classList.add("hide")
}
