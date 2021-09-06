/* eslint-disable @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-interface */
import type { Theme as MUITheme, PaletteColorOptions } from '@material-ui/core/styles';
import {} from '@emotion/react/types/css-prop';
import { cssMixins } from './cssMixins';

declare module '@material-ui/core/styles/createPalette' {
    interface TypeText {
        quaternary: string;
        tertiary: string;
    }
}

declare module '@material-ui/core/styles' {
    interface Theme {
        cssMixins: typeof cssMixins;
    }
    interface ThemeOptions {
        cssMixins: typeof cssMixins;
    }
    interface PaletteColor {
        superDark?: string;
        superLight?: string;
    }
    interface SimplePaletteColorOptions {
        contrastText?: string;
        dark?: string;
        light?: string;
        main: string;
        superDark?: string;
        superLight?: string;
    }
    interface Palette {
      alert: SimplePaletteColorOptions;
      default: SimplePaletteColorOptions;
      lbt: SimplePaletteColorOptions;
      gro: SimplePaletteColorOptions;
      gvt: SimplePaletteColorOptions;
      pwrd: SimplePaletteColorOptions;
    }
    interface PaletteOptions {
      alert?: PaletteColorOptions;
      default?: PaletteColorOptions;
      lbt?: PaletteColorOptions;
      gro?: PaletteColorOptions;
      gvt?: PaletteColorOptions;
      pwrd?: PaletteColorOptions;
    }
    interface TypographyVariants {
        chart: React.CSSProperties;
        label: React.CSSProperties;
        nav: React.CSSProperties;
        navSub: React.CSSProperties;
        sceneHeader: React.CSSProperties;
        smallAmount: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        chart: React.CSSProperties;
        label: React.CSSProperties;
        nav: React.CSSProperties;
        navSub: React.CSSProperties;
        sceneHeader: React.CSSProperties;
        smallAmount: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@material-ui/core/Typography' {
    interface TypographyPropsVariantOverrides {
        chart: true;
        label: true;
        nav: true;
        navSub: true;
        sceneHeader: true;
        smallAmount: true;
    }
}

declare module '@material-ui/core/Button' {
    interface ButtonPropsColorOverrides {
        alert: PaletteColorOptions | true;
        default: PaletteColorOptions | true;
        gro: PaletteColorOptions | true;
        gvt: PaletteColorOptions | true;
        pwrd: PaletteColorOptions | true;
    }
}

declare module '@emotion/react' {
    export interface Theme extends MUITheme {}
}
