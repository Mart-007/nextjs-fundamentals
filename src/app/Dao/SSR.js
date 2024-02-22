//Dynamic Data Fetching or Server-Side Rendering
//This request should be re-fetched on every request

export const fetchData  = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    { cache: 'no-store'}
    )
    const data = await res.json()
    return data
}

export const fetchSpeakers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json", 
      { cache: 'no-store'}
    );
  
    const data = await response.json();
    return data;
  }

  export const fetchSessions = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
      { cache: "no-store" }
    );
  
    const data = await response.json();
    return data;
  }