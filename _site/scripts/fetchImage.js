// Array of image filenames
const images = [
    'osaker22.png',
    'bannerszs3.png',
    'thbanner2.png',
    'lsstare.png',
    'ciasan2.png',
    'math22.png'
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return `/headerimage/${images[randomIndex]}`;
  }
  
  function setHeaderImage() {
    const imageUrl = getRandomImage();
    const headerImageElement = document.getElementById('headerimage');
    if (headerImageElement) {
      headerImageElement.src = imageUrl;
    } else {
      console.error('Element with id "headerimage" not found.');
    }
  }
  
  // Set the header image when the page loads
  window.onload = setHeaderImage;