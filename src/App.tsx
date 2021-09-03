/** @jsxImportSource @emotion/react */

import "./App.css";
import { Box, Grid, useTheme, useMediaQuery } from "@material-ui/core";
import { LBTChart } from "./components/LBTChart";
import { GetTokens } from "./components/GetTokens";
import { InfoLinks } from "./components/InfoLinks";
import { TokenAllocation } from "./components/TokenAllocation";
import { Team } from "./components/Team";
import { css } from "@emotion/react";
import { Launch } from "./components/Launch";
import { Investors } from "./components/Investors";
import { RoadMap } from "./components/RoadMap";
import { Header } from "./components/Header";
import gradient_background from "./assets/gradient_background.png";

function App() {
  const theme = useTheme()

  const styles = {
    main: css`
      background-image: url(${gradient_background});
      background-repeat: no-repeat;
      background-size: contain;
    `,
    wrapper: css`
      max-width: 1000px;
    `,
  };

  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdSize = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box display="flex" justifyContent="center" css={styles.main}>
      <Box css={styles.wrapper} mx={isMdSize ? 3.5 : 0}>
        <Header />
        <Grid container mb={5} spacing={isXsSize ? 0 : 2}>
          <Grid item md={4} sm={5} xs={12} component={Box} width="100%">
            <GetTokens />
          </Grid>
          <Grid item md={8} sm={7} xs={12} component={Box} width="100%">
            <LBTChart />
          </Grid>
        </Grid>
        <Box mb={20}>
          <InfoLinks />
          <Launch />
          <TokenAllocation />
          <Investors />
          <Team />
          {!isXsSize && <RoadMap />}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
