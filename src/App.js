import './App.css';
import {Component} from "react"


class App extends Component {
  
constructor (){
  super()
  this.state ={
    users:[],
    isLoading:true,
    search:''
  }
}

componentDidMount() {
   fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => this.setState({users:data,isLoading:false}));
}


 searchHandler =(e)=>{
  const searchString = e.target.value.toLocaleLowerCase()
    this.setState({search:searchString})
  
}
  render(){

                  if(this.state.isLoading){
                    return <h1 className='isLoading'>Loading...</h1>
                  }
  
                 const newValue = this.state.users.filter(user=>{
                    return user.name.toLocaleLowerCase().includes(this.state.search)
                  })


                  return(
                    <>
                    <div className='container'>
                    <h1 className='userList'>USER LIST</h1>
                    <input type="text" onChange={this.searchHandler} placeholder="Search here...">
                    </input>
                      <div className='card'>
                    {newValue.map((user) => (
                      <div className='list'>
                      <ul>
                      <li key={user.id}>Name : {user.name}</li>
                      <li >Email : {user.email}</li>
                      <li> UserId : {user.id}</li>         
                      </ul>
                      </div>
                      
                              ))}
                              </div>
                            
                            
                     
                      </div>

                  </>
                  )
                }

}

export default App;
