
  window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollBtn');
    if (window.scrollY > 50) {
      scrollButton.style.display = 'none';
    } else {
      scrollButton.style.display = 'block';
    }
  });
