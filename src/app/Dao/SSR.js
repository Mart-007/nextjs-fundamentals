//Dynamic Data Fetching or Server-Side Rendering
//This request should be re-fetched on every request

export const fetchData  = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    { cache: 'no-store'}
    )
    const data = await res.json()
    return data
}