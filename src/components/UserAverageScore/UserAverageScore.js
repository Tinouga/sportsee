import styles from "../UserAverageScore/UserAverageScore.module.scss";
import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

const UserAverageScore = ({score}) => {
    const percentage = (score * 100).toFixed(0);

    const data = [
        // {value: 1.0, fill: '#FFF', name: 'maxValue'},
        {value:0.5, fill: '#FF0000', name: 'currentScore'}
    ];

    // const data = [
    //     { name: 'L1', value: 25 }
    // ];
    //
    // const circleSize = 30;

    return (
        <article className={styles.userAverageScore}>
            <h2>Score</h2>
            <ResponsiveContainer width={"100%"} height={"100%"} className={styles.radialChart}>


                {/*<RadialBarChart*/}
                {/*    width={circleSize}*/}
                {/*    height={circleSize}*/}
                {/*    cx={circleSize / 2}*/}
                {/*    cy={circleSize / 2}*/}
                {/*    innerRadius={12}*/}
                {/*    outerRadius={18}*/}
                {/*    barSize={2}*/}
                {/*    data={data}*/}
                {/*    startAngle={90}*/}
                {/*    endAngle={-270}*/}
                {/*>*/}
                {/*    <PolarAngleAxis*/}
                {/*        type="number"*/}
                {/*        domain={[0, 100]}*/}
                {/*        angleAxisId={0}*/}
                {/*        tick={false}*/}
                {/*    />*/}
                {/*    <RadialBar*/}
                {/*        background*/}
                {/*        clockWise*/}
                {/*        dataKey="value"*/}
                {/*        cornerRadius={circleSize / 2}*/}
                {/*        fill="#82ca9d"*/}
                {/*    />*/}
                {/*    <text*/}
                {/*        x={circleSize / 2}*/}
                {/*        y={circleSize / 2}*/}
                {/*        textAnchor="middle"*/}
                {/*        dominantBaseline="middle"*/}
                {/*        className="progress-label"*/}
                {/*    >*/}
                {/*        25*/}
                {/*    </text>*/}
                {/*</RadialBarChart>*/}
                <RadialBarChart
                    innerRadius="25%"
                    outerRadius="90%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1.0]}
                        angleAxisId={0}
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
