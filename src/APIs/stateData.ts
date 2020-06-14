import { fetchData } from './test'
interface StateValues {
    state: string
    lastUpdate: string
    positive: number
    negative: number
    death: number
    recovered: number
    total: number
    deathIncrease: number
    fips?: string | number
}

export const stateData = async (name: string) => {
    try{
        const url: string = `https://covidtracking.com/api/states?state=${name.toLocaleLowerCase()}`
        const states: any = await fetchData(url)
        //console.log(states)
        return states

    }   
    catch(error){
        console.log('this is the error:', error.message)
    }
}

//test the function call with console print
//stateData("NY")