/**
 * This file can be used to override default props and styles on the various Material components
 * see: https://next.material-ui.com/customization/theme-components/
 */
import { alertClasses, alpha, Theme, ThemeOptions } from '@material-ui/core';
import { coreThemeConstants } from './coreThemeConstants';

export function components(theme: Theme): ThemeOptions['components'] {
    return {
        MuiAlert: {
            styleOverrides: {
                icon: {
                    marginRight: theme.spacing(2),
                },
                outlinedInfo: {
                    [`.${alertClasses.message}`]: {
                        padding: 0,
                    },
                    borderColor: theme.palette.grey[700],
                    padding: theme.spacing(2),
                },
                root: {
                    [`&.no-icon .${alertClasses.icon}`]: { display: 'none' },
                },
                standardWarning: {
                    background: theme.palette.grey[700],
                    color: theme.palette.text.primary,
                    fontSize: '1rem',
                },
            },
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    fontSize: '20px',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                contained: {
                    // align outlined vs contained borders
                    border: '1px solid transparent',
                },
                outlined: {
                    '&.disable-hover:hover': {
                        '&.MuiButton-outlinedAlert': {
                            borderColor: alpha(theme.palette.alert.main, 0.5),
                        },
                        '&.MuiButton-outlinedSuccess': {
                            borderColor: alpha(theme.palette.success.main, 0.5),
                        },
                        backgroundColor: 'transparent',
                        cursor: 'default',
                    },
                    '&.disabled': {
                        borderColor: theme.palette.grey[400],
                        color: theme.palette.grey[400],
                    },
                },
                root: {
                    '&.MuiButton-containedDefault': {
                        '&:hover': {
                            color: theme.palette.common.black,
                        },
                    },
                    '&.MuiButton-containedGvt': {
                        '&:hover': {
                            background: theme.palette.gvt.main,
                            borderColor: theme.palette.gvt.main,
                            color: theme.palette.common.black,
                        },
                        background: theme.palette.gvt.light,
                        borderColor: theme.palette.gvt.light,
                        color: theme.palette.common.black,
                    },
                    '&.MuiButton-containedInfo': {
                        color: theme.palette.common.white,
                    },
                    '&.MuiButton-containedPwrd': {
                        '&:hover': {
                            background: theme.palette.pwrd.main,
                            borderColor: theme.palette.pwrd.main,
                            color: theme.palette.common.black,
                        },
                        background: theme.palette.pwrd.light,
                        borderColor: theme.palette.pwrd.light,
                        color: theme.palette.common.black,
                    },
                    '&.MuiButton-outlinedGvt': {
                        '&:hover': {
                            color: theme.palette.gvt.light,
                        },
                        borderColor: theme.palette.gvt.light,
                        color: theme.palette.gvt.light,
                    },
                    '&.MuiButton-outlinedPwrd': {
                        '&:hover': {
                            color: theme.palette.pwrd.light,
                        },
                        borderColor: theme.palette.pwrd.light,
                        color: theme.palette.pwrd.light,
                    },
                    'a&': {
                        // could be removed once we stop using reboot.scss from bootstrap
                        '&:hover': {
                            color: 'inherit',
                        },
                    },
                    fontSize: '1rem',
                    letterSpacing: coreThemeConstants.letterSpacing.xs,
                    textTransform: 'none',
                },
                sizeLarge: {
                    lineHeight: coreThemeConstants.lineHeight.md,
                    minWidth: theme.spacing(20),
                    padding: theme.spacing(1.8125, 1.5),
                },
                sizeMedium: {
                    lineHeight: coreThemeConstants.lineHeight.md,
                    padding: theme.spacing(0.875, 1.5),
                },
                sizeSmall: {
                    lineHeight: coreThemeConstants.lineHeight.md,
                    padding: theme.spacing(0.875, 1.5),
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&.MuiCheckbox-colorDefault.Mui-checked': {
                        color: theme.palette.default.main,
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(5),
                    paddingRight: theme.spacing(5),
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                dd: {
                    margin: 0,
                },
                dl: {
                    margin: 0,
                },
                dt: {
                    margin: 0,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiDrawer: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                paper: {
                    borderRight: 'none',
                    width: theme.cssMixins.appDrawerWidth,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    // could be removed once we stop using reboot.scss from bootstrap
                    '&:hover': {
                        color: 'inherit',
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                },
            },
        },
        MuiSkeleton: {
            defaultProps: {
                animation: 'wave',
            },
            styleOverrides: {
                text: {
                    borderRadius: '2px',
                    display: 'inline',
                    height: '1em',
                    padding: '0 2em',
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    height: 16,
                    padding: 0,
                    width: 28,
                },
                switchBase: {
                    '&.Mui-checked': {
                        '& + .MuiSwitch-track': {
                            backgroundColor: theme.palette.common.white,
                            borderColor: theme.palette.common.white,
                            opacity: 1,
                        },
                        color: theme.palette.common.black,
                        transform: 'translateX(12px)',
                    },
                    color: theme.palette.common.white,
                    padding: 2,
                },
                thumb: {
                    boxShadow: 'none',
                    height: 12,
                    width: 12,
                },
                track: {
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.palette.common.white}`,
                    borderRadius: 16 / 2,
                    opacity: 1,
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                body: {
                    borderBottom: 'none',
                },
                head: theme.typography.h3,
                root: {
                    borderColor: theme.palette.divider,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: theme.palette.common.white,
                    height: '1px',
                },
                root: {
                    '& .MuiTab-root': {
                        '&.Mui-selected': {
                            color: theme.palette.common.white,
                        },
                        '&:first-of-type': {
                            paddingLeft: theme.spacing(0),
                        },
                        '&:last-child': {
                            paddingRight: theme.spacing(1),
                        },
                        color: alpha(theme.palette.common.white, 0.5),
                        fontSize: '1rem',
                        letterSpacing: coreThemeConstants.letterSpacing.md,
                        minWidth: 0,
                        padding: theme.spacing(2, 2.5, 2, 2),
                        textTransform: 'none',
                    },
                    '&.MuiTabs-indicator': {
                        backgroundColor: theme.palette.common.white,
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[600],
                    borderRadius: '3px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    '&.MuiTypography-gutterBottom': {
                        marginBottom: '2rem',
                    },
                },
                h3: {
                    '&.MuiTypography-gutterBottom': {
                        marginBottom: '1rem',
                    },
                },
                h6: {
                    '&.MuiTypography-gutterBottom': {
                        marginBottom: '2rem',
                    },
                },
            },
        },
    };
}
