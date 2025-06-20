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

  // Loader tonen bij form submit
  const form = document.querySelector('form[action="/details"]');
  const loader = document.getElementById('loader');

  if (form && loader) {
    form.addEventListener('submit', function () {
      loader.classList.remove('hidden');
    });
  }

  // Success message tonen als URL query het aangeeft
  const urlParams = new URLSearchParams(window.location.search);
  const isSuccess = urlParams.get('success');

  if (isSuccess === 'true') {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
      successMessage.classList.remove('hidden');

      // (Optioneel) Na 3 seconden verbergen
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 3000);
    }
  }


