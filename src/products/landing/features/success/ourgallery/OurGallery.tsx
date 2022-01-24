import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Banner from "@/src/components/Banner";
import Typography from "@/src/components/Typography";
import { useRouter } from "next/router";
import Section from "@/src/components/Section";

export interface OurGalleryProps {}

export default function OurGallery({ language = "ID" }: { language?: string }) {
  const [state, setState] = useState({
    carouselImage: "/desktop/gallery/photos/photos_left_1.png",
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

  const handleClickNextPhotos = () => {
    setState({
      ...state,
      carouselImage: "/desktop/gallery/photos/photos_right_1.png",
    });
  };
  const handleClickPrevPhotos = () => {
    setState({
      ...state,
      carouselImage: "/desktop/gallery/photos/photos_right_2.png",
    });
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
              className={style["box-large-photos"]}
              style={{
                backgroundImage: `url("${state.carouselImage}")`,
              }}
            >
              <div
                className={style["box-icons-large-photos-left"]}
                onClick={handleClickPrevPhotos}
              >
                <img
                  src={"/desktop/icons/arrow_left.svg"}
                  width={32}
                  height={32}
                />
              </div>
              <div
                className={style["box-icons-large-photos-right"]}
                onClick={handleClickNextPhotos}
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
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_1.png")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_2.png")`,
              }}
            />
            <div
              className={style["box-photos"]}
              style={{
                backgroundImage: `url("/desktop/gallery/photos/photos_right_3.png")`,
              }}
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
