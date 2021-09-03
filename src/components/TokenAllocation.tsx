/** @jsxImportSource @emotion/react */
import {
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Link
} from "@material-ui/core";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import gro_token_allocation from '../assets/gro_token_allocation.png';

export function TokenAllocation() {
  const theme = useTheme();
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

    return (
      <Grid container pt={10} id="tokenomics">
        <Grid item sm={5}>
          <Typography variant="h1" color={theme.palette.grey[100]}>
            Token Allocation
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography mr={1} color={theme.palette.grey[200]}>
              Learn more
            </Typography>
            <IconButton
              component={Link}
              href="https://groprotocol.medium.com/introducing-gro-dao-token-ad302100b8c4"
            >
              <NavigateIcon />
            </IconButton>
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