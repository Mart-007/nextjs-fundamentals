import Link from 'next/link'
import Image from 'next/image'
import OurStoryImg from '../images/our-story-image-1.jpg'
import styles from '../rootStyle.module.css'

export default function Page() {
    return (
      <>
       <Image 
            src={OurStoryImg}
            alt='Our Story Image'
            placeholder='blur'
            quality={100}
            width={300}
            height={300}
        />
        <div className={styles.childHeader}>This is blog page.</div>
        <Link href='/'>Back</Link>
      </>
    );
  }
  