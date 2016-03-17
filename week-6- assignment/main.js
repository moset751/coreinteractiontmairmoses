var ranger = document.getElementById('ranger');
var image =  document.getElementById('image');
var width = image.width;
var height = image.height;



ranger.onchange = function(){
    image.style.width = width * (ranger.value  / 100);
    image.style.height = height * (ranger.value / 100);
}






