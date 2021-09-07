import { Box, Typography, useTheme, useMediaQuery, Link } from "@material-ui/core";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import { css } from "@emotion/react";

export function Launch() {
  const theme = useTheme();
  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

  const styles = {
    link: css`
      cursor: pointer;
      text-decoration: none;
    `
  }

    return (
      <Box mt={isXsSize ? 7 : 10}>
        <Typography variant="h1" mb={5} color={theme.palette.grey[100]}>
          How launch works
        </Typography>
        <Typography mb={2} color={theme.palette.grey[100]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, odio
          malesuada malesuada leo. Nibh sed aliquet adipiscing lectus cursus.
          Elementum condimentum orci elementum integer risus eget dignissim
          ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, odio
          malesuada malesuada leo. Nibh sed aliquet adipiscing lectus cursus.
          Elementum condimentum orci elementum integer risus eget dignissim ac.
        </Typography>
        <Box display="flex" alignItems="center" component={Link} css={styles.link}>
          <Typography mr={1} color={theme.palette.grey[200]}>
            Learn more
          </Typography>
          <NavigateIcon />
        </Box>
      </Box>
    );
}