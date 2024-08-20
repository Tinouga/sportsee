import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import styles from "./UserAverageSessions.module.scss";

const CustomTooltip = ({payload, label, active}) => {
    if (active) {
        return (
            <div className={styles.customTooltip}>
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
}

const CustomAxisTick = ({x, y, payload}) => {
    const getDay = (day) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][day - 1]; // -1 since arrays are 0-indexed

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} textAnchor="middle" fill="rgba(255, 255, 255, 0.5)" fontSize={12}
                  fontWeight={500}>{getDay(payload.value)}</text>
        </g>
    );
};

const UserAverageSessions = ({sessions}) => {

    return (
        <article className={styles.userAverageSessions}>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width={"100%"} height={"100%"} className={styles.lineChart}>
                <LineChart width={300} height={300} data={sessions}>
                    <XAxis dataKey="day" tick={<CustomAxisTick/>} tickLine={false} axisLine={false} tickMargin={20}/>
                    <YAxis hide={true}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{r: 5}}
                    />

                </LineChart>
            </ResponsiveContainer>
        </article>
    );
};

export default UserAverageSessions;
