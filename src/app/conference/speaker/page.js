import Link from 'next/link'
import styles from '../../rootStyle.module.css'
import { fetchSpeakers } from '../../Dao/SSR'

export default async function Page() {
  const data = await fetchSpeakers()
  // console.log('data:', data.speakers[1])
    return (
      <>
        <h1 className={styles.childHeader}>This is speaker page.</h1>
        <Link href='/conference'>Back</Link>
        <div>
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        {data.speakers.map(({id, name, bio}) => (
          <div key={id} className={styles.infoContainer}>
            <Link href={`/conference/speaker/${name}`}>
              <h3 className={styles.titleText}>{name}</h3>
            </Link>
            <h5 className={styles.titleBio}>{bio}</h5>
          </div>
        ))}
      </>
    );
  }
  