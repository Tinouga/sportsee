import styles from "../UserAverageScore/UserAverageScore.module.scss";
import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

const UserAverageScore = ({score}) => {
    const percentage = (score * 100).toFixed(0);

    return (
        <article className={styles.userAverageScore}>
            <h2>Score</h2>
            <ResponsiveContainer width={"100%"} height={"100%"} className={styles.radialChart}>
                <RadialBarChart
                    innerRadius="80%"
                    outerRadius="90%"
                    barSize={10}
                    data={[{value: score}]}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1.0]}
                        tick={false}
                    />
                    <svg viewBox="0 0 100 100" overflow="visible">
                        <circle cx="50" cy="50" r="38" fill="#FFF"/>
                    </svg>
                    <RadialBar
                        fill="#FF0000"
                        clockWise
                        cornerRadius={5}
                        dataKey="value"/>
                    <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#282D30"
                        fontSize="1.625rem"
                        fontWeight={600}
                    >
                        {`${percentage}%`}
                    </text>
                    <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#74798C"
                        fontSize="1rem"
                        fontWeight={600}
                    >
                        de votre
                    </text>
                    <text
                        x="50%"
                        y="70%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#74798C"
                        fontSize="1rem"
                        fontWeight={600}
                    >
                        objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
};

export default UserAverageScore;
