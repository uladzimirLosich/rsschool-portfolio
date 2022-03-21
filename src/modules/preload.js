const preloadImages = () => {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  for (let i = 0; i <= seasons.length - 1; i += 1) {
    for (let j = 1; j <= 6; j += 1) {
      const img = new Image();
      img.src = `./src/assets/img/${seasons[i]}/${j}.jpg`;
    }
  }
};
export default preloadImages;
