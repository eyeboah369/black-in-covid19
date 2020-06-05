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
let updatedStateData: StateValues[] = [];
let i: any;
export const stateData = async () => {
    try{
        let states1: any = await import('./states')
        let url: string = 'https://covidtracking.com/api/states/daily'
        let states: any = await fetchData(url).then((data: any) => {
        //console.log(data)
        updatedStateData = populateStates(states1.states, data) 
        return updatedStateData
        })
    }   
    catch(error){
        console.log('this is the error:', error.message)
    }
}

function populateStates(states1: any, APIdata: any){
    let j: number = 0;
    for(i = 0; i < APIdata.length; i++){
        if(states1[j] == APIdata[i].state){
            updatedStateData.push(APIdata[i])
            j++
        }
        else{
           continue
        }
    }
    //console.log("Length should be 55: ", updatedStateData.length)
    return updatedStateData
}

//test the function call with console print
//stateData()