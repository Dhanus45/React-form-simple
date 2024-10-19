import { useState } from "react"

export default function Form(){
    const [name,nameChange]=useState("")

    function changedText(e){
        console.log(e.target.value)
    }
    return <div>
        <form >
            <input onChange={changedText(e)} type="text" value={name}/>
            </form>
            </div>
}