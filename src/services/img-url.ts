import NoImgPlaceholder from "../assets/no_image_placeholder.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return NoImgPlaceholder;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
