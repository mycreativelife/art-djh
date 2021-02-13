const navbar = document.getElementById('nav');
const brand = document.getElementById('brand');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add('nav-fixed');
    brand.classList.add('add-logo');
  
  } else {
    navbar.classList.remove('nav-fixed');
    brand.classList.remove('add-logo');   
  }
}

// Gallery Images
function largeGallery (smTitle, smAlt) {
  const largeSize = document.querySelector('.large-size');
  const largeAlt = document.querySelector('.large-title');
  largeSize.textContent = smTitle;
  largeAlt.textContent = smAlt;
}
function imageGallery () {
  const bigImage = document.querySelector('.large-img');
  const previews = document.querySelectorAll('.img-small img')

  previews.forEach((preview) => {
    preview.addEventListener('click', function () {
      const smallTitle = preview.title;
      const smallAlt = preview.alt;
      const smallSrc = preview.src;
      const bigSrc = smallSrc.replace('small', 'big');
      bigImage.src = bigSrc;
      largeGallery(smallTitle, smallAlt);
    });
  });
}

imageGallery();