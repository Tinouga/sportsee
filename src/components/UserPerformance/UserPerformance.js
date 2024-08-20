import styles from './UserPerformance.module.scss';
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

const UserPerformance = ({performance}) => {
    const kindLabelMap = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    };

    const reorderedData = [...performance.data].sort((a, b) => b.kind - a.kind);

    const CustomAngleTick = ({ payload, x, y, textAnchor }) => {
        const label = kindLabelMap[performance.kind[payload.value]] || payload.value;

        // Adjust the positions based on the label's place
        let adjustedX = x;
        let adjustedY = y;

        switch (label) {
            case 'Vitesse':
                adjustedY -= 5;
                adjustedX -= 10;
                break;
            case 'Force':
                adjustedY += 10;
                adjustedX -= 5;
                break;
            case 'Cardio':
                adjustedY -= 5;
                adjustedX += 5;
                break;
            case 'Energie':
                adjustedY += 10;
                adjustedX += 8;
                break;
            case 'Endurance':
                adjustedY += 10;
                break;
            default:
                break;
        }

        return (
            <text
                x={adjustedX}
                y={adjustedY}
                textAnchor={textAnchor}
                fill="#FFF"
                fontSize="0.75rem"
                fontWeight={500}
            >
                {label}
            </text>
        );
    };

    return (
    <article className={styles.userPerformance}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={reorderedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tick={<CustomAngleTick />} />
                <Radar dataKey={"value"}    stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    </article>
    );
};

export default UserPerformance;
