import Link from 'next/link'

export default function Page() {
    return (
      <>
        <h1>This is conference page.</h1>
        <h4><Link href='conference/speaker'>Speaker</Link></h4>
        <h4><Link href='conference/session'>Session</Link></h4>
        <h4><Link href='/'>Back</Link></h4>
      </>
     
    );
  }
  