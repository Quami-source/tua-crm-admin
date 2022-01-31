import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

import { getDatabase,ref,get,child } from 'firebase/database'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
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
    return (
        <div>
            <div>
                <h2 className="page-header">Users</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
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
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Customers
