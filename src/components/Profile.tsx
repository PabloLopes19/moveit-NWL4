import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <div>
                <img src="https://github.com/PabloLopes19.png" alt="ProfilePic"/>
            </div>
            <div>
                <strong>Pablo Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="levelIcon"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}