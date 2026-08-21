import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import colors from "tailwindcss/colors";
import type { News } from "@/types/general";

type Props = {
    news: News[]
}

export default function LineCharts(props: Props) {
    const { news } = props;

    const data = useMemo(() => {
        const dates: { date: string; news: number }[] = [];

        news?.forEach((item) => {
            const date = item.date;

            const index = dates.findIndex((item) => item.date === date);

            if (index != -1) {
                dates[index].news += 1;
            } else {
                dates.push({
                    date,
                    news: 1,
                });
            }
        });

        return dates;
    }, [news]);

    console.log(data);

    return (
        <LineChart
            style={{
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                maxHeight: "40vh",
                aspectRatio: 2,
            }}
            responsive
            data={data}
            margin={{
                top: 40,
                right: 50,
                left: 10,
                bottom: 0,
            }}
        >
            <XAxis dataKey="date" stroke={colors.slate[400]} />
            <YAxis
                width="auto"
                stroke={colors.slate[400]}
                label={{
                    value: "News",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                        textAnchor: "middle",
                        fill: colors.slate[400],
                    },
                }}
            />
            <Tooltip
                cursor={{
                    stroke: colors.slate[400],
                    strokeWidth: 2,
                }}
                contentStyle={{
                    backgroundColor: colors.slate[500],
                    borderColor: colors.slate[300],
                }}
                labelStyle={{
                    color: colors.slate[200],
                }}
                itemStyle={{
                    color: colors.slate[200],
                }}
            />
            <Legend />
            <Line
                type="monotone"
                strokeWidth={3}
                dataKey="news"
                stroke={colors.slate[500]}
                dot={{
                    fill: colors.slate[300],
                }}
                activeDot={{ r: 5, stroke: colors.white }}
            />
        </LineChart>
    );
};