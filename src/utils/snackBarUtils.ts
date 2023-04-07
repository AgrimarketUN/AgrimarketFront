import { useSnackbar, VariantType } from 'notistack';

export const SnackBarUtils = {
  toast(msg: string, variant: VariantType = "default") {
    const { enqueueSnackbar } = useSnackbar();
    enqueueSnackbar(msg, { variant });
  },
  success: (msg: string) => {
    SnackBarUtils.toast(msg, "success");
  },
  error: (msg: string) => {
    SnackBarUtils.toast(msg, "error");
  },
  warning: (msg: string) => {
    SnackBarUtils.toast(msg, "warning");
  },
  info: (msg: string) => {
    SnackBarUtils.toast(msg, "info");
  },
};
