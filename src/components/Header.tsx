/** @jsxImportSource @emotion/react */

import { Box, Button, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { css } from "@emotion/react";
import { ReactComponent as GroFullLogoSvg } from "../icons/groFull.svg";

export function Header({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) {
  const theme = useTheme();

  const styles = {
    wrapper: css`
      display: flex;
      justify-content: space-between;
      @media (max-width: 430px) {
        justify-content: center;
      }
    `,
    centered: css`
      display: flex;
      justify-content: center;
    `,
    logo: css`
      width: 75px;
      @media (max-width: 430px) {
        width: 63px;
      }
    `,
    title: css`
      color: ${theme.palette.gro.light};
    `,
    button: css`
      margin-right: ${theme.spacing(2)};
    `,
  };

  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box css={styles.wrapper} mb={isXsSize ? 3 : 30} mt={isXsSize ? 5 : 7}>
      <Box display="flex">
        <GroFullLogoSvg css={styles.logo} />
        <Typography variant={isXsSize ? "h1" : "h6"} px={2}>
          /
        </Typography>
        <Typography variant={isXsSize ? "h1" : "h6"} css={styles.title}>
          Token launch
        </Typography>
      </Box>
      {!isXsSize && (
        <Box>
          <Button variant="outlined" color="default" css={styles.button}>
            dApp
          </Button>
          <Button
            variant="outlined"
            onClick={() => setIsOpen(true)}
            color="default"
          >
            Get GRO tokens
          </Button>
        </Box>
      )}
    </Box>
  );
}