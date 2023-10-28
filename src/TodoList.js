import React, { useState } from 'react'

function TodoList() {
    const [task, setTask] = useState("")
    const [listData, setListData] = useState([])

    function addTask() {
        setListData((listData) => {
            const updatedListData = [...listData, task]
            setTask("")
            console.log(updatedListData)
            return updatedListData
        })
    }

    function removeTask(i) {
        const updatedListDataAfterRemoving = listData.filter((elem, id) => {
            return i != id
        })
        setListData(updatedListDataAfterRemoving)
    }

    function removeAllTask() {
        setListData([])
    }
    return (
        <>
            <header className="head">TO DO List</header>
            <input type='text' placeholder='Add your task' value={task} onChange={event => setTask(event.target.value)} />
            <button onClick={addTask}>Add</button>
            <br/>
            <br/>
            <br/>

            {listData != [] && listData.map((data, i) => {
                return (
                    <div>
                        <p key={i}>
                            <div className='listDataDisplay'>{data}</div>
                            <button id='removeBtn' onClick={() => removeTask(i)}>Delete</button>
                        </p>
                    </div>
                )
            })}

            {listData.length >= 1 &&
                <button id='removeAllBtn' onClick={removeAllTask}>Delete All</button>}
        </>
    )
}

export default TodoList
