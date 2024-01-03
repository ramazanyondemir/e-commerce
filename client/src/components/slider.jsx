import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      emulateTouch={true}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={100}
    >
      <div className="rounded-md overflow-hidden">
        <img
          src="https://cdn.myikas.com/images/theme-images/468574b8-3d39-4484-b5b0-b9596b569d47/image_3840.webp"
          className="h-[500px] object-cover slide max-w-full"
        />
      </div>
      <div className="rounded-md overflow-hidden">
        <img
          src="https://cdn.myikas.com/images/theme-images/468574b8-3d39-4484-b5b0-b9596b569d47/image_3840.webp"
          className="h-[500px] object-cover slide max-w-full"
        />
      </div>
      <div className="rounded-md overflow-hidden">
        <img
          src="https://cdn.myikas.com/images/theme-images/468574b8-3d39-4484-b5b0-b9596b569d47/image_3840.webp"
          className="h-[500px] object-cover slide max-w-full"
        />
      </div>
    </Carousel>
  );
}
