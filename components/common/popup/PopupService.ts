import React from "react";
import { GlobalPopupConfirmRef } from "./GlobalPopupConfirm";
class PopupService {
  static instance: React.MutableRefObject<GlobalPopupConfirmRef>;
}

export default PopupService;
