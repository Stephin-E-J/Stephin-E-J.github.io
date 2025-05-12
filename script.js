let currentIndex = 0;

  function moveImage(step) {
    const slider = document.getElementById('sliderImage');
    const totalImages = slider.children.length; /*The child function is given as a child to the parent element*/
    currentIndex = (currentIndex + step + totalImages) % totalImages;
    slider.style.transform = 'translateX(' + (-900 * currentIndex) + 'px)';
  }