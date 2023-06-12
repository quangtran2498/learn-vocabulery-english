"use client";

import React, { useEffect, CSSProperties } from "react";
import { makeStyles } from "@mui/styles";
// import TextTitle from "../Text/textTitle";
// import ButtonCommon from "../Button";
// import HeaderCloseModal from "../../headers/headerCloseModal";
// import { assets } from "../../../assets";
export interface PopupConfirmProps {
  visible: boolean;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  content?: React.ReactNode | string;
  onHidePopup?: () => void;
  onCancel?: () => void;
  icon?: string | React.ReactNode;
  footer?: React.ReactNode;
  path?: string;
  styleTitle?: CSSProperties;
  disableBtn?: boolean | string;
  btnClose?: React.ReactNode;
  descErrorDefault?: string;
}
// const iconDefault = assets.image.popup.iconFail;
const useStyles = makeStyles((theme) => {
  return {
    icon: {
      ...theme.custom?.flexBox.flexJusCenter,
      padding: "12px 0 16px 0",
    },
    TextTitle: {
      fontSize: "18px",
      color: theme.custom?.text.title,
      textAlign: "center",
      marginBottom: "16px",
    },
    textDesc: {
      textAlign: "center",
      marginTop: "0",
      color: "#000000",
      lineHeight: "20px",
      marginBottom: "16px",
      fontSize: "14px",
    },
    content: {
      background: theme.custom?.background.white,
      borderRadius: "16px",
      padding: "16px 16px",
      width: "100%",
      margin: "0 16px",
      maxWidth: "400px",
    },
    modal: {
      background: "rgba(0, 0, 0, 0.6)",
      position: "fixed",
      width: "100%",
      height: "100vh",
      ...theme.custom?.flexBox.flexCenterCenter,
      zIndex: 99999999,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };
});

const PopupConfirm = (props: PopupConfirmProps) => {
  const {
    visible,
    onHidePopup,
    content,
    title,
    icon,
    footer,
    path,
    styleTitle,
    disableBtn,
    btnClose,
    descErrorDefault,
    ...rest
  } = props;

  const classes = useStyles();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  const preventEvent = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div className={`${classes.modal} popup-global`} onClick={onHidePopup}>
      <div className={classes.content} onClick={preventEvent}>
          {content ? content : "chua co content"}
      </div>
    </div>
  );
};
export default PopupConfirm;
