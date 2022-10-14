import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../config';
import AuthHoc from '../../AuthHoc';
const ViewClient = () => {
    const [client,setClient] = useState([]);
    useEffect(()=>{
        axios.get(`${config.apiURL}/clients`,{
         headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
        .then((data)=>{
            console.log(data);
            setClient(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='table-responsive mt-3'>
      <table className="table table-hover table-lg" style={{backgroundColor:"#dab3ff"}}>
  <thead>
    <tr>
      <th scope="col">Company Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone No</th>
      <th scope="col">Business Category</th>
    </tr>
  </thead>
  <tbody>
  {
    client.map((item)=>{
        return(
    <tr key={item._id}>
      <th scope="row">{item.companyName.charAt(0).toUpperCase() + item.companyName.slice(1)}</th>
      <td>{item.email}</td>
      <td>{item.mob}</td>
      <td>{item.businessCategory.charAt(0).toUpperCase() + item.businessCategory.slice(1)}</td>
    </tr>
        )
    })
  }
 
  </tbody>
</table>
    </div>
  )
}

export default AuthHoc(ViewClient);
