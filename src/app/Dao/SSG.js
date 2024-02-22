//Static Data Fetching or Static Site Generation

export const fetchData  = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    return data
}

// Static data fetching
export const fetchSpeakers = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
    );
  
    const data = await response.json();
    return data;
  }