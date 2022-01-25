import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import Section from "@/src/components/Section";

export interface OurGalleryProps {}

export default function OurGallery({
  language = "ID",
  activeId = "",
  clickSelengkapnya,
}: {
  language?: string;
  activeId?: string;
  clickSelengkapnya?: () => void;
}) {
  const [state, setState] = useState({
    carouselImagePositionBefore: 10,
    carouselImagePosition: 1,
    carouselImage: "/desktop/gallery/carousel/photo_1.png",
    carousel2Image: "/desktop/gallery/carousel2/photo_2.png",
    lang: "ID",
  });
  useEffect(() => {
    setState({ ...state, lang: language });
  }, [state.lang, language]);
  const textDatas = {
    title: {
      en: "Our Gallery",
      id: "Galeri Foto",
    },
    description: {
      en: "We would like to share our beautiful memories to you",
      id: "Kami ingin membagikan momen bahagia yang tidak pernah terlupakan",
    },
  };

  const translate = state.lang.toLowerCase().includes("en") ? "en" : "id";
  const titleText: string = textDatas.title[translate];
  const descriptionText: string = textDatas.description[translate];
  const maxCarouselImage = 10;
  const minCarouselImage = 1;
  const handleClickNextPhotos = (position: number) => {
    setState({
      ...state,
      carouselImagePositionBefore:
        state.carouselImagePositionBefore === maxCarouselImage
          ? minCarouselImage
          : state.carouselImagePositionBefore + 1,
      carouselImagePosition:
        position >= maxCarouselImage ? minCarouselImage : position + 1,
      carouselImage:
        position >= maxCarouselImage
          ? `/desktop/gallery/carousel/photo_${minCarouselImage}.png`
          : `/desktop/gallery/carousel/photo_${position + 1}.png`,
    });
  };
  const handleClickPrevPhotos = (position: number) => {
    setState({
      ...state,
      carouselImagePositionBefore:
        state.carouselImagePositionBefore === minCarouselImage
          ? maxCarouselImage
          : position - 1,
      carouselImagePosition:
        position <= minCarouselImage ? maxCarouselImage : position - 1,
      carouselImage:
        position <= minCarouselImage
          ? `/desktop/gallery/carousel/photo_${maxCarouselImage}.png`
          : `/desktop/gallery/carousel/photo_${position - 1}.png`,
    });
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setState({
        ...state,
        carouselImagePositionBefore:
          state.carouselImagePositionBefore === maxCarouselImage
            ? minCarouselImage
            : state.carouselImagePositionBefore + 1,
        carouselImagePosition:
          state.carouselImagePosition >= maxCarouselImage
            ? minCarouselImage
            : state.carouselImagePosition + 1,
        carouselImage:
          state.carouselImagePosition >= maxCarouselImage
            ? `/desktop/gallery/carousel/photo_${minCarouselImage}.png`
            : `/desktop/gallery/carousel/photo_${
                state.carouselImagePosition + 1
              }.png`,
      });
    }, 3500);
    return () => clearTimeout(interval);
  }, [state.carouselImagePosition]);
  const handleClickSelengkapnya = () => {
    clickSelengkapnya();
  };
  return (
    <Banner
      id={"our-gallery"}
      height={"our-gallery"}
      align={"flex-start"}
      background={"/desktop/gallery/gallery_background.svg"}
    >
      <Section gap={36} align={"flex-start"} justify={"center"}>
        <Typography
          variant={"heading-2-regular"}
          color={"cooper"}
          family={"greatvibes"}
          align={"center"}
        >
          {titleText}
        </Typography>
        <Typography
          variant={"body-1-medium"}
          color={"onyx"}
          family={"montserrat"}
          align={"center"}
        >
          {descriptionText}
        </Typography>
        {/* section photos */}
        <div className={style["container-box-photos-left"]}>
          <div>
            <div
              className={`${style["box-large-photos"]} ${
                state.carouselImagePositionBefore !==
                  state.carouselImagePosition &&
                style["box-photos--fade-in-right"]
              }`}
              style={{
                backgroundImage: `url("${state.carouselImage}")`,
              }}
            >
              <div
                className={style["box-icons-large-photos-left"]}
                onClick={() =>
                  handleClickPrevPhotos(state.carouselImagePosition)
                }
              >
                <img
                  src={"/desktop/icons/arrow_left.svg"}
                  width={32}
                  height={32}
                />
              </div>
              <div
                className={style["box-icons-large-photos-right"]}
                onClick={() =>
                  handleClickNextPhotos(state.carouselImagePosition)
                }
              >
                <img
                  src={"/desktop/icons/arrow_right.svg"}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          <div className={style["container-box-photos-right"]}>
            <div
              className={`${style["box-photos"]} ${
                state.carouselImagePositionBefore !==
                  state.carouselImagePosition &&
                style["box-photos--fade-in-bottom"]
              }`}
              style={{
                backgroundImage: `url("/desktop/gallery/carousel_2/photo_${
                  state.carouselImagePosition + 1 > maxCarouselImage
                    ? (state.carouselImagePosition + 1) % 10
                    : state.carouselImagePosition + 1
                }.png")`,
              }}
            />
            <div
              className={`${style["box-photos"]} ${
                state.carouselImagePositionBefore !==
                  state.carouselImagePosition &&
                style["box-photos--fade-in-bottom"]
              }`}
              style={{
                backgroundImage: `url("/desktop/gallery/carousel_2/photo_${
                  state.carouselImagePosition + 2 > maxCarouselImage
                    ? (state.carouselImagePosition + 2) % 10
                    : state.carouselImagePosition + 2
                }.png")`,
              }}
            />
            <div
              className={`${style["box-photos"]} ${
                state.carouselImagePositionBefore !==
                  state.carouselImagePosition &&
                style["box-photos--fade-in-bottom"]
              }`}
              style={{
                backgroundImage: `url("/desktop/gallery/carousel_2/photo_${
                  state.carouselImagePosition + 3 > maxCarouselImage
                    ? (state.carouselImagePosition + 3) % 10
                    : state.carouselImagePosition + 3
                }.png")`,
              }}
              onClick={handleClickSelengkapnya}
            >
              <Typography
                variant={"body-1-semibold"}
                color={"white"}
                family={"montserrat"}
                align={"center"}
              >
                {"Lihat Selengkapnya"}
              </Typography>
            </div>
          </div>
          {/* end section photos */}
        </div>
      </Section>
    </Banner>
  );
}
