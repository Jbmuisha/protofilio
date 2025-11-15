function scrollFunction(){
    var header=document.getElementById("head_menu")
    var sticky=header.offsetTop

    window.onscroll= function(){
        if(window.pageYOffset> sticky){
            header.classList.add("sticky");
        } else{
            header.classList.remove("sticky")
        }
    }
}
document.addEventListener("DOMContentLoaded",scrollFunction);

function hidefuction(){
    const see= document.getElementById("seeMoreIcon");
    const aboutText=document.getElementById("aboutText")
    const arrow = see.querySelector(".arrow");

    see.addEventListener("click",()=>{

        aboutText.classList.toggle('expanded');
        arrow.classList.toggle('up')

    })
}
document.addEventListener("DOMContentLoaded",hidefuction)

function deplacement(){
    const moveDroi= document.getElementById("rightBtn");
    const moveGauche = document.getElementById("leftBtn");
    const affiche= document.getElementById("carousel");
    let current=0;

    const totalCard=document.querySelectorAll(".card_content").length


    function updateMove(){

        const femer=-current*100;
        affiche.style.transform=`translateX(${femer}%)`


    }

    moveDroi.addEventListener("click",()=>{
        console.log("right click succefully");
        if( current < totalCard){
            current++;
            updateMove();
        }
        
    })

    moveGauche.addEventListener("click",()=>{
        console.log(" left click succeffully");
        if(current > 0){
            current--;
            updateMove();
        }
        
    })
}
document.addEventListener("DOMContentLoaded",deplacement);