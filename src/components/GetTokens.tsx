/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, useTheme, Tooltip } from "@material-ui/core";
import { css, keyframes } from "@emotion/react";
import { ReactComponent as InfoIcon } from "../icons/info.svg";
import { ReactComponent as StackedIcon } from "../icons/stacked.svg";
import { ReactComponent as ArrowUpIcon } from "../icons/arrow-up.svg";

export function GetTokens({setIsOpen}: { setIsOpen: (val: boolean) => void}) {
  const [ remainingTime, setRemainingTime ] = useState<number[]>([])
  const theme = useTheme()

  const lightUp = keyframes`
  from, 0%, to {
    box-shadow: none;
  }
  100% {
    box-shadow: 0px 0px 20px ${theme.palette.lbt.dark};
  }
`;

  const styles = {
    box: css`
      background-color: ${theme.palette.lbt.main};
      border: 1px solid ${theme.palette.gro.dark};
      border-radius: 16px;
      width: 100%;
      max-width: 355px;
      height: 378px;
      margin-bottom: ${theme.spacing(3)};
      @media (max-width: 1100px) and (min-width: 600px) {
        min-width: 272px;
      }
      @media (max-width: 350px) {
        max-width: 300px;
      }
    `,
    timeBox: css`
      background-color: rgba(180, 82, 255, 0.2);
      border-radius: 4px;
      width: 56px;
      height: 40px;
    `,
    icon: css`
      color: ${theme.palette.grey[100]};
    `,
    button: css`
      background-color: ${theme.palette.gro.dark};
      border: 1px solid ${theme.palette.lbt.superLight};
      box-shadow: none;
      padding: ${theme.spacing(1.5)} 0px;
      animation: ${lightUp} 1s ease-in-out 2s infinite alternate;
      &:hover {
        background-color: ${theme.palette.lbt.dark};
        box-shadow: 0px 0px 20px ${theme.palette.lbt.light};
        animation: none;
      }
    `,
    iconBtn: css`
      position: absolute;
      right: 12px;
      top: 9px;
    `,
  };

  useEffect(() => {
    const countDownDate = new Date("Sept 10, 2021 15:37:25").getTime();

    function getRemainingTime() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime([days, hours, minutes, seconds]);
    }

    setInterval(() => {
      getRemainingTime()
    }, 1000)
    
  }, [])

  return (
    <Box py={4} px={3} css={styles.box}>
      <Box display="flex" justifyContent="space-between">
        <Typography color={theme.palette.grey[100]}>Event ends in</Typography>
        <Tooltip title="Event duration 3 days">
          <InfoIcon css={styles.icon} />
        </Tooltip>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        pt={1.5}
        alignItems="center"
      >
        {remainingTime.map((elem, index) => (
          <React.Fragment>
            <Box
              css={styles.timeBox}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={`${index}-time`}
            >
              <Typography variant="h1">
                {elem < 10 ? `0${elem}` : elem}
              </Typography>
            </Box>
            {remainingTime.length - 1 !== index && (
              <Typography variant="h1">:</Typography>
            )}
          </React.Fragment>
        ))}
      </Box>
      <Box mt={3}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color={theme.palette.grey[100]}>GRO Held</Typography>
          <Typography color={theme.palette.grey[100]}>1,016,000</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color={theme.palette.grey[100]}>Trade Volume</Typography>
          <Typography color={theme.palette.grey[100]}>1,016,000</Typography>
        </Box>
      </Box>
      <Box mt={5} mb={3}>
        <Typography color={theme.palette.grey[100]}>Latest price</Typography>
        <Box display="flex" mt={1.5} alignItems="baseline">
          <Typography variant="h1" mr={1}>$0.42</Typography>
          <ArrowUpIcon />
          <Typography variant="body1" mx={0.5} color={theme.palette.grey[100]}>
            $0.04
          </Typography>
          <Typography variant="body1" color={theme.palette.grey[100]}>
            1hr
          </Typography>
        </Box>
      </Box>
      <Button
        onClick={() => setIsOpen(true)}
        fullWidth
        variant="contained"
        css={styles.button}
        endIcon={<StackedIcon css={styles.iconBtn} />}
      >
        Get GRO tokens
      </Button>
    </Box>
  );
}
