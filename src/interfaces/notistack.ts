import { ReactNode } from "react";

declare module 'notistack' {
    interface VariantOverrides {
        // adds `reportComplete` variant and specifies the
        // "extra" props it takes in options of `enqueueSnackbar`
        skillCheckSnackbar: {
            bgColor: string;
            hoverColor: string;
            node: ReactNode;
        }
    }
}