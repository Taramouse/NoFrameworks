var accordions = document.getElementsByClassName('accordion');

for (var i = 0; i < accordions.length; i++) {

  accordions[i].onclick = function () {
    this.classList.toggle('is-open');
    // select the next element down the DOM to get the accordion content element
    var content = this.nextElementSibling;
    // determine if content element is open or closed
    if (content.style.maxHeight) {
      // accordion is open, close it
      content.style.maxHeight = null;
    } else {
      // accordion is closed, scrollHeight is the total size of the elements content
      content.style.maxHeight = content.scrollHeight + 'px';

    }
  }
}