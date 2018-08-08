window.onload = function() {
    backgroundSlide();
};

function backgroundSlide() {
    $('.tri-top-left').addClass('tri-top-left-transition');
    $('.tri-top-right').addClass('tri-top-right-transition');
}

function jerseyHover(className, textName, zIndex, display) {

    var elements = document.getElementsByClassName(className);
    var texts = document.getElementsByClassName(textName);

    for(var i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = zIndex;
        texts[i].style.display = display;
    }

    document.getElementById('hover-emphasis').style.display = display;

}
