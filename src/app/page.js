import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div p-20>My first Next App!</div>
      <h3>
        <Link href='/settings'>Settings</Link>
      </h3>
      <h3>
        <Link href='/blog' prefetch={false}>Blog</Link>
      </h3>
      <h3>
        <Link href='/conference'>Conference</Link>
      </h3>
    </>
   
  );
}
