document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  
  const runCounter = () => {
    counters.forEach(counter => {
      counter.innerText = '0';
      
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        // Change this number to make it faster or slower
        const increment = target / 200;
        
        if(c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target + '+';
        }
      };
      
      updateCounter();
    });
  };

  // Run the counter once (we will add scroll detection later if needed)
  runCounter();
});

// Sticky Header Shadow
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-sm');
    navbar.style.padding = '0.5rem 0'; // Make it slightly thinner
  } else {
    navbar.classList.remove('shadow-sm');
    navbar.style.padding = '1rem 0'; // Back to original size
  }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});