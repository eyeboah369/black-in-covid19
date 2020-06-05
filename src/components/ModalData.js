import React from 'react'
import { stateData } from '../APIs/stateData'

let grabData = []
grabData = stateData()
function getData(name){
    for(var i = 0; i < grabData.length; i++){
        if(name == grabData[i].name){
            return grabData[i]
        }
    }
}
function ModalData(props){
        return(
            <div>
                hey
            {getData(props.name)}
            </div>
        )
    }



export default ModalData