import React from 'react'

import './table.css'
import { getDatabase,ref,get,child } from 'firebase/database'



const Users = ({bodyData,renderHead,renderBody}) => {
    
    //console.log(bodyData)
    const [users,setUsers] = React.useState([])
    React.useEffect(()=>{
        let databaseWorkers = []
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(doc => {
                    //setWorkers(id:doc.key,body:doc.val())
                    //console.log(doc.key, ':', doc.val())
                    let child = doc.val()
                    let entries = {
                        id:doc.key,
                        firstName:child.firstName,
                        lastName:child.lastName,
                        email:child.email,
                        phone:child.phone,
                        
                    }
                    databaseWorkers.push(entries)
                })

                setUsers(databaseWorkers)
               
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    },[])

    const renderData = (data)=>{
        return data.map((items)=>{
            //str.split("_").pop()
            return(
                <tr key={items.id}>
                <td>{items.firstName}</td>
                <td>{items.lastName}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                
            </tr>
            )
        })
    }
    
    return(
        <div>
            <table>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>phone</th>
                    
                </tr>
                {
                    renderData(users)
                }
            </table>
        </div>
    )
}

export default Users;