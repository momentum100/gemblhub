const handleHeaderButton = () => {
  setTimeout(() => {
    let dropdown = document.querySelector(".navbar-collapse");
    let headerButton = document.getElementById("header-navbar-toggle");
    const  navbar  = document.querySelector("#navbar");
    const hamburger = document.getElementById("hamburger");
    const hamburgerCancel = document.getElementById("hamburger-cancel");

    console.log("123", dropdown.className);
    if(dropdown.className.includes("show")) {
      headerButton.style.visibility = "hidden";
      navbar.classList.add("show");
      hamburger.style.display = "none";
      hamburgerCancel.style.display = "inline";
    }
    else {
      headerButton.style.visibility = "visible";
      navbar.classList.remove("show");
      hamburger.style.display = "inline";
      hamburgerCancel.style.display = "none";
    }
  }, 400)
}