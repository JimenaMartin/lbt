import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, useTheme, CircularProgress, LinearProgress } from "@material-ui/core";
import { css, keyframes } from "@emotion/react";
import { ReactComponent as StackedIcon } from "../icons/stacked.svg";
import { ReactComponent as ArrowUpIcon } from "../icons/arrow-up.svg";
import { ReactComponent as TimerIcon } from "../icons/timer.svg";

interface Time {
  value: number
  label: string
}

export function GetTokens({setIsOpen}: { setIsOpen: (val: boolean) => void}) {
  const [remainingTime, setRemainingTime] = useState<Time[]>([]);
  const [ totalPercentage, setTotalPercentage] = useState(0)
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
      padding: ${theme.spacing(4)} ${theme.spacing(3)};
      @media (max-width: 1100px) and (min-width: 600px) {
        min-width: 272px;
      }
      @media (max-width: 350px) {
        max-width: 300px;
      }
      @media (max-width: 800px) and (min-width: 500px) {
        padding: ${theme.spacing(4)} ${theme.spacing(1.5)};
      }
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
    subText: css`
      font-size: 10px;
      text-align: center;
    `,
    timer: css`
      position: absolute;
      left: 9px;
      bottom: 9px;
    `,
    backProgress: css`
      position: absolute;
      color: ${theme.palette.grey[600]};
    `,
    progressBar: css`
      height: 9px;
      border-radius: 5px;
      background: linear-gradient(270deg, #b452ff 30%, #ff9bff 50%);
      & .MuiLinearProgress-bar {
        background: ${theme.palette.grey[600]};
      }
    `,
  };

  useEffect(() => {
    const countDownDate = new Date("Sept 9, 2021 15:37:25").getTime();

    function getRemainingTime() {
      const now = new Date().getTime();
      const secondsInThreeDays = 258820;

      const secondsLeft = (countDownDate - now) / 1000
      const percentage =  100 - Math.floor((secondsLeft * 100) / secondsInThreeDays);

      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ) + days * 24;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime([{value:hours, label: 'HR'}, {value:minutes, label: 'MIN'}, {value:seconds, label: 'SEC'}]);
      setTotalPercentage(percentage)
    }

    setInterval(() => {
      getRemainingTime()
    }, 1000)
    
  }, [])



  const totalDuration = [
    { value: "72", label: "HR" },
    { value: "00", label: "MIN" },
    { value: "00", label: "SEC" },
  ];

  const totalGRO = 5000000
  const purchasedGRO = 2534568

  const GROLeft = (totalGRO - purchasedGRO)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Box css={styles.box}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography color={theme.palette.grey[100]} variant="h3" mb={1.3}>
            Duration
          </Typography>
          <Box display="flex">
            {totalDuration.map((elem, index) => (
              <React.Fragment>
                <Box mr={totalDuration.length - 1 !== index ? 0.5 : 0}>
                  <Typography color={theme.palette.grey[100]} variant="h2">
                    {elem.value}
                  </Typography>
                  <Typography
                    css={styles.subText}
                    color={theme.palette.grey[200]}
                  >
                    {elem.label}
                  </Typography>
                </Box>
                {totalDuration.length - 1 !== index && (
                  <Typography
                    color={theme.palette.grey[100]}
                    mr={0.5}
                    variant="h2"
                  >
                    :
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="end" position="relative">
          <CircularProgress
            size={42}
            variant="determinate"
            value={100}
            color="info"
            css={styles.backProgress}
          />
          <CircularProgress
            size={42}
            variant="determinate"
            value={totalPercentage}
            color="secondary"
          />
          <TimerIcon css={styles.timer} />
        </Box>
        <Box>
          <Box display="flex" justifyContent="flex-end">
            <Typography color={theme.palette.grey[100]} variant="h3" mb={1.3}>
              Ends in
            </Typography>
          </Box>
          <Box display="flex">
            {remainingTime.map((elem, index) => (
              <React.Fragment>
                <Box mr={totalDuration.length - 1 !== index ? 0.5 : 0}>
                  <Typography color={theme.palette.grey[100]} variant="h2">
                    {elem.value < 10 ? `0${elem.value}` : elem.value}
                  </Typography>
                  <Typography
                    css={styles.subText}
                    color={theme.palette.grey[200]}
                  >
                    {elem.label}
                  </Typography>
                </Box>
                {totalDuration.length - 1 !== index && (
                  <Typography
                    color={theme.palette.grey[100]}
                    mr={0.5}
                    variant="h2"
                  >
                    :
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>

      <Box mt={4}>
        <Box display="flex" mb={1} justifyContent="space-between">
          <Typography color={theme.palette.grey[100]} variant="h3">
            5,000,000
          </Typography>
          <Typography color={theme.palette.grey[100]} variant="h3">
            /
          </Typography>
          <Typography
            color={theme.palette.gro.superLight}
            variant="h3"
          >
            {GROLeft} GRO left
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={(purchasedGRO * 100) / totalGRO}
          css={styles.progressBar}
        />
      </Box>
      <Box mt={3} mb={3}>
        <Typography color={theme.palette.grey[100]}>Latest price</Typography>
        <Box display="flex" mt={1.5} alignItems="baseline">
          <Typography variant="h1" mr={1}>
            $0.42
          </Typography>
          <ArrowUpIcon />
          <Typography variant="body1" mx={0.5} color={theme.palette.grey[100]}>
            $0.04
          </Typography>
          <Typography variant="body1" color={theme.palette.grey[100]}>
            1hr
          </Typography>
        </Box>
        <Typography mt={1.5} color={theme.palette.grey[200]} variant="body1">
          No wallet allocation limit
        </Typography>
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
