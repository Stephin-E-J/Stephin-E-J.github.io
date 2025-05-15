/**Using js we will be able to move the image using buttons */
/**let fuction is used to declare a variable */
let currentIndex = 0;
/**the function tag is used to calulate a certain value give to it */
  function moveImage(step) {
    /**const is used to declare a variable but that cannot be changed */
    const slider = document.getElementById('sliderImage');
    const totalImages = slider.children.length; /*The child function is given as a child to the parent element*/
    currentIndex = (currentIndex + step + totalImages) % totalImages;
    slider.style.transform = 'translateX(' + (-900 * currentIndex) + 'px)';/**this is used to change the size of the image container */
  }