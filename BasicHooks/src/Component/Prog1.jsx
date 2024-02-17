import { useState } from "react";

function Prog1(){
const [currAge,setAge] = useState(19)

const handleChange = () => {
    setAge(currAge + 1)
}

    return(
        <div className="container">
<h3>My Current Age is {currAge}</h3>
<button onClick={handleChange}>Get Older</button>
        </div>
    )
}

export default Prog1