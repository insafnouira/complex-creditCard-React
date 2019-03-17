import React, { Component } from 'react';
import './form.css'
 class Form extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             keyword:'',
             keyword1:'',
             keyword2:''
          }
        }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.tapeNumber(event.target.value)
     }
     handelchange2=(event)=>{
        this.setState({keyword1:event.target.value})
        this.props.tapeName(event.target.value)
    }
    handelchange3=(event)=>{
        this.setState({keyword2:event.target.value})
        this.props.tapeValidThru(event.target.value)
    }

     render() { 
         return ( 
             <div className='form'>
              <input type='text' onChange={this.handelchange} maxLength='16'/>
              <input type='text' onChange={this.handelchange2} maxLength='20' />
              <input type='text' onChange={this.handelchange3} maxLength='4'/>
              
             </div>
           
          );
     }
 }
  
 export default Form;