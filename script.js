window.addEventListener('scroll', function() {
  const navigation = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});




// nav

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})