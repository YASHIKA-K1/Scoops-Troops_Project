// scrolling of menu from nav bar
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(menuLink.getAttribute('href'));
        if (targetSection) {
          // Scroll to the target section with smooth behavior
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });

  // scrolling of menu from footer
  document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.card7 a[href^="#"]');
    
    menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(menuLink.getAttribute('href'));
        if (targetSection) {
          // Scroll to the target section with smooth behavior
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });

