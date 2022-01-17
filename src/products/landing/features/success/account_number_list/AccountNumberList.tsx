import * as React from "react";
import style from "./style.module.scss";
import Typography from "@/src/components/Typography";

export interface IAccountNumberListProps {}

export default function AccountNumberList(props: IAccountNumberListProps) {
  const datas = [
    {
      nama: "M Ilyas Bashirah P A",
      account_number: "1234 - 8392 - 9839 -2938",
      img: "/desktop/weddinggift/bank_account/bca.svg",
    },
    {
      nama: "M Ilyas Bashirah P A",
      account_number: "1234 - 8392 - 9839 -2938",
      img: "/desktop/weddinggift/bank_account/bni.svg",
    },
    {
      nama: "M Ilyas Bashirah P A",
      account_number: "1234 - 8392 - 9839 -2938",
      img: "/desktop/weddinggift/bank_account/bri.svg",
    },
  ];
  return (
    <>
      {datas.map((item: any, index: number) => {
        return (
          <div
            key={`list-account-${index}`}
            className={style["container-account-number-list"]}
          >
            <div
              key={`list-account-${index}`}
              className={style["container-icon-account-number-list"]}
            >
              <div className={style["box-bank-icon"]}>
                <img src={item.img} />
              </div>

              <div className={"box-text-name-account-number"}>
                <Typography
                  family={"montserrat"}
                  variant={"body-1-semibold"}
                  color={"dark-liver"}
                  align={"center"}
                >
                  {item.nama}
                </Typography>
                <Typography
                  family={"montserrat"}
                  variant={"body-1-semibold"}
                  color={"dark-liver"}
                  align={"center"}
                >
                  {item.account_number}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
