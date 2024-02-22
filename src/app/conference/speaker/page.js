import Link from 'next/link'
import styles from '../../rootStyle.module.css'

export default function Page() {
    return (
      <>
        <h1 >This is speaker page.</h1>
        <Link href='/conference'>Back</Link>
      </>
     
    );
  }
  