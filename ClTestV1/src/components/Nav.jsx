import React, { useRef, useState } from 'react'
import { Box, Button, Stack, Tab } from '@mui/material'
import { TabContext } from '@mui/lab'
import { TabList } from '@mui/lab'
import { TabPanel } from '@mui/lab'
import Active from './Active';
import Completed from './Completed';

const Nav = (props) => {
    const { data, setData } = props
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const addBtChangeHandle = () => {
        const newData = [...data]
        newData.push({
            name: inputValue
        })
        setData(newData)
        setInputValue('')
        inputRef.current.focus()
    }
    const linethroughBtChangHandle = (index) => {
        const newData = [...data]
        const newNewData = newData.map((v, _index) => {
            if (index === _index) {
                v.active = !v.active
                return v
            } else {
                return v
            }
        })
        setData([...newNewData])
    }
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value} variant="fullWidth">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All" value="1" />
                        <Tab label="Active" value="2" />
                        <Tab label="Completed" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Stack direction='row' spacing={2}>
                        <input type="text" placeholder='add details' value={inputValue} ref={inputRef} onChange={e => setInputValue(e.target.value)} style={{ borderRadius: '5px', padding: '5px' }} />
                        <Button variant="contained" disableElevation onClick={addBtChangeHandle} >
                            ADD
                        </Button>
                    </Stack>
                    <ul style={{ listStyle: 'none' }}>
                        {data.map((todo, index) => {
                            return (
                                <li key={index} style={{ textAlign: 'justify' }}>
                                    <input type="checkbox" onClick={() => linethroughBtChangHandle(index)} />
                                    <span style={{ textDecoration: todo.active ? "line-through" : "" }}>{todo.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </TabPanel>
                <TabPanel value="2">
                    <Active />
                </TabPanel>
                <TabPanel value="3">
                    <Completed />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default Nav