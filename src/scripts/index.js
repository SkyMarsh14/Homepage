import "./../styles/reset.css";
import "./../styles/main.css";
import "./../styles/icons.css";
import "./../styles/media.css";
import "../styles/animations.css"

const fixedBanner = document.querySelector(".nameBanner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    fixedBanner.classList.add("hide-shadow");
  } else {
    fixedBanner.classList.remove("hide-shadow");
  }
});
const dropdownBtn=document.querySelector('.menuIcon');
const dropdownContent=document.querySelector('.dropdown-content');
dropdownBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  dropdownContent.classList.toggle('visible');
  hideDropdownOnWindowClick();
  hideDropdownOnWindowResize();
})

function hideDropdownOnWindowClick(){
  document.addEventListener('click',()=>{
    dropdownContent.classList.contains('visible') &&dropdownContent.classList.remove('visible')
  })
  }

function hideDropdownOnWindowResize(){
  window.addEventListener('resize',()=>{
    dropdownContent.classList.contains('visible') && dropdownContent.remove('visible')
  })
}