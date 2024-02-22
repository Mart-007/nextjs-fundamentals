//Revalidating Data or Incremental Static Regeneration
//This request is cached witha lifetime of 15 seconds

export const fetchData  = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    { next: { revalidate: 15 }}
    )
    const data = await res.json()
    return data
}   

export const fetchSpeakers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json", 
      { next: { revalidate: 20 } }
    );
  
    const data = await response.json();
    return data;
  }