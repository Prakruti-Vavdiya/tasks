import './App.css';
import { Component } from 'react';
import SidePanel from './components/sidepanel';
import Table from './components/table'; 
import FormInput from './UI/FormInput';
import Modal from 'react-modal';

class App extends Component{
  state={
    sidebarOpen: false,
    showModal:false,
    Details:[],
    NewRecord:{},
    EditRecord:{}
  }

  onSetSidebarOpen=(sidebarState)=>{
    this.setState({ sidebarOpen: sidebarState });
  }

  onPressEditRecord=(user,i)=>{
    let tempRecord={...user};
    tempRecord['index']=i;
    this.setState({EditRecord:tempRecord});

  }

  handleSidebarChange=(event)=>{

    let tempRecord ={...this.state.EditRecord};
    tempRecord[event.target.name]=event.target.value;
    this.setState({EditRecord:tempRecord})

  }

  editRecord=(event)=>{
    event.preventDefault();
    //change state and close sidebar
    let userName=this.state.EditRecord.name;
    let userAge=this.state.EditRecord.age;
    let editRecord={name:userName, age:userAge};
    if(userName && userName!=='' && userAge && userAge>='0')
    {
      let index=this.state.EditRecord.index;
      let userRecords=[...this.state.Details];
      userRecords[index]=editRecord;
      this.setState({Details:userRecords});
      this.onSetSidebarOpen(false);
  
    }
    else
      alert('Please enter vaild input');
  }


  openModal=()=>{
    this.setState({showModal:true});
  }

  handleModalChange=(event)=>{
    let newRecord ={...this.state.NewRecord};
    newRecord[event.target.name]=event.target.value;
    this.setState({NewRecord:newRecord})
  }

  addRecord=(event)=>{
    event.preventDefault();
    //set state and close modal
    let newRecord={...this.state.NewRecord};

    let userName=newRecord.name;
    let userAge=newRecord.age;
    if(userName && userName!=='' && userAge && userAge>='0')
    {
      let userRecords=[...this.state.Details];
    userRecords.push(newRecord);
    this.setState({showModal:false,Details:userRecords});
    }
    else
      alert('Please enter vaild input');

    
  }

  
  deleteRecord=(index)=>{
    if( window.confirm('Are you sure?') )
    {
      let userRecords=[...this.state.Details];
      userRecords.splice(index,1);
      this.setState({Details:userRecords});
    }
    
  }

  render(){

    let mymodal=(
      <Modal 
                  isOpen={this.state.showModal}
                  contentLabel="Modal"
                  ariaHideApp={false}
              >
                  <form>
                  <FormInput type="text"
                            placeholder="Enter your name...."
                            name="name"
                            label="Name:"
                            onChange={(event)=>this.handleModalChange(event)}/>
                  <FormInput type="number"
                                placeholder="Enter your age...."
                                name="age"
                                label="Age"
                                onChange={(event)=>this.handleModalChange(event)}/>
                  <button className='Submit' onClick={this.addRecord}>Confirm</button>
                  </form>
                  
              </Modal>

  );

    const content=(
      <div>
        {mymodal}
        <h1 style={{marginTop:'50px'}}>User Details</h1>
        <Table 
          onAddMore={this.openModal} 
          Details={this.state.Details} 
          onSetSidebarOpen={this.onSetSidebarOpen} 
          onPressEditRecord={this.onPressEditRecord}
          deleteRecord={this.deleteRecord} />
      </div>
           
    );

    return (
      <div className="App">
        <SidePanel 
          sidebarOpen={this.state.sidebarOpen} 
          onSetSidebarOpen={this.onSetSidebarOpen} 
          content={content} 
          recordToEdit={this.state.EditRecord} 
          handleSidebarChange={this.handleSidebarChange} 
          onConfirm={this.editRecord}></SidePanel>
        
      </div>
    );
  }
}

export default App;
