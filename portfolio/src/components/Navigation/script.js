
const myFunction= () => {
    // let x = document.getElementById("navbar");
    // x.classList.toggle('change');
    let x = document.getElementById("navbar");
    let y = document.getElementById("menu");

    if (y.style.display === "block"){
      x.classList.toggle("change");
      y.style.display = "none";
    } else {
      x.classList.toggle("change");
      y.style.display = "block";
    }

  }
  

export default myFunction;