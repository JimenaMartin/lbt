import { Grid, Typography, Box, useTheme, Link } from "@material-ui/core";
import { css } from "@emotion/react";
import gro_roadmap from "../assets/gro_roadmap.png";

import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";

export function RoadMap() {
  const theme = useTheme();

  const styles = {
    link: css`
      cursor: pointer;
      text-decoration: none;
    `,
  };

  return (
    <Grid container pt={10} id="roadmap">
      <Grid item lg={5}>
        <Box display="flex">
          <Typography variant="h1" color={theme.palette.grey[100]}>
            Gro Roadmap
          </Typography>
          <Typography variant="h1" color={theme.palette.grey[400]} ml={2}>
            2nd Half of 2021
          </Typography>
        </Box>
        <Box
          css={styles.link}
          display="flex"
          alignItems="center"
          mt={2}
          component={Link}
          href="https://groprotocol.medium.com/gro-protocol-roadmap-721932642c25"
        >
          <Typography mr={1} color={theme.palette.grey[200]}>
            Learn More
          </Typography>
          <NavigateIcon />
        </Box>
      </Grid>
      <Grid item lg={12} mt={5}>
        <img
          alt="Gro Supply"
          draggable={false}
          src={gro_roadmap}
          width="100%"
        />
      </Grid>
    </Grid>
  );
}
