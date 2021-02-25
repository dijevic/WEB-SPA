 export const getUsers  = async()=>{

    
        let url = `https://jsonplaceholder.typicode.com/users`;
        let resp = await fetch(url)
        let data = await resp.json()
        return data
    
 }