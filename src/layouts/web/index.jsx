import { Outlet } from "react-router-dom";
import Header from "~/components/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useModals } from "~/stores/modal/hooks";
import Modal from "~/modals/index.jsx";

export default function WebLayout() {
  const modals = useModals();

  return (
    <>
      {modals.length > 0 && <Modal />}
      <Header />
      <div className="container mx-auto">
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
              src="src/assets/slides/slide.jpg"
              className="h-[500px] object-cover slide max-w-full"
            />
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="src/assets/slides/slide.jpg"
              className="h-[500px] object-cover slide max-w-full"
            />
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="src/assets/slides/slide.jpg"
              className="h-[500px] object-cover slide max-w-full"
            />
          </div>
        </Carousel>
      </div>
      <Outlet />
    </>
  );
}
