import { useMemo } from 'react'
import {
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Link
} from "@material-ui/core";
import { css } from "@emotion/react";

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
        `
    }
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));
  const isLgSize = useMediaQuery(theme.breakpoints.down("lg"));

  const investorsList = useMemo(() => {
      const investors = ['Nascent', 'Nascent', 'Nascent', 'Nascent', 'Nascent', 'Nascent']
      return isLgSize ? investors.slice(0,4) : investors
    }, [isLgSize])

    return (
      <Grid container pt={10} id="investors">
        <Grid item sm={5}>
          <Typography variant="h1" color={theme.palette.grey[100]}>
            Backed by leading investors
          </Typography>
          <Box display="flex" alignItems="center" mt={2} mb={isXsSize ? 5 : 0}>
            <Typography mr={1} color={theme.palette.grey[200]}>
              See all
            </Typography>
            <IconButton
              component={Link}
              href="https://www.gro.xyz/about#about-investors"
            >
              <NavigateIcon />
            </IconButton>
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