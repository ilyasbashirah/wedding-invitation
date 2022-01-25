import { useState, useEffect } from "react";
import Modal from "@/src/components/Modal";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface ICarouselModalProps {}

export default function CarouselModal({
  openModalGallery = false,
  closeModalAction,
}: {
  openModalGallery?: boolean;
  closeModalAction?: () => void;
}) {
  const [state, setState] = useState({
    active: 1,
    openModal: false,
  });
  const maxState = 10;
  const minState = 1;
  const handleClickPrevious = (active: number) => {
    let final: number;
    if (active > minState) {
      final = active - 1;
    }
    if (active <= minState) {
      final = 2;
    }
    setState({ ...state, active: final });
  };
  const handleClickNext = (active: number) => {
    let final: number;
    if (active >= maxState) {
      final = 1;
    }
    if (active < maxState) {
      final = active + 1;
    }
    setState({ ...state, active: final });
  };

  useEffect(() => {
    setState({ ...state, openModal: openModalGallery });
  }, [state.openModal, openModalGallery]);

  const handleCloseModal = () => {
    setState({ ...state, openModal: false });
    closeModalAction();
  };
  const handleSelectPhotos = (activeIndex: number) => {
    setState({ ...state, active: activeIndex });
  };
  const tenListArray = Array.from({ length: 10 }, (_, i) => i + 1);
  
  return (
    <div>
      <Modal
        open={state.openModal}
        fullWidth={false}
        handleOutside={handleCloseModal}
      >
        <div className={style["header-carousel-modal"]} onClick={handleCloseModal} >
          <div
            className={style["button-close-modal"]}
            onClick={handleCloseModal}
          >
            <img
              src={"/desktop/gallery/icons/close.svg"}
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* grid photos */}
        <div className={style["grid-photos"]}  onClick={handleCloseModal}>
          <div className={style["container-gallery-photos"]}>
            <div
              className={style["icon-arrow-right"]}
              onClick={() => handleClickPrevious(state.active)}
            >
              <img
                className={style["icon-arrow-left"]}
                src={`/desktop/icons/arrow_left.svg`}
              />
            </div>

            <img
              src={`/desktop/gallery/carousel/photo_${state.active}.png`}
              width={816}
              height={498}
            />
            <div
              className={style["icon-arrow-right"]}
              onClick={() => handleClickNext(state.active)}
            >
              <img src={`/desktop/icons/arrow_right.svg`} />
            </div>
          </div>

          <div className={style["list-of-photos"]}>
            {tenListArray.map((item: any) => (
              <div
                key={`photos-of-list-${item}`}
                className={
                  state.active === item && style["rectangle-box-photo"]
                }
                onClick={() => handleSelectPhotos(item)}
              >
                <img
                  src={`/desktop/gallery/carousel_2/photo_${item}.png`}
                  width={state.active === item ? 390 : 392}
                  height={state.active === item ? 148 : 150}
                />
              </div>
            ))}
          </div>
        </div>
        {/* end grid photos */}
      </Modal>
    </div>
  );
}
