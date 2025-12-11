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

function sendIput() {
  const form = document.getElementById("myForm");
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbx65RgRG6afIPwMtu-r1pEzvn4d1chwfOPq59tNNLPWae48tjREtwAwRXOWp3bxYHp8CQ/exec";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(webAppUrl, {
      method: "POST",
      mode: "no-cors", // required for Google Apps Script
      body: formData,
    })
      .then(() => {
        showNotification(
          "Your message has been sent successfully! We will get back to you soon."
        );
        form.reset();
      })
      .catch((err) => {
        showNotification("There was an error submitting your message.", true);
        console.error(err);
      });
  });
}


function showNotification(message, isError = false) {

  const notification = document.createElement("div");
  notification.className = "notification";
  if (isError) notification.classList.add("error");
  notification.textContent = message;


  document.body.appendChild(notification);


  setTimeout(() => {
    notification.classList.add("hide");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 4000);
}


document.addEventListener("DOMContentLoaded", sendIput);
function setActiveNav() {
    
    const navLinks = document.querySelectorAll('.menu_class a');

    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            
            this.classList.add('active');
        });
    });
}


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

toggleReadMore("aboutToggle", "aboutMoreText");
function showNotification(message, isError = false) {
    const box = document.getElementById("notification");

    box.textContent = message;

  
    if (isError) {
        box.style.background = "#e60000"; 
    } else {
        box.style.background = "#4CAF50"; 
    }

    box.classList.remove("hidden");
    box.classList.add("show");

  
    setTimeout(() => {
        box.classList.remove("show");
        setTimeout(() => box.classList.add("hidden"), 500);
    }, 4000);
}
