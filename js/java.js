window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});