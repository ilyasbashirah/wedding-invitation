import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "@/hooks";
import style from "./style.module.scss";
import Backdrop from "../Backdrop";

export default function Modal({
  open = false,
  children,
  handleOutside,
}: {
  open?: boolean;
  children?: React.ReactNode;
  handleOutside?: any;
}) {
  // const ref = useRef(
  //   typeof window !== undefined ? document.createElement("div") : <div />
  // );

  const ref = useRef(
    typeof window !== undefined ? window.document.createElement("div") : <div />
  );
  const [state, setState] = useState({
    modal: false,
  });
  //   useOnClickOutside(ref, () => {
  //     setModalOpen(false);
  //     if (handleOutside) {
  //       handleOutside(false);
  //     }
  //   });

  useOnClickOutside(ref, () => {
    setState(state);
    // handleClose();
  });

  useEffect(() => {
    setState({ ...state, modal: open });
  }, [open]);

  return (
    <>
      <Backdrop open={state.modal}>
        {state.modal && <div className={style.modal}>{children}</div>}
      </Backdrop>
    </>
  );
}
