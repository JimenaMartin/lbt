/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { Box, Button, Typography, useTheme, useMediaQuery, Dialog, IconButton } from "@material-ui/core";
import { css } from "@emotion/react";
import { ReactComponent as GroFullLogoSvg } from "../icons/groFull.svg";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

export function Header() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false)

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
       modal: css`
         height: 432px;
         width: 439px;
         border: 1px solid #b452ff;
         background: #051c2e;
         border-radius: 16px;
         padding: ${theme.spacing(3)} ${theme.spacing(5)} ${theme.spacing(7)};
       `,
       goBalancer: css`
         background-color: ${theme.palette.gro.dark};
         border: 1px solid #ff9bff;
         padding: ${theme.spacing(1.5)} 0px;
         &:hover {
           background-color: ${theme.palette.gro.dark};
           box-shadow: 0px 0px 20px #ff0bff;
           animation: none;
         }
       `,
       closeBtn: css`
         height: 20px;
         &:hover {
           background: transparent;
         }
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
            <Button
              variant="outlined"
              onClick={() => setIsOpen(true)}
              color="default"
              css={styles.button}
            >
              dApp
            </Button>
            <Button
              variant="outlined"
              onClick={() => setIsOpen(true)}
              color="default"
            >
              Get GRO tokens
            </Button>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              BackdropProps={{
                style: {
                  backdropFilter: "blur(3px)",
                  backgroundColor: "rgba(0,0,30,0.4)",
                },
              }}
            >
              <Box css={styles.modal}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Typography variant="h1" pb={5}>
                    Terms of participation
                  </Typography>
                  <IconButton
                    onClick={() => setIsOpen(false)}
                    css={styles.closeBtn}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box width="98%">
                  <Typography pb={5} variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Arcu elementum et mauris in ridiculus. Duis sed posuere
                    auctor urna, sed. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Arcu elementum et mauris in ridiculus. Duis
                    sed posuere auctor urna, sed. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Arcu elementum et mauris in
                    ridiculus. Duis sed posuere auctor urna, sed.
                  </Typography>
                </Box>
                <Button fullWidth variant="contained" css={styles.goBalancer}>
                  I Agree, go to Balancer
                </Button>
              </Box>
            </Dialog>
          </Box>
        )}
      </Box>
    );
}