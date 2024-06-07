import type { ToastOptions } from "react-toastify";
import { toast as baseToast } from "react-toastify";
import { format, parseISO } from "date-fns";
import type { FormikProps } from "formik";

import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

const localeMap: any = {
  en: enLocale,
  ru: ruLocale,
};

const toastOptions: ToastOptions = {
  // autoClose: 5000,
  position: "top-center",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  closeButton: true,
  pauseOnFocusLoss: false,  
};
export const toastLoading = (message: string) => {
  return baseToast.loading(message, toastOptions);
};

export const toastUpdate = (
  toastId: any,
  message: string,
  toastType: any = "success"
) => {
  baseToast.update(toastId, {
    render: message,
    type: toastType,
    isLoading: false,
    autoClose: 5000,
  });
};

export const toast = (
  message: string,
  toastType: "info" | "success" | "warning" | "error" | "default" = "success",
  options?: ToastOptions
) => {
  baseToast(message, {
    type: toastType,
    autoClose: 5000,

    ...toastOptions,
    ...options,
  });
};