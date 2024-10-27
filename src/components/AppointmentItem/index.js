import { Component } from "react";
import './index.css'
class AppointmentItem extends Component{
    render(){
        const {details,setStarred}=this.props
        const{title,date,isStarred,id}=details
        const imageUrl=isStarred?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
        return(
            <div className="item">
                <div className="title">
                    <p>{title}</p>
                    <img src={imageUrl} onClick={()=>{setStarred(id)}}/>
                </div>
               
                <p>{date}</p>
            </div>
        )
    }
}
export default AppointmentItem