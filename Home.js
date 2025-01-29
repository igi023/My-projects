window.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const h1 = document.querySelector('.navbar h1');
  const links = navbar.querySelectorAll('a');
  const scrollAmount = 100; 

  function changeNavColor() {
      console.log('Scrolling');
      if (window.scrollY > scrollAmount) { 
          navbar.style.position = 'fixed';
          navbar.style.backgroundColor = 'silver'; 
          navbar.style.borderColor = 'black';
          links.forEach(a => a.style.color = 'black'); 
          h1.style.color = 'black'; 
          h1.style.borderColor = 'black';
      } else { 
        navbar.style.position = 'relative';
        navbar.style.backgroundColor = 'black'; 
        navbar.style.borderColor = 'white';
        links.forEach(a => a.style.color = 'white'); 
        h1.style.color = 'white'; 
        h1.style.borderColor = 'white'; 
      }
  }

  links.forEach(a => {
      a.addEventListener('mouseover', function() {
          this.style.color = 'rgb(0, 0, 204)'; 
      });
      a.addEventListener('mouseout', function() {
          if (window.scrollY > scrollAmount) {
              this.style.color = 'black'; 
          } else {
              this.style.color = 'white'; 
          }
      });
  });

 
  

 
  window.onscroll = function() {
      changeNavColor();
  };
});



// JS CODE FOR HAMBURGER MENU 

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});




// JS CODE FOR HOME SECTION

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".sliderImages img");
    let cycle = 0;

    function startAnimation() {
        images.forEach((img, index) => {
            img.classList.add('hidden');
            img.classList.remove('slide-in', 'slide-out'); 
        });

       
        images.forEach((img, index) => {
            if ((index >= cycle && index < cycle + 3) || (cycle + 3 > images.length && index < (cycle + 3) % images.length)) {
                img.classList.remove('hidden');
                img.classList.add('slide-in');
                img.addEventListener('animationend', () => {
                    if (img.classList.contains('slide-in')) {
                        img.classList.remove('slide-in');
                        img.classList.add('slide-out');
                    }
                });
            }
        });

        
        cycle = (cycle + 3) % images.length;

        
        setTimeout(startAnimation, 6000); 
    }

    
    startAnimation();
});



// JS KOD ZA TEXT U HOME SEKCIJI

  document.addEventListener("DOMContentLoaded", function() {
    let i = 0;
    let txtIndex = 0;
    const texts = ['I\'m a web developer', 'My name is Igor', 'I\'m a programmer'];
    let speed = 50; 
    let deleting = false;
    
    function typeWriter() {
      let currentText = texts[txtIndex];
      let displayText = currentText.substring(0, i);
      
      document.getElementById("typeWritter").innerHTML = displayText;
      
      if (!deleting) {
        if (i < currentText.length) {
          i++;
          setTimeout(typeWriter, speed);
        } else {
          deleting = true;
          setTimeout(typeWriter, 1000); 
        }
      } else {
        if (i > 0) {
          i--;
          setTimeout(typeWriter, speed);
        } else {
          deleting = false;
          txtIndex = (txtIndex + 1) % texts.length; 
          setTimeout(typeWriter, 500); 
        }
      }
    }
    
    typeWriter();
  });


//   JS KOD ZA MY WORK
document.addEventListener("DOMContentLoaded", function() {
    
    const projects = document.querySelectorAll('.project');
  
    
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom > 0
      );
    }
  
    
    function checkVisibility() {
      projects.forEach(project => {
        if (isInViewport(project)) {
          project.classList.add('in-view');
        }
      });
    }
  
  
    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});


function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};


  let backToTopButton = document.getElementById("backToTop");


  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopButton.style.display = "flex";
      } else {
          backToTopButton.style.display = "none";
      }
  };

  
  function scrollToTop() {
      document.body.scrollTop = 0; //  Safari
      document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE,  Opera
  }



// Control with navigation anchor

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
});