import { Box, Typography, useTheme, useMediaQuery, Link } from "@material-ui/core";
import { ReactComponent as DownloadIcon } from "../icons/download.svg";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import { ReactComponent as DiscordIcon } from "../icons/discord.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { css } from "@emotion/react";
import { BtnLink } from './BtnLink'

export function InfoLinks() {
  const theme = useTheme();

    const styles = {
      link: css`
        &:hover {
          & svg > path {
            fill: white;
          }
        }
      `,
    };


    const links = [
      { label: "Tokenomics", href: "#tokenomics" },
      { label: "Gro team", href: "#team" },
      { label: "Seed investors", href: "#investors" },
      { label: "Gro Roadmap", href: "#roadmap" },
    ];

    const mobileLinks = [{ label: 'Learn more', href: ''}]

  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmSize = useMediaQuery(theme.breakpoints.down("sm"));


    return (
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {(isXsSize ? mobileLinks : links).map((elem) => (
          <BtnLink text={elem.label} href={elem.href}>
            <DownloadIcon />
          </BtnLink>
        ))}
        <BtnLink text="Security Audits">
          <NavigateIcon />
        </BtnLink>
        <Box display="flex" alignItems="center" mt={isSmSize ? 2 : 0}>
          <Typography color={theme.palette.grey[100]}>
            See for updates:
          </Typography>
          <Box
            mr={1}
            display="flex"
            alignItems="center"
            component={Link}
            href="https://discord.gg/aNprNWqjQ4"
            css={styles.link}
            ml={2}
          >
            <DiscordIcon />
          </Box>
          <Box
            mr={1}
            display="flex"
            alignItems="center"
            component={Link}
            href="https://twitter.com/groprotocol"
            css={styles.link}
            ml={2}
          >
            <TwitterIcon />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            component={Link}
            href="https://t.me/gro_discussion"
            css={styles.link}
            ml={2}
          >
            <TelegramIcon />
          </Box>
        </Box>
      </Box>
    );
}