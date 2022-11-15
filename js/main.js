const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const header = $('header')
const halfbrowserHeight = $(document).height() / 2
var lastScrollTop = 0
$(window).scroll(function () {
  const height = $(window).scrollTop()
  if (height > lastScrollTop) {
    // update header
    const fixHeaderH = header.innerHeight() - 90
    if (height >= fixHeaderH) {
      $('.header-menu').addClass('bg-dark')
    }
    // update scroll
    if (height >= halfbrowserHeight) {
      $('#scroll-top').removeClass('d-none')
    }
  } else {
    // update header
    if (height <= 430 - 90) {
      $('.header-menu').removeClass('bg-dark')
    }
    // update scroll
    if (height < halfbrowserHeight) {
      $('#scroll-top').addClass('d-none')
    }
  }
  lastScrollTop = height
})

$('#scroll-top').click(() => {
  window.scrollTo(0, 0)
})
