import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import carrousel from "../assets/carrousel.png";
import { BtnLink } from "./BtnLink";

import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";

export function Team() {
  const theme = useTheme();

  const isSmSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container pt={10} id="team">
      <Grid item sm={4}>
        <Typography variant="h1" color={theme.palette.grey[100]}>
          Gro Team
        </Typography>
        <Typography mt={5} color={theme.palette.grey[100]} mb={2}>
          A team with decades of experience from leading finance and technology
          institutions.
        </Typography>
        <BtnLink text="Meet the team" href="https://www.gro.xyz/about">
          <NavigateIcon />
        </BtnLink>
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={7} mt={isSmSize ? 5 : 0}>
        <img alt="Gro Supply" draggable={false} src={carrousel} width="100%" />
      </Grid>
    </Grid>
  );
}
