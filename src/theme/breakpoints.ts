import { Breakpoints } from '@material-ui/system';

export const breakpoints: Partial<
    {
        step: number;
        unit: string;
    } & Breakpoints
> = {
    values: { xs: 430, sm: 600, md: 960, lg: 1100, xl: 1920 },
};
