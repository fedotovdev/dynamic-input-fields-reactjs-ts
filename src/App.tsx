import { ChangeEvent, FC, useState } from 'react'

const App: FC = () => {
    const [inputList, setInputList] = useState<string[]>([''])

    const addInput = () => setInputList([...inputList, ''])

    const removeInput = (index: number) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const list = [...inputList]
        list[index] = event.target.value
        setInputList(list)
    }

    return (
        <div>
            {inputList.map((input, index) => (
                <div key={index}>
                    <input value={input} onChange={(event) => handleChange(event, index)} type='text' placeholder='Enter value: ' />
                    <button onClick={addInput}>+</button>
                    {inputList.length > 1 ? <button onClick={() => removeInput(index)}>-</button> : null}
                </div>
            ))}
        </div>
    )
}

export default App
