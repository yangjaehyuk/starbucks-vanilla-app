const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl=document.querySelector('.badges');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.screenY);
  if(window.scrollY > 500){
    // 배지 요소 숨김
    // gsap.to(애니메이션 요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }
  else{
    // 배지 요소 보임
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// _.throttle(함수, 시간)