import { Button, Stack } from '@mui/material'
import React, { useRef, useState } from 'react'

const Active = () => {
    const getStorage = JSON.parse(localStorage.getItem('todoList'))
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState(getStorage ?? [])
    const inputRef = useRef(null)
    const addBtChangeHandle1 = () => {
        setTodoList(prev => {
            const newTodoList = [...prev, input]
            const setStorage = JSON.stringify(newTodoList)
            localStorage.setItem('todoList', setStorage)
            return newTodoList
        })
        setInput('')
        inputRef.current.focus()
    }
    return (
        <>
            <Stack direction='row' spacing={2}>
                <input type="text" placeholder='add details' value={input} ref={inputRef} onChange={e => setInput(e.target.value)} style={{ borderRadius: '5px' }} />
                <Button variant="contained" disableElevation onClick={addBtChangeHandle1}>
                    ADD
                </Button>
            </Stack>
            <ul style={{ listStyle: 'none', textAlign: 'justify' }}>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        <span>
                            {todo}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Active