import {Component} from 'react';
import ReactSelect from '../components/reactSelect';
import DropZone from '../components/dropZone';
class Input extends Component{
    state={
        select:'user1'
    }
    handleSelectChange=(val)=>{
        this.setState({select:val.value});
        
    }
    handleDropZoneChange=(val)=>{
        console.log(val)
    }
    render(){
        let options=[
            { value: 'other', label: 'Select user' },
            { value: 'admin', label: 'admin' },
            { value: 'user1', label: 'user1' },
            { value: 'user2', label: 'user2' },
            { value: 'user3', label: 'user3' },
        ];
        return(
            <div style={{width:'70%',margin:'40px auto'}}>
            <h1>File Upload</h1>
            <ReactSelect
                defaultValue={options[0]}
                isMulti={false}
                isDisabled={false}
                isLoading={false}
                isClearable={false} 
                isRtl={false}
                isSearchable={true}
                options={options}
                onChange={(val)=>this.handleSelectChange(val)}
            />
            <DropZone change={this.handleDropZoneChange}/>
            </div>
        );

    }
}
export default Input;