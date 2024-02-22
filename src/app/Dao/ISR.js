//Revalidating Data or Incremental Static Regeneration
//This request is cached witha lifetime of 15 seconds

export const fetchData  = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    { next: { revalidate: 15 }}
    )
    const data = await res.json()
    return data
}   