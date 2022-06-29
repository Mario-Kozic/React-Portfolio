
const myFunction = () => {

  let x = document.getElementById("navbar");
  x.classList.toggle('change');
  let y = document.getElementsByClassName("sidebar-nav");
  if (y.style.display === "block"){
    x.classList.toggle("change");
    y.style.display = "none";
  } else {
    x.classList.toggle("change");
    y.style.display = "block";
  }


}
export default myFunction;