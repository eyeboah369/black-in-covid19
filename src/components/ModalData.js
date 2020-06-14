import React, { useState, useEffect } from 'react'
import { stateData } from '../APIs/stateData'



const ModalData = async (props) => {
    const [data, setData] = useState({})
    let grabData = await stateData(props.name)
    return <div>{grabData.hospitalizedCurrently}</div>
}
export default ModalData