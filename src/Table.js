import React from 'react';
import db from './firebase';
import {useState} from 'react'
import {addDoc,collection} from 'firebase/firestore';

function Table(props) {
    const[store,setstore]=useState([])
    useEffect(()=>{
        const getdata=async()=>{
            const querySnapshot = await getDocs(collection(db, "firedb"));
            let totaldata=[];
            querySnapshot.forEach((doc) => {
            totaldata.push(doc.data());
            });
            setstore(totaldata);
        };
        
        getdata();
       
    },[])
    return (
        <div>
            <table>
  <tr>
    <th>First Name <br></br>(Company)</th>
    <th>Last Name</th>
    <th>address2</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
  {store.map(k=>(
  <tr>
    
    
<td>{k.Firstname+k.Company}</td>
   <td>{k.Lastname}</td>
    <td>{k.Address+k.City+k.State}</td>
    <td></td>  
  </tr>
  ))}
  </table>
 
        </div>
    );
}

export default Table;