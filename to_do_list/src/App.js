import React, {Component} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';


class App extends Component {

  state = {
    items:[],
    id:0,
    item:"",
    editItem: false,
    checked: []
  };

  handleChange = (e) => {
        this.setState({
          item:e.target.value
        });
  }
 
  

  handleSubmit = (e) => {
    e.preventDefault();
    if(document.getElementById("input").value)
    {
            const newItem = {
              id: this.state.id,
              title: this.state.item,
            

            };

            console.log(newItem);
            

             const updatedItems = [...this.state.items, newItem] 
              this.setState({
                items: updatedItems,
                item:'',
                id: Date.now(),
                editItem: false
              })

    }
    else{
      alert(' Enter a valid task');
    }

  };

  clearList = () => {
    this.setState({
      items :[]
    });
  };

  handleDelete = id => {
    const filterdItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterdItem
    });
  }

  handleEdit = id => {
    const filterdItem = this.state.items.filter(item => item.id !== id)
   
    const selectedItem = this.state.items.find(item => item.id === id)

    console.log(selectedItem);

    this.setState({
      items:filterdItem,
      item:selectedItem.title,
      editItem:true,
      id:id
    });
    
  }

  handleChecked = id => {

      let itemSelected = [...this.state.items]

      const i = itemSelected.findIndex(item => item.id === id)
      let checkedItem =[...this.state.checked]
      if(checkedItem[i]===true) checkedItem[i]=false;
      else if(checkedItem[i]===undefined || checkedItem[i]===false) checkedItem[i]=true;

     this.setState({
        checked:checkedItem
    });
    

    
    
  }
  render() {
    return (
      <div className="App">
        <ToDoForm
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit= {this.handleSubmit}
          editItem={this.state.editItem}/>
        <ToDoList 
          items={this.state.items} 
          checked={this.state.checked}
          clearList= {this.clearList}
          handleDelete = {this.handleDelete}
          handleEdit = {this.handleEdit}
          handleChecked = {this.handleChecked} />
      </div>
    );
  }
}
export default App;
