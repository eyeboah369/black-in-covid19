let fetchApi = require("node-fetch")

async function wait(ms: number){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}

const url: string = ' ' 
export const fetchData = async (url: string) => {
    const result = await fetchApi(url)
    const data = await result.json()
    //console.log(data)
    return data
}

//test to check that the data beinf returned is valid
//fetchData(url)