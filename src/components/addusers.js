import React, { Component } from 'react'

export default class  extends Component {
  render() {
    const{search,users,onAddUser,deleteUser11}=this.props
    return (
      <div className='container'>
      <div className='card-footer'><button form='xzn'  type="reset" className='btn btn-primary' onClick={onAddUser}>Adduser</button></div>
            <div className="card-body">
                <table  className='table table-bordered table-hover table-striped mt-2'>
                    <thead>
                        <tr>
                            <th>T/r</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Adress</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                  users.filter((item)=>{
                    if(item.firstname === search){
                      return item
                    }else if(item.lastname.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                      return item
                    }
                  }).map((item,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.adress}</td>
                            <td>{item.age}</td>
                       <td><button className='btn btn-danger'onClick={deleteUser11}>Delete</button></td>
                        </tr>
                        })
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>

    )
  }
}
