import React from 'react'

import './table.css'
import { getDatabase,ref,get,child } from 'firebase/database'



const Workers = ({bodyData,renderHead,renderBody}) => {
    
    //console.log(bodyData)
    const [workers,setWorkers] = React.useState([])
    React.useEffect(()=>{
        let databaseWorkers = []
        const dbRef = ref(getDatabase());
        get(child(dbRef, `workers`)).then((snapshot) => {
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
                        imageUrl:child.imageUrl
                    }
                    databaseWorkers.push(entries)
                })

                setWorkers(databaseWorkers)
               
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
                <td>{items.imageUrl.slice(0,30)}...</td>
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
                    <th>image url</th>
                </tr>
                {
                    renderData(workers)
                }
            </table>
        </div>
    )
}

export default Workers;