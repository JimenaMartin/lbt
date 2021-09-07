import { css } from "@emotion/react";
import { Typography, Box, useTheme, Link } from "@material-ui/core";
import { ReactChild } from "react";

export function BtnLink({ text, href = '', children}: { text: string, href?: string, children: ReactChild}) {
    const theme = useTheme()

      const styles = {
        link: css`
          cursor: pointer;
          text-decoration: none;
          &:hover {
            & p,
            svg > path {
              color: white;
              fill: white;
            }
          }
        `,
      };

    return (
      <Box
        display="inline-flex"
        alignItems="center"
        component={Link}
        css={styles.link}
        href={href}
      >
        <Typography mr={1} color={theme.palette.grey[200]}>
          {text}
        </Typography>
        {children}
      </Box>
    );
}