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
        if( current < totalCard - 1){
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
function navbarMenu(){
    const menulist= document.getElementById("navlist");
    const navbtn=document.getElementById("navbar");
    navbtn.addEventListener("click",()=>{
        menulist.classList.toggle("open");
        
    })
}
document.addEventListener("DOMContentLoaded",navbarMenu);
function downloadCv(){
    const downloadBtn=document.getElementById("project_project");
    downloadBtn.addEventListener("click",()=>{
       
        const link=document.createElement("a")
        link.href='JEAN MUISHA SHEBANDU1.pdf'
        link.download='JEAN MUISHA SHEBANDU1.pdf'
        link.click()
         console.log(" file downloads sucessfully ......");
        
    })

}document.addEventListener("DOMContentLoaded",downloadCv)

function sendIput(){
    const form = document.getElementById("myForm");
    const webAppUrl = "https://script.google.com/macros/s/AKfycbx65RgRG6afIPwMtu-r1pEzvn4d1chwfOPq59tNNLPWae48tjREtwAwRXOWp3bxYHp8CQ/exec";
;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // Convert formData to URL-encoded string
    const params = new URLSearchParams();
    for (const pair of formData.entries()) {
        params.append(pair[0], pair[1]);
    }

    fetch(webAppUrl, {
        method: "POST",
        body: params
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert(data.msg);
            form.reset(); // Clear form
        } else {
            alert("Error: " + data.msg);
        }
    })
    .catch(error => {
        alert("There was an error submitting the form: " + error.message);
        console.error(error);
    });
});



}document.addEventListener("DOMContentLoaded",sendIput);
function setActiveNav() {
    // 1. Get all the links inside the menu_class UL
    const navLinks = document.querySelectorAll('.menu_class a');

    // 2. Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            // 3. Remove the 'active' class from all links first
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // 4. Add the 'active' class only to the link that was clicked
            this.classList.add('active');
        });
    });
}

// Ensure the function runs once the HTML is loaded
document.addEventListener("DOMContentLoaded", setActiveNav);
function toggleReadMore(toggleId, textId) {
  const toggle = document.getElementById(toggleId);
  const moreText = document.getElementById(textId);

  if (!toggle || !moreText) return; // safety check

  toggle.addEventListener("click", () => {
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      toggle.classList.add("active");
      toggle.innerHTML = 'Show Less <i class="arrow down"></i>';
    } else {
      moreText.style.display = "none";
      toggle.classList.remove("active");
      toggle.innerHTML = 'Read More <i class="arrow down"></i>';
    }
  });
}

// Call the function for your About section
toggleReadMore("aboutToggle", "aboutMoreText");
