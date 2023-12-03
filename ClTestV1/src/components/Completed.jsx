import React, { useState } from 'react'
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { Button, Stack } from '@mui/material';
const data1 = [{
  name: 'Task done',
  active: true,
  id: '1'
},
{
  name: 'Task done',
  active: true,
  id: '2'
},
{
  name: 'Task done',
  active: true,
  id: '3'
}
]
const Completed = () => {
  const [data, setData] = useState(data1)
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
  const deleteBtClickHandler = (id) => {
    const newData = data.filter((todo) => {
      if (todo.id != id) {
        return true
      }
    })
    setData(newData)
    console.log(newData);
  }
  const CleanAllBt = () => {
    return setData([])
  }
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {data.map((todo, index) => {
          return (
            <li key={index} style={{ textAlign: 'justify' }}>
              <Stack direction='row' spacing={2}>
                <input type="checkbox" onClick={() => linethroughBtChangHandle(index)} />
                <Stack direction='row' spacing={10}>
                  <p style={{ textDecoration: !todo.active ? "line-through" : "" }}>{todo.name}</p>
                  <DeleteOutline onClick={() => (deleteBtClickHandler(todo.id))} />
                </Stack>
              </Stack>
            </li>
          )
        })}
      </ul >
      <Button variant="contained" disableElevation onClick={CleanAllBt} style={{ backgroundColor: '#D80032', fontSize: '10px', position: 'relative', left: '110px' }}>
        <DeleteOutline fontSize='small' />
        Delete all
      </Button>
    </>
  )
}

export default Completed