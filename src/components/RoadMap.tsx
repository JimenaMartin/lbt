/** @jsxImportSource @emotion/react */
import { Grid, Typography, Box, useTheme, IconButton, Link } from "@material-ui/core";
import gro_roadmap from "../assets/gro_roadmap.png";

import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";

export function RoadMap() {
    const theme = useTheme();

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
        <Box display="flex" alignItems="center" mt={2}>
          <Typography mr={1} color={theme.palette.grey[200]}>
            Learn More
          </Typography>
          <IconButton
            component={Link}
            href="https://groprotocol.medium.com/gro-protocol-roadmap-721932642c25"
          >
            <NavigateIcon />
          </IconButton>
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
