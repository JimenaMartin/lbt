import { ThemeOptions } from '@material-ui/core';
import { coreThemeConstants } from './coreThemeConstants';

export const typography: ThemeOptions['typography'] = {
    body1: {
        fontWeight: 400,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.lg,
    },
    body2: {
        fontSize: 'inherit',
        fontWeight: 400,
        letterSpacing: coreThemeConstants.letterSpacing.xs,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    chart: {
        fontSize: '0.75rem',
        letterSpacing: '1px', // this should be 0.4px but the chart doesn't render exactly the same, so adjusted here
    },
    fontFamily: coreThemeConstants.fontFamily,
    fontWeightBold: 600,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
        /**
         * h1 in design
         * Used for
         * - title in ProductCard
         * - Apy value in ProductCard
         * - title in protocol-position block
         */
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    h2: {
        /**
         * h2 in design
         * Used for
         * - amount in small AmountDetail
         * - Alert titles
         */
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.sm,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    h3: {
        /**
         * h3 in design
         * Used for
         * - Secondary headers in below fold content
         */
        fontSize: '1rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    h4: {
        /**
         * Used for
         * - large feature text on product home pages
         */
        fontSize: '5rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.lg,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    h5: {
        /**
         * Used for
         * - main title of scenes,
         */
        fontSize: '2.5rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    h6: {
        /**
         * Used for
         * - amount in large AmountDetail
         */
        fontSize: '2rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.sm,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    label: {
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    nav: {
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: coreThemeConstants.letterSpacing.sm,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    navSub: {
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        // lineHeight: '1rem',
    },
    sceneHeader: {
        fontSize: '1rem',
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
    smallAmount: {
        fontWeight: 500,
        letterSpacing: coreThemeConstants.letterSpacing.md,
        lineHeight: coreThemeConstants.lineHeight.md,
    },
};
