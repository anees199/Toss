var output = document.querySelector("#output")
var num = 12
var image = document.querySelector("#image")
function chand (){
   num =  Math.ceil(Math.random(num)*2)
   if(num === 1 ) {
    output.innerHTML = "You Have Won The Toss"
    image.src = "./aaassets/chaaand.jfif"
    
} else{
    output.innerHTML = "You Have Lost The Toss"
    image.src = "./aaassets/masjid.jfif"

}
// if(num === 1){
//     image.src = "./aaassets/chaaand.jfif"
// }
// else{
//     image.src = "./aaassets/masjid.jfif"
// }
}
function masjid(){
num = Math.ceil(Math.random(num)*2)
if(num === 2 ){
  output.innerHTML = "You Have Won The Toss"
  image.src = "./aaassets/masjid.jfif"
}
else{
    output.innerHTML = "You Have LOst the Toss"
    image.src = "./aaassets/chaaand.jfif"
}

}
