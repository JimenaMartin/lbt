import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import gro_token_allocation from '../assets/gro_token_allocation.png';
import { BtnLink } from "./BtnLink";

export function TokenAllocation() {
  const theme = useTheme();
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

    return (
      <Grid container pt={10} id="tokenomics">
        <Grid item sm={5}>
          <Typography variant="h1" color={theme.palette.grey[100]} mb={2}>
            Token Allocation
          </Typography>
          <BtnLink
            text="Learn more"
            href="https://groprotocol.medium.com/introducing-gro-dao-token-ad302100b8c4"
          >
            <NavigateIcon />
          </BtnLink>
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