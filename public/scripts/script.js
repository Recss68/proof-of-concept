// Deze script zorgt ervoor dat de css classes voor de hamburger menu pas worden ingeladen
// Als de js het doet, doet de js het niet = geen hamburger menu

document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector("ul.menufb");
    if (ul) {
      ul.classList.remove("menufb");
      ul.classList.add("menu-items");
    }
  
    const listItems = document.querySelectorAll("li.itemfb");
    listItems.forEach(function(li) {
      li.classList.remove("itemfb");
      li.classList.add("nav-item");
    });
  
    // Hamburger menu
    const menu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
  
    if (menu && menuItems) {
      menu.addEventListener('click', function () {
        menuItems.classList.toggle('active');
      });
    }
  });

