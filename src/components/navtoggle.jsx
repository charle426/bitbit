
export default function Navb() {
  window.addEventListener("DOMContentLoaded", () => {
    let drop = document.getElementById("mobileNav");
    let navcheck = document.getElementById("navCheck");
    navcheck.addEventListener("focus", () => (drop.style.maxHeight = "900px"));
    navcheck.addEventListener("blur", () => (drop.style.maxHeight = "0"));
    console.log(drop.style.maxHeight);
  });
}
