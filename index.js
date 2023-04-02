const handleHeaderButton = () => {
  setTimeout(() => {
    var dropdown = document.querySelector(".navbar-collapse");
    var headerButton = document.getElementById("header-navbar-toggle");
    console.log("123", dropdown.className);
    if(dropdown.className.includes("show")) {
      headerButton.style.visibility = "hidden";
    }
    else {
      headerButton.style.visibility = "visible";
    }
  }, 400)
}