import React from 'react'

export default function List() {
    const college=[{id:1, stuName:"sachin",age:26},
                   {id:2,stuName:"Soundharya",age:20},]
    
                   const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
                   return (
                    <div style={{backgroundColor:"purple"}}>
                        <h1>List of Students</h1>
                        {display}
                    </div>
                   )
}