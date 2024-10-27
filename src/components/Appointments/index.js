import React from 'react';
import {v4 as uuidv4} from 'uuid'
import { Component } from 'react';
import './index.css';
import AppointmentItem from '../AppointmentItem';
class  Appointments extends Component {
    state={title:"",date:"",lists:[]}
    setTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    setDate=(event)=>{
        this.setState({date:event.target.value})
    }
    setAppointment=(event)=>{
        event.preventDefault();
        const{title,date,lists}=this.state
        const initialList={
            title,
            date,
            id: uuidv4(),
            isStarred:false
        }
        if(title && date)
        {
            this.setState({lists:[...lists,initialList],title:"",date:""})
        }
    }
    setStarred=id=>{
        this.setState(prevstate=>({lists:prevstate.lists.map(item=>item.id===id?item={...item,isStarred:!item.isStarred}:item)}))
    }
    Starred=()=>{
        const{lists}=this.state
        this.setState({lists:lists.filter(item=>item.isStarred===true)})

    }
    render(){
        const{title,date,lists}=this.state
        
    return (
        <div className="appointment-container">
            <div className="form-container">
            
                <form onSubmit={this.setAppointment}>
                <h1 className="heading">Add Appointment</h1>
                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="A.I M.L Session"
                            value={title}
                            onChange={this.setTitle}
                            
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={this.setDate}
                           
                        />
                    </div>
                    <button type="submit" className="add-button" >Add</button>
                </form>
                <div className="image-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                    alt="Appointments"
                    className="appointment-image"
                />
                </div>
            </div>
           
            <div className='ap'>
                <div className='head'>
                    <h3>Appointed</h3>
                    <button className='add-button' onClick={this.Starred}>Starred</button>
                </div>
                <ul>
                    {lists.map(item=><AppointmentItem details={item} key={item.id} setStarred={this.setStarred} />)}
                </ul>
            </div>
        </div>
    );
}
}

export default Appointments;
