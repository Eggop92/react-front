import { ReactNode } from "react";

declare module 'notistack' {
    interface VariantOverrides {
        // adds `reportComplete` variant and specifies the
        // "extra" props it takes in options of `enqueueSnackbar`
        skillCheckSnackbar: {
            modifier: number;
            skill: string;
            icon: ReactNode;
            dice: number;
            ammount: number;
        }
    }
}