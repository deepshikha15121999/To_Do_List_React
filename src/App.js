import './App.css'
import React,{useState} from 'react';

export default function Name(){

    const [first,setfirst]=useState("")
    const [second,setsecond]=useState([])
      
  return(
    <center>
    <div id='box'>
      <table>
    
    <input type='text' placeholder='enter name' onChange={(a)=>{
      setfirst(a.target.value)
    }}/>
     
    <button onClick={()=>{
      setsecond([...second,first])
    }}>click</button>

    {
    second.map((item,index)=>{
      return(
        <div>
      <h1 id='box1'>{item}</h1>

      <button id='del' onClick={()=>{
        let newlist=[...second]
        newlist.splice(index,1)
        setsecond(newlist)

      }}>DELETE</button>

      
        <button  id='edit'onClick={()=>{
        let array1=[...second]
        let newarray=prompt('enter name')
        if(newarray.trim().length>0){
          array1[index]=newarray
        }
        else{
          setsecond(array1)
        }
        array1[index]=newarray
        setsecond(array1)
      }}>EDIT</button>


      </div>
      )
    })
  }
    </table>
    </div>
    </center>
  )
} 

