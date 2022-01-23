import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Modal from "@/src/components/Modal";
import Typography from "@/src/components/Typography";

export interface PaymentAccountModalProps {}

export default function PaymentAccountModal({
  open = false,
  handleBatalKirimHadiah,
}: {
  open?: boolean;
  handleBatalKirimHadiah?: (condition: boolean) => void;
}) {
  const [state, setState] = useState({
    modal: true,
  });
  const textDatas = {
    title: {
      id: "Choose one of the option below",
      en: "Choose one of the option below",
    },
    payment_method_options: {
      bank_account: {
        title: "Bank Account",
        datas: [
          {
            id: "BRI",
            name: "Moh. Ilyas Bashirah Putra Arya",
            rekening: "1234 - 8392 - 9839 -2938",
            icon: "/desktop/weddinggift/bank_account/bri.svg",
          },
          {
            id: "BCA",
            name: "Moh. Ilyas Bashirah Putra Arya",
            rekening: "1234 - 8392 - 9839 -2938",
            icon: "/desktop/weddinggift/bank_account/bca.svg",
          },
          {
            id: "BNI",
            name: "Moh. Ilyas Bashirah Putra Arya",
            rekening: "1234 - 8392 - 9839 -2938",
            icon: "/desktop/weddinggift/bank_account/bni.svg",
          },
        ],
      },
    },
  };

  useEffect(() => {
    console.log(open, "ini kepanggil ga sih");
    setState({ ...state, modal: open });
  }, [open]);

  const handleCloseModal = () => {
    setState({ ...state, modal: false });
    handleBatalKirimHadiah(false);
  };

  const handleCopyText = (text: string) => {
    if (typeof window !== undefined) {
      window.navigator.clipboard.writeText(text);
    }
  };
  return (
    <Modal open={state.modal} handleOutside={handleCloseModal}>
      <div className={style["container-payment-account-modal"]}>
        <div className={style["container-header-modal"]}>
          <Typography
            family={"montserrat"}
            variant={"body-1-bold"}
            color={"cooper"}
          >
            {textDatas.title["en"]}
          </Typography>
          <div
            onClick={handleCloseModal}
            className={style["button-close-modal"]}
          >
            <img src={"/desktop/weddinggift/icons/close_icon.svg"} />
          </div>
        </div>

        {/* <hr className={style["divider-payment-account"]} /> */}

        <div className={style["payment-method-options"]}>
          <div className={style["bank-account-payment-method"]}>
            <Typography
              family={"montserrat"}
              variant={"body-1-bold"}
              color={"dark-liver"}
            >
              {textDatas.payment_method_options.bank_account.title}
            </Typography>

            <div className={style["container-bank-account-list"]}>
              {textDatas.payment_method_options.bank_account.datas.map(
                (item: any, index: number) => (
                  <div className={style["box-copy-bank-account-list"]}>
                    <div
                      key={`box-bank-account-list-${index}`}
                      className={style["box-bank-account-list"]}
                    >
                      <div className={style["box-icon-bank-account"]}>
                        <img src={item.icon} alt={"icon-bank-account"} />
                      </div>

                      <div className={style["box-description-bank-account"]}>
                        <Typography
                          family={"montserrat"}
                          variant={"body-3-bold"}
                          color={"dark-liver"}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          family={"montserrat"}
                          variant={"body-3-medium"}
                          color={"gray"}
                        >
                          {item.rekening}
                        </Typography>
                      </div>
                    </div>

                    {/* button copy */}
                    <div
                      className={`${style["button-copy-bank-account"]} ${style["button-copy-bank-account-outside"]}`}
                      onClick={() => handleCopyText(item.rekening)}
                    >
                      <div
                        className={`${style["button-copy-bank-account"]} ${style["button-copy-bank-account-inside"]}`}
                      >
                        <Typography
                          family={"montserrat"}
                          variant={"caption-1-bold"}
                          color={"cooper"}
                        >
                          {"Copy Number"}
                        </Typography>
                      </div>
                    </div>
                    {/* end button copy */}
                  </div>
                )
              )}
            </div>

            {/* copy wallet another */}
          </div>
        </div>
      </div>
    </Modal>
  );
}
