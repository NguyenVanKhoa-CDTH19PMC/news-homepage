function myFunction() {
      var x = document.getElementById("nav");
      if (x.className === "") {
        {
          x.className += " responsive";
          x.getElementsByClassName('icon-toggle')[0].src = "assets/images/icon-menu-close.svg"
        }
      } else {
        x.className = "";
        x.getElementsByClassName('icon-toggle')[0].src = "assets/images/icon-menu.svg"
      }
    }