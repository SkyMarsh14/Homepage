import "./../styles/reset.css";
import "./../styles/main.css";
import "./../styles/icons.css";
import "./../styles/media.css";

const fixedBanner = document.querySelector(".nameBanner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    fixedBanner.classList.add("hide-shadow");
  } else {
    fixedBanner.classList.remove("hide-shadow");
  }
});
