import Link from 'next/link'
import styles from '../../rootStyle.module.css'
import { fetchSessions } from '../../Dao/SSR'

export default async function Page() {
  const data = await fetchSessions()
    return (
      <>
        <h1>This is session page.</h1>
        <Link href='/conference'>Back</Link>
        <div>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name }) => (
                <h3 className={styles.titleText}>Speaker: {name}</h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        )
      )}
      </>
     
    );
  }
  