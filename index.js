// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    var typeElement = document.getElementById('type');
  
    if (isElementInViewport(typeElement)) {
      // Add class to restart animation
      typeElement.classList.remove('restart-animation');
      void typeElement.offsetWidth; // Trigger reflow to restart animation
      typeElement.classList.add('restart-animation');
    }
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  