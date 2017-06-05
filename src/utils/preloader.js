// @flow
export default (images: Array<string>) => {
  images.forEach(image => {
    const img = new Image();
    img.src = image;
  });
};
