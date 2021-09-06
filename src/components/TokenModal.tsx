import { css } from "@emotion/react";

import {
  Box,
  Button,
  Typography,
  useTheme,
  Dialog,
  IconButton,
} from "@material-ui/core";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

export function TokenModal({ setIsOpen, isOpen}: { setIsOpen: (val:boolean) => void, isOpen: boolean}) {
    const theme = useTheme();

    const styles = {
      modal: css`
        height: 432px;
        width: 439px;
        border: 1px solid ${theme.palette.gro.light};
        background: ${theme.palette.background.paper};
        border-radius: 16px;
        padding: ${theme.spacing(3)} ${theme.spacing(5)} ${theme.spacing(7)};
      `,
      goBalancer: css`
        background-color: ${theme.palette.gro.dark};
        border: 1px solid ${theme.palette.lbt.superLight};
        padding: ${theme.spacing(1.5)} 0px;
        &:hover {
          background-color: ${theme.palette.gro.dark};
          box-shadow: 0px 0px 20px ${theme.palette.lbt.dark};
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

  return (
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
          <IconButton onClick={() => setIsOpen(false)} css={styles.closeBtn}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box width="98%">
          <Typography pb={5} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            elementum et mauris in ridiculus. Duis sed posuere auctor urna, sed.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            elementum et mauris in ridiculus. Duis sed posuere auctor urna, sed.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            elementum et mauris in ridiculus. Duis sed posuere auctor urna, sed.
          </Typography>
        </Box>
        <Button fullWidth variant="contained" css={styles.goBalancer}>
          I Agree, go to Balancer
        </Button>
      </Box>
    </Dialog>
  );
}
