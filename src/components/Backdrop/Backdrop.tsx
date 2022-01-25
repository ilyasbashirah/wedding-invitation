import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function Backdrop({
  open = false,
  children,
  handleCloseContent,
}: {
  open?: boolean;
  children?: React.ReactNode;
  handleCloseContent?: () => void;
}) {
  const [state, setState] = useState({
    content: false,
  });
  useEffect(() => {
    setState({ ...state, content: open });
  }, [state.content, open]);
  const handleClose = () => {
    console.log('testststst')
    setState({ ...state, content: false });
    handleCloseContent();
  };
  return (
    <>
      {state.content && (
        <>
          <div className={style.backdrop} onClick={handleClose} />
          <div className={style["backdrop-content"]}>{children}</div>
        </>
      )}
    </>
  );
}
