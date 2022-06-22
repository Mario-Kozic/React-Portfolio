import myFunction from "./script";

const openMenu = () =>
  {
    var y = document.getElementById("menu");
    if (myFunction === true && y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

  export default openMenu;