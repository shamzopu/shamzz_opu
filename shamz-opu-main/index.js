const scrollBtn= document.getElementById('scroll-btn');


window.onscroll = ()=> {scrollFunction()};

const scrollFunction=()=> {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction=()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// night mood
const darkMood= document.getElementById('dn')
const sectionRap=document.getElementById('section-rap')
const logo=document.getElementById('logo')
let isDark=false

darkMood.addEventListener('click',()=>{
  if(!isDark){
    sectionRap.classList.add("root");
    isDark=true
    logo.innerHTML=`<img src="./img/darklogo.png" width="90" alt="">`
  }else{
    sectionRap.classList.remove("root");
    isDark=false
    logo.innerHTML=`<img src="./img/lightlogo.png" width="90" alt="">`
  }
})

console.log(isDark)