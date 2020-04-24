import React,{Component} from 'react';
import './App.css';
import Table from './components/Table'
import Api from './utils/api.js'
import Search from './components/Search'
import api from './utils/api.js';

class App extends Component {
state = {
  employeeList: [],
  originalList:[],
  search:""
}

handleInputChange=event=>{
      const{name,value} = event.target
      this.setState({
        [name]:value  //search: "phil"
      })
      console.log('value', value)
}

componentDidMount(){
   Api.getRandomPeople().then(results=>{
     console.log("hello", results)
     this.setState({
       employeeList:results.data.results,
       originalList:results.data.results
     })
   })
}

  render(){
    return (
      <div className="App">
        <Search   search= {this.state.search}  handleInputChange={this.handleInputChange} />
        <Table employeeList={this.state.employeeList} />
      </div>
    );
  }
  
}

export default App;
