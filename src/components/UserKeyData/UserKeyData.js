import styles from './UserKeyData.module.scss';
import {ReactComponent as CaloriesIcon} from '../../assets/calories-icon.svg';
import {ReactComponent as CarbsIcon} from '../../assets/carbs-icon.svg';
import {ReactComponent as ProteinIcon} from '../../assets/protein-icon.svg';
import {ReactComponent as FatIcon} from '../../assets/fat-icon.svg';

const UserKeyData = ({data}) => {
    const displayedDataMap = new Map([
        ['calorieCount', {
            label: 'Calories',
            unit: 'kCal',
            icon: <CaloriesIcon className={styles.icon}/>
        }],
        ['carbohydrateCount', {
            label: 'Glucides',
            unit: 'g',
            icon: <CarbsIcon className={styles.icon}/>
        }],
        ['proteinCount', {
            label: 'Protéines',
            unit: 'g',
            icon: <ProteinIcon className={styles.icon}/>
        }],
        ['lipidCount', {
            label: 'Lipides',
            unit: 'g',
            icon: <FatIcon className={styles.icon}/>
        }]
    ]);

    return (
        <div className={styles.userKeyData}>
            {Object.entries(data).map(([key, value]) => {
                const {label, unit, icon} = displayedDataMap.get(key);

                return (
                    <article key={key} className={styles.dataContainer}>
                        {icon}
                        <div className={styles.textContainer}>
                            <p className={styles.value}>{value}{unit}</p>
                            <p className={styles.label}>{label}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    )
};

export default UserKeyData;
