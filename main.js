let tab;
let tabcontent;

window.onload = function(){
        tab = document.querySelectorAll('.tab');
        tabcontent = document.querySelectorAll('.tabcontent');
        tabcontent[1].classList.add('hide');
        tabcontent[2].classList.add('hide');
    // hidecontent();
}

function hidecontent(){
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].classList.remove('show');
        tabcontent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

document.getElementById("tabs").onclick = function(e){
    // console.log(e);
    let target = e.target;
    for(let i=0;i<tab.length;i++){
        // console.log(tab[i]);
        if(tab[i] == target){
            hidecontent();
            tab[i].classList.add('active');
            tabcontent[i].classList.add('show');
            tabcontent[i].classList.remove('hide');
        }
        
    }
}