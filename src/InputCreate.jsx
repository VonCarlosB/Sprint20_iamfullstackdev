import { useRef, useState } from "react"

export default function InputCreate( {url} ) {
    const [inputValue, setInputValue] = useState('')
    const [res, setRes] = useState('Listo para enviar')
    const inputRef = useRef(null)
    const urlApi = url+'/create'
    
    const handleTaskCreation = async (e) => {
        e.preventDefault()
        if(inputValue !== ''){
            try {
                const response = await fetch( urlApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({title: inputValue})
                })
                if(response.ok){
                    const data = await response.json()
                    setRes(`Enviado: '${data.title}'`)
                    setInputValue('')
                }else{
                    throw new Error('No se ha podido crear la tarea')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <>
            <form onSubmit={(e) => handleTaskCreation(e)}>
                <input type="text" ref={inputRef} value={inputValue} placeholder="Input task title" onChange={() => setInputValue(inputRef.current.value)}/>
                <button type="submit" onClick={handleTaskCreation}>Crear tarea</button>
            </form>
            <h2>{res}</h2>
        </>
    )
}