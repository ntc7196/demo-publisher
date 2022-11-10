const header = $('header')
var lastScrollTop = 0
$(window).scroll(function () {
  const height = $(window).scrollTop()
  if (height > lastScrollTop) {
    const fixHeaderH = header.innerHeight() - 90
    if (height >= fixHeaderH) {
        $('.header-menu').addClass('bg-dark')
    }
  } else {
    if (height <= 430-90) {
        $('.header-menu').removeClass('bg-dark')
    }
  }
  lastScrollTop = height
})
