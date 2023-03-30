import React, { Component } from 'react'
import Addusers from './components/addusers'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class App extends Component {
  state={
   firstname:'',
   lastname:'',
   adress:'',
   age:'',
   search:'',
    users:[
      {id:0, firstname:'Shahnoza',lastname:'Qarshiboyeva',adress:'Jizzax',age:'18'}
],}
  addUser=()=>{
   const {users,firstname,lastname,adress,age}=this.state
   users.push({firstname:firstname,lastname:lastname,adress:adress,age:age})
  this.setState({
    users,
  })
  }
  deleteUser=(index)=>{
    console.log(index)
    const {users}=this.state
    users.splice(index,1)
    this.setState({
      users
    })

  }
   
render() {
    const {users,search}=this.state
    const {addUser,deleteUser}=this
    return (
      <div className='card col-md-6 offset-3 mt-3'>
      <div className="card-header"><h1 className='text-center'>Add Users</h1></div>
         <div className="card-body">
                <form id='xzn'>
                        <input type="text" className='form-control my-2' onChange={(e)=>this.setState({firstname:e.target.value})} placeholder='First Name...' />
                        <input type="text" className='form-control my-2' onChange={(e)=>this.setState({lastname:e.target.value})} placeholder='Last Name...' />
                        <input type="text" className='form-control my-2' onChange={(e)=>this.setState({adress:e.target.value})} placeholder='Adress...' />
                        <input type="number" className='form-control my-2' onChange={(e)=>this.setState({age:e.target.value})} placeholder='Age...' />
                    </form>
                </div>
                <div className="row">
                <div className="col-md-6 offset-3 mt-3">
                    <input type="text" onChange={(e)=>this.setState({search:e.target.value})} className='form-control my-2'placeholder='Search...' />
                </div>
            </div>
      <Addusers deleteUser11={deleteUser} search={search} onAddUser={addUser} users={users}/>
        </div> 
  
    )
  }
}

