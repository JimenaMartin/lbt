import { createTheme } from '@material-ui/core';
import { breakpoints } from './breakpoints';
import { components } from './components';
import { coreThemeConstants } from './coreThemeConstants';
import { cssMixins } from './cssMixins';
import { paletteCore } from './palette';
import { shape } from './shape';
import { typography } from './typography';

export * from './components';

const themeBase = createTheme({
    breakpoints,
    cssMixins,
    palette: paletteCore,
    shape,
    spacing: coreThemeConstants.spacingBase,
    typography,
});

export const theme = createTheme(themeBase, {
    components: components(themeBase),
});
