import { useRef, useState } from "react"

export default function InputCreate( {url} ) {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const urlApi = url+'/create'
    
    const handleTaskCreation = () => {
        if(inputValue !== ''){
            fetch( urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title: inputValue})
            })
        }
        setInputValue('')
    }

    return(
        <>
            <input type="text" ref={inputRef} value={inputValue} placeholder="Input task title" onChange={() => setInputValue(inputRef.current.value)}/>
            <button onClick={handleTaskCreation}>Crear tarea</button>
        </>
    )
}