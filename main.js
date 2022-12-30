//Open and close the menu items
const nav = document.querySelector("#header nav")
const toggles = document.querySelectorAll("nav .toggle")

for (const element of toggles){ 
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
    })
}

// On click in the menu item
const links = document.querySelectorAll('nav ul li a');
for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
// Change the header when scrolling page
function changeHeaderWhenScroll(){
  if (window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
}

// testimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }, 

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767:{
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 30,
      mousewheel: false,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ScrollReveal: show/load elements in order with scrolling pages
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
  `,

  {interval: 300} )

// back-to-top button
const backToTopButton = document.querySelector('.back-to-top')
function showBackToTop(){
  if (window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }
  else {
    backToTopButton.classList.remove('show')
  }
}

backToTopButton.addEventListener('click', function() {
  window.scrollTo(0, 0)
})


//in the main, find all section with has id
const sections = document.querySelectorAll('main .section[id]')
// Menu active in moment
function activeMenuAtCurrentSection() {
  let piecesOfPage = 8
  // Obsolete, check for future application
  const checkpoint = window.pageYOffset + (window.innerHeight/piecesOfPage) * 4  

  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    var navItemSelection = document.querySelector('nav ul li a[href*=' + sectionId + ']'); 
    if (checkpointStart && checkpointEnd) {
      navItemSelection.classList.add('activeMenu')  
    }
    else{
      navItemSelection.classList.remove('activeMenu')
    }
  }
}

//When scrolling page
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  showBackToTop()
  activeMenuAtCurrentSection();
})  
