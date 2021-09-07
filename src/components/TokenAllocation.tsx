import {
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Link
} from "@material-ui/core";
import { css } from "@emotion/react";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import gro_token_allocation from '../assets/gro_token_allocation.png';

export function TokenAllocation() {
  const theme = useTheme();
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

  const styles = {
    link: css`
      cursor: pointer;
      text-decoration: none;
    `,
  };
    return (
      <Grid container pt={10} id="tokenomics">
        <Grid item sm={5}>
          <Typography variant="h1" color={theme.palette.grey[100]}>
            Token Allocation
          </Typography>
          <Box
            css={styles.link}
            display="flex"
            alignItems="center"
            mt={2}
            component={Link}
            href="https://groprotocol.medium.com/introducing-gro-dao-token-ad302100b8c4"
          >
            <Typography mr={1} color={theme.palette.grey[200]}>
              Learn more
            </Typography>
              <NavigateIcon />
          </Box>
        </Grid>
        <Grid item sm={7} mt={isXsSize ? 5 : 0}>
          <img
            alt="Gro Supply"
            draggable={false}
            src={gro_token_allocation}
            width="100%"
          />
        </Grid>
      </Grid>
    );
}