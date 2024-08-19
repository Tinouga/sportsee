import styles from './UserActivity.module.scss';
import {
    Bar,
    BarChart, Legend,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const CustomTooltip = ({payload, label, active}) => {
    if (active) {
        return (
            <div className={styles.customTooltip}>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }

    return null;
}

const CustomAxisTick = ({x, y, payload}) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={2} textAnchor="middle" fill="#9B9EAC" fontSize={14}
                  fontWeight={500}>{payload.value}</text>
        </g>
    );
};

const renderLegend = ({payload}) => {
    const label = ['Poids (kg)', 'Calories brûlées (kCal)'];

    return (
        <ul className={styles.customLegend}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: 4}}>
                    <svg width="10" height="10" style={{marginRight: 12}}>
                        <circle cx="5" cy="5" r="5" fill={entry.color}/>
                    </svg>
                    <p>{label[index]}</p>
                </li>
            ))}
        </ul>
    );
};

const UserActivity = ({activity}) => {

    // We add -1 kg to the minimum, and round the value up to the nearest integer for the maximum
    const [dataMinKg, dataMaxKg] = activity.reduce((acc, {kilogram}) => {
        acc[0] = Math.min(acc[0], kilogram - 1);
        acc[1] = Math.ceil(Math.max(acc[1], kilogram));
        return acc;
    }, [Infinity, -Infinity]);

    // We add +20 to the maximum
    const dataMaxKcal = activity.reduce((acc, {calories}) => {
        acc = Math.max(acc, calories);
        return acc;
    }, [0]) + 20;

    return (
        <article className={styles.userActivity}>
        <ResponsiveContainer width="100%" height={220} className={styles.barChart}>
            <h2>Activité quotidienne</h2>
            <BarChart data={activity} barSize={7} barGap={8}>
                <XAxis tickLine={false} tickMargin={16} tick={<CustomAxisTick/>} axisLine={{stroke: '#DEDEDE'}}/>
                <YAxis hide="true" yAxisId="left" orientation="left" type="number" domain={[0, dataMaxKcal]}/>
                <YAxis yAxisId="right" orientation="right" type="number" domain={[dataMinKg, dataMaxKg]} tickCount={3}
                       axisLine={false} tickLine={false} tickMargin={44} tick={<CustomAxisTick/>}/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend verticalAlign="top" align="right" height={48} content={renderLegend}/>
                <ReferenceLine y={dataMaxKg - (dataMaxKg - dataMinKg) / 2} yAxisId="right" strokeDasharray="3 3"/>
                <ReferenceLine y={dataMaxKg} yAxisId="right" strokeDasharray="3 3"/>
                <Bar yAxisId="right" dataKey={'kilogram'} fill={'#282D30'} radius={[3.5, 3.5, 0, 0]}/>
                <Bar yAxisId="left" dataKey={'calories'} fill={'#E60000'} radius={[3.5, 3.5, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
        </article>
    );
}

export default UserActivity;
