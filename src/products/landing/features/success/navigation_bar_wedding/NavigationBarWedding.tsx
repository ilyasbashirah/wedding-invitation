import { useState } from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";
export interface NavigationbarWeddingProps {}

export default function NavigationbarWedding({
  switchLanguageTo,
}: {
  switchLanguageTo?: (lang: string) => void;
}) {
  const [state, setState] = useState({
    active: "",
    language: "ID",
  });
  const menu = [
    {
      title: "Couple",
      id: "bride-and-groom",
    },
    {
      title: "Venue",
      id: "venue-maps-location",
    },
    {
      title: "Protocol",
      id: "health-protocol",
    },
    {
      title: "Gallery",
      id: "our-gallery",
    },
    {
      title: "Gift",
      id: "wedding-gift",
    },
  ];
  const handleScrollTo = (sectionId: string) => {
    const elementSection = document.getElementById(sectionId);
    const yOffset =
      sectionId === "health-protocol"
        ? -100
        : sectionId === "venue-maps-location"
        ? -100
        : -10;
    if (elementSection !== null && typeof window !== undefined) {
      const y =
        elementSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setState({ ...state, active: sectionId });
  };

  const handleSwitchLanguage = (lang: string) => {
    let bahasa = "EN";
    if (lang === "EN") {
      bahasa = "ID";
    } else if (lang === "ID") {
      bahasa = "EN";
    }
    setState({ ...state, language: bahasa });
    switchLanguageTo(bahasa);
  };
  return (
    <div className={style["container-navbar"]}>
      <div className={style["frame-section-navbar"]}>
        <img src={"/desktop/navigation_bar/bajo_logo.svg"} alt={"bajo_logo"} />
        <div className={style["container-menu-translate"]}>
          <div className={style["container-menu"]}>
            {menu.map((item: any, index: number) => (
              <div
                key={`menu-${index}`}
                className={style["button-menu-navigation-bar"]}
                onClick={() => handleScrollTo(item.id)}
              >
                <div className={"content-button-menu-navigation"}>
                  <Typography
                    variant={
                      state.active !== item.id ? "body-5-medium" : "body-5-bold"
                    }
                    color={
                      state.active !== item.id ? "philippine-silver" : "cooper"
                    }
                    family={"montserrat"}
                    align={"center"}
                  >
                    {item.title}
                  </Typography>
                </div>

                <div
                  className={`${style["footer-button-menu-navigation"]} ${
                    state.active === item.id
                      ? style["footer-button-menu-navigation--active"]
                      : style["footer-button-menu-navigation--inactive"]
                  }`}
                />
              </div>
            ))}
          </div>

          {state.language === "EN" ? (
            <div
              className={style["button-translate"]}
              onClick={() => handleSwitchLanguage(state.language)}
            >
              <Typography
                variant={"button-2-bold"}
                color={"cooper"}
                family={"montserrat"}
                align={"center"}
              >
                {"EN"}
              </Typography>
              <img src={"/desktop/navigation_bar/translate/en_logo.svg"} />
            </div>
          ) : (
            <div
              className={style["button-translate"]}
              onClick={() => handleSwitchLanguage(state.language)}
            >
              <img src={"/desktop/navigation_bar/translate/id_logo.svg"} />
              <Typography
                variant={"button-2-bold"}
                color={"cooper"}
                family={"montserrat"}
                align={"center"}
              >
                {"ID"}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
