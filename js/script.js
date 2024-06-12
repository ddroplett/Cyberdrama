let txt_length = document.getElementById('length');
let comment = document.getElementById('comment');

if(txt_length && comment){
    comment.addEventListener("keyup", function(){	
        txt_length.innerHTML = this.value.length;
    });
}


alert("Formulier")

const darkModeBtn = document.getElementById('darkMode');

darkModeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    console.log('dark')
})