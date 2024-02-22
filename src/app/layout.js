import {Open_Sans} from '@next/font/google'
import Link from 'next/link'
import style from './rootStyle.module.css'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <header className={style.content}>
        <h1>This is home page.</h1>
        <section className={style.section}>
          <Link className={style.links} href='/settings'>Settings</Link>
          <Link className={style.links} href='/blog' >Blog</Link>
          <Link className={style.links} href='/conference'>Conference</Link>
        </section>
      </header>
      <body>{children}</body>
    </html>
  );
}
