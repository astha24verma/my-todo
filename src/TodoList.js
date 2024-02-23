import React, { useState, useEffect } from 'react'

function TodoList() {
    const [task, setTask] = useState('');

    // Fetch from local storage
    const [listData, setListData] = useState(() => {
        return JSON.parse(localStorage.getItem('listData')) || []
    })

    // Fetch from local storage - not working
    // useEffect(() => {
    //     const listData = JSON.parse(localStorage.getItem('listData')) || []
    //     setListData(listData)
    // }, [])

    function addTask() {
        if (task.length === 0) return;  // if task is empty, return 
        setListData((listData) => {
            const updatedListData = [...listData, task]
            setTask("")
            console.log("updated : " + updatedListData)
            return updatedListData  // return updated listData
        })
    }

    console.log(listData);

    function removeTask(i) {
        const updatedListDataAfterRemoving = listData.filter((elem, id) => {
            return i !== id
        })
        setListData(updatedListDataAfterRemoving)
    }

    function removeAllTask() {
        setListData([])
    }

    // Add to local storage
    useEffect(() => {
        localStorage.setItem('listData', JSON.stringify(listData))
    }, [listData])

    console.log("Added to local storage ")

    return (
        <>
            <header className="head">TO DO List</header>
            <input type='text' placeholder='Add your task' value={task} onChange={event => setTask(event.target.value)} />
            <button onClick={addTask}>Add</button>
            <div className='space'></div>

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
