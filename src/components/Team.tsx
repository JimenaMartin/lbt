import {
  Grid,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Link,
} from "@material-ui/core";
import carrousel from "../assets/carrousel.png";
import { css } from "@emotion/react";

import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";

export function Team() {
  const theme = useTheme();

  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

  const styles = {
    link: css`
      cursor: pointer;
      text-decoration: none;
    `,
  };


  return (
    <Grid container pt={10} id="team">
      <Grid item sm={4}>
        <Typography variant="h1" color={theme.palette.grey[100]}>
          Gro Team
        </Typography>
        <Typography mt={5} color={theme.palette.grey[100]}>
          A team with decades of experience from leading finance and technology
          institutions.
        </Typography>
        <Box
          css={styles.link}
          display="flex"
          alignItems="center"
          mt={2}
          component={Link}
          href="https://www.gro.xyz/about"
        >
          <Typography mr={1} color={theme.palette.grey[200]}>
            Meet the team
          </Typography>
          <NavigateIcon />
        </Box>
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={7} mt={isXsSize ? 5 : 0}>
        <img alt="Gro Supply" draggable={false} src={carrousel} width="100%" />
      </Grid>
    </Grid>
  );
}
