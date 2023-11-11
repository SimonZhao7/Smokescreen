const img = document.getElementById('switch');
let toggle = true;
img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src = 'image\\switch.png'
    }else{
        img.src = 'image\\switch2.png'
    }
})
