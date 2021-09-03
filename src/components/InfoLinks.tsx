/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography, useTheme, useMediaQuery, IconButton, Link } from "@material-ui/core";
import { ReactComponent as DownloadIcon } from "../icons/download.svg";
import { ReactComponent as NavigateIcon } from "../icons/navigate.svg";
import { ReactComponent as DiscordIcon } from "../icons/discord.svg";
import { ReactComponent as TwitterIcon } from "../icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";

export function InfoLinks() {
  const theme = useTheme();

    const links = [
      { label: "Tokenomics", href: "#tokenomics" },
      { label: "Gro team", href: "#team" },
      { label: "Seed investors", href: "#investors" },
      { label: "Gro Roadmap", href: "#roadmap" },
    ];

    const mobileLinks = [{ label: 'Learn more', href: ''}]

  const isXsSize = useMediaQuery(theme.breakpoints.down("xs"));


    return (
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {(isXsSize ? mobileLinks : links).map((elem) => (
          <Box display="flex" alignItems="center" key={elem.label}>
            <Typography mr={0.3} color={theme.palette.grey[100]}>
              {elem.label}
            </Typography>
            <IconButton component={Link} href={elem.href}>
              <DownloadIcon />
            </IconButton>
          </Box>
        ))}
        <Box display="flex" alignItems="center">
          <Typography mr={0.3} color={theme.palette.grey[100]}>
            Security Audits
          </Typography>
          <IconButton>
            <NavigateIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" mt={isXsSize ? 2 : 0}>
          <Typography mr={0.3} color={theme.palette.grey[100]}>
            See for updates:
          </Typography>
          <Box mr={1} display="flex" alignItems="center">
            <IconButton component={Link} href="https://discord.gg/aNprNWqjQ4">
              <DiscordIcon />
            </IconButton>
          </Box>
          <Box mr={1} display="flex" alignItems="center">
            <IconButton component={Link} href="https://twitter.com/groprotocol">
              <TwitterIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton component={Link} href="https://t.me/gro_discussion">
              <TelegramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
}