import { useMemo } from 'react'
import {
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { css } from "@emotion/react";
import { BtnLink } from './BtnLink';

import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";

export function Investors() {
    const theme = useTheme();

    const styles = {
      box: css`
        width: 48%;
        height: 92px;
        border: 1px solid #9aafbf;
        border-radius: 16px;
        @media (min-width: 1100px) {
          width: 32%;
        }
      `,
    };
  const isLgSize = useMediaQuery(theme.breakpoints.down("lg"));
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

  const investorsList = useMemo(() => {
      const investors = ['Nascent', 'Nascent', 'Nascent', 'Nascent', 'Nascent', 'Nascent']
      return isLgSize ? investors.slice(0,4) : investors
    }, [isLgSize])

    return (
      <Grid container pt={10} id="investors">
        <Grid item sm={5}>
          <Typography variant="h1" color={theme.palette.grey[100]} mb={2}>
            Backed by leading investors
          </Typography>
          <Box mb={isXsSize ? 5 : 0}>
            <BtnLink
              text="See all"
              href="https://www.gro.xyz/about#about-investors"
            >
              <NavigateIcon />
            </BtnLink>
          </Box>
        </Grid>
        <Grid item sm={7} width="100%">
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {investorsList.map((investor) => (
              <Box
                key={investor}
                display="flex"
                justifyContent="center"
                alignItems="center"
                css={styles.box}
                mb={2}
              >
                {investor}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    );
}