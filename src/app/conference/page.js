import Link from 'next/link'

export default function Page() {
    return (
      <>
        <h1>This is conference page.</h1>
        <Link href='conference/speaker'>view speaker</Link>
        <br/>
        <Link href='conference/session'>view session</Link>
        <br/>
        <Link href='/'>home</Link>
      </>
    );
  }
  