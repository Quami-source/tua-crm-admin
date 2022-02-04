import React from 'react';
import './add.css';
import {initializeApp,cert} from 'firebase/app'
import {getFirestore,} from 'firebase/firestore'
import { getDatabase, ref, set } from "firebase/database";
import {uid} from '../../constants/uid';

export default function AddMenu() {

    const [userFirstName,setUserFirstName] = React.useState('')
    const [userLastName,setUserLastName] = React.useState('')
    const [userEmail,setUserEmail] = React.useState('')
    const [userPhone,setUserPhone] = React.useState('')
    const [userId,setUserId] = React.useState(uid())

    const [workerFirstName,setWorkerFirstName] = React.useState('')
    const [workerLastName,setWorkerLastName] = React.useState('')
    const [workerEmail,setWorkerEmail] = React.useState('')
    const [workerPhone,setWorkerPhone] = React.useState('')
    const [workerImageUrl,setWorkerImageUrl] = React.useState('')
    const [workerService,setWorkerService] = React.useState('')

    //add users
    const addData = async() =>{
        const db = getDatabase();
        set(ref(db, 'users/'+ userId), {
            firstName: userFirstName,
            email: userEmail,
            lastName : userLastName,
            phone:userPhone 
        }).then(() => {
            alert("User added successfully")
        }).catch((e)=>{
            console.log(e)
            alert("Write to database failed")
        })
    }

    //add workers
    const addWorkers = async() =>{
        const db = getDatabase();
        set(ref(db, 'workers/'+ userId), {
            firstName: workerFirstName,
            lastName:workerLastName,
            email: userEmail,
            lastName : userLastName,
            phone:workerPhone,
            service:workerService,
            imageUrl:workerImageUrl
        }).then(() => {
            alert("Worker added successfully")
        }).catch((e)=>{
            console.log(e)
            alert("Write to database failed")
        })
    }
    
  return (
    <div>
        <h2 className='page-header'>Add User</h2>
      <form onSubmit={(e)=>{
          e.preventDefault()
          addData()
          }}>
        <div className="form-group">
            <div className='row' id='inputSpace'>
                <div className='col-6'>  
                    <input onChange={(e)=>{
                        e.preventDefault()
                        setUserFirstName(e.target.value)
                    }} required type="text" class="form-control" id="inputFirst" placeholder="First name"/>
                </div>
                <div className='col-6'>
                    <input onChange={(e)=>{
                        e.preventDefault()
                        setUserLastName(e.target.value)
                    }} type="text" className="form-control" id="inputLast"  placeholder="Last name"/>
                </div>
            </div>
            
        </div>
        <div className="form-group">
           
            <div id='inputSpace'>
                <input onChange={(e)=>{
                        e.preventDefault()
                        setUserEmail(e.target.value)
                    }} type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
            <div id='inputSpace'>
                <input onChange={(e)=>{
                        e.preventDefault()
                        setUserPhone(e.target.value)
                    }} type="number" required className="form-control" id="exampleInputPassword1" placeholder="Phone number"/>
            </div>
        </div>
        {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Save</button>
        </form>


        {/* second form */}
        <h2 id='headerMargin' className='page-header'>Add Worker</h2>
      <form onSubmit={(e)=>{
          e.preventDefault()
          addWorkers()
      }} >
        <div className="form-group">
            <div className='row' id='inputSpace'>
                <div className='col-6'>  
                    <input onChange={(e)=>{
                        e.preventDefault()
                        setWorkerFirstName(e.target.value)
                    }} required type="text" className="form-control" id="inputFirst" placeholder="First name"/>
                </div>
                <div className='col-6'>
                    <input onChange={(e)=>{
                        e.preventDefault()
                        setWorkerLastName(e.target.value)
                    }} type="text" className="form-control" id="inputLast"  placeholder="Last name"/>
                </div>
            </div>
            
        </div>
        <div className="form-group">
           
            <div id='inputSpace'>
                <input onChange={(e)=>{
                        e.preventDefault()
                        setWorkerEmail(e.target.value)
                    }} type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
           
            <div id='inputSpace'>
                <input onChange={(e)=>{
                        e.preventDefault()
                        setWorkerService(e.target.value)
                    }} type="text" required className="form-control" id="exampleInputEmail1" placeholder="Service"/>
            </div>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
            <div id='inputSpace'>
                <input onChange={(e)=>{
                        e.preventDefault()
                        setWorkerPhone(e.target.value)
                    }} type="number" required className="form-control" id="exampleInputPassword1" placeholder="Phone number"/>
            </div>
        </div>
        {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Save</button>
        </form>
    </div>
  )
}
