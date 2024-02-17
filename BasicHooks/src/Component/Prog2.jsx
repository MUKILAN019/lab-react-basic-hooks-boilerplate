import { useState } from "react";

function Prog2(){

    const [currAge,setAge] = useState(19)
    const [sib,setSibAge] = useState(1)

    const ageChange = () => {
        setAge(currAge + 1)
    }

    const sibChange = () => {
        setSibAge(sib + 1)
    }

    return(
        <div  className="container">
            <h3>My Current Age is {currAge}</h3>
            <h4>My siblings {sib}</h4>

            <button onClick={ageChange}>Get Older</button>
            <button onClick={sibChange}>Get more Sib</button>

        </div>
    )
}
export default  Prog2