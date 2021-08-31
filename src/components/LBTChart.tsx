/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useMemo, useState} from 'react';
import { css } from '@emotion/react';
import { Box, Typography, useTheme } from '@material-ui/core';
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from 'recharts';
import { CartesianViewBox } from 'recharts/types/util/types';

const data = [
    {
        gro: 24.00,
        name: 'Page A',
    },
    {
        gro: 13.98,
        name: 'Page B',
    },
    {
        gro: 98.00,
        name: 'Page C',
    },
    {
        gro: 39.08,
        name: 'Page D',
    },
    {
        gro: 48.00,
        name: 'Page E',
    },
    {
        gro: 38.00,
        name: 'Page F',
    },
    {
        gro: 43.00,
        name: 'Page G',
    },
];

function CustomTokenLabel({
    color,
    display,
    value,
    viewBox,
    width,
}: {
    color?: string;
    display?: boolean;
    value: number;
    viewBox?: CartesianViewBox;
    width: number;
}): React.ReactElement {
    const theme = useTheme();
    const styles = {
        box: css`
            opacity: ${display ? 1 : 0};
            margin-top: 8px;
            transition: 0.3s linear 0.13s;
            align-items: center;
            display: flex;
        `,
        dashedLine: css`
            width: ${500}px;
            transition: 0.3s ease-in-out;
            transform: translate(${width - 47}px, 0px);
            border-top: 1px dashed ${color};
            margin-top: 2px;
        `,
        tooltip: css`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${color};
            transform: translate(910px, 0px);
            transition: 0.3s ease-in-out;
        `,
        wrapper: css`
            display: block;
            width: 1000px;
            height: 50px;
            transform: translate(0px, ${(viewBox?.y || 0) - 20}px);
            transition: 0.3s ease-in-out;
        `,
    };

    return (
        <foreignObject css={styles.wrapper}>
            <Box css={styles.box}>
                <Box css={styles.tooltip}>
                    <Typography data-testid="$gro-label" variant="body1">
                        {value.toFixed(2)}
                    </Typography>
                </Box>
                <Box css={styles.dashedLine} />
            </Box>
        </foreignObject>
    );
}

export function LBTChart (): React.ReactElement {
    const [groValue, setGroValue] = useState(0);
    const [xReferenceLineWidth, setXReferenceLineWidth] = useState(900);

    const latestValues = useMemo(() => data[data.length - 1] || {}, []);

    const theme = useTheme();

    function toFixed(value: number): string {
        return `${value.toFixed(2)}`;
    }

    function resetReferenceValues(): void {
        setGroValue(latestValues?.gro)
        setXReferenceLineWidth(900);

    }

    function setReferenceValues(props: any): void {
        if (props?.activePayload) {
            setGroValue(props?.activePayload[0].payload.gro);
            setXReferenceLineWidth(props?.activeCoordinate?.x);
        } else {
            resetReferenceValues();

        }
    }

    useEffect(() => {
        setGroValue(latestValues?.gro);
    }, [latestValues]);


    return (
            <LineChart
                data={data}
                height={550}
                margin={{
                    bottom: 5,
                    left: 20,
                    right: 30,
                    top: 5,
                }}
                width={990}
                onMouseLeave={resetReferenceValues}
                onMouseMove={setReferenceValues}
            >
                <CartesianGrid fill="#190542" stroke="rgba(242, 53, 69, 0.1)" strokeDasharray="0 0" />
                <XAxis dataKey="name" stroke="rgba(242, 53, 69, 0.1)" tick={{ fill: '#B452FF' }}  />
                <YAxis orientation="right" stroke="rgba(242, 53, 69, 0.1)" tick={{ fill: '#B452FF'}} tickFormatter={toFixed}/>
                <Line dataKey="gro" dot={false} stroke="#B452FF" strokeWidth={3.5} type="linear" />
                <ReferenceLine
                    label={
                        <CustomTokenLabel
                            display
                            color="#B452FF"
                            value={groValue || 0}
                            width={xReferenceLineWidth}
                        />
                    }
                    stroke="transparent"
                    y={groValue}
                />
            </LineChart>
    );
}

