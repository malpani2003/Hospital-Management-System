import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
const Style = {
    "border": "3px solid black",
    "padding": "20px",
    "borderRadius": "20px",
    "width": "70%"
}
class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            date: null,
            time: '',
            department: '',
            doctor: '',
            symtoms: '',
            DisplayOther: false,
            PersonalDetails: true,
            AppointmentSchedule: false,
        };
    }

    handleInputChange = (event) => {
        const { name, value, type } = event.target;

        this.setState({ [name]: value });
        if (name == "symtoms" && value == 'others') {
            this.setState({ DisplayOther: true, symtoms: ' ' });
        }
        else if (name == "symtoms" && type == "text") {
            this.setState({ [name]: value });

        }

    }
    handleDateChange = (event) => {
        console.log(moment(event).format('MMMM Do YYYY'))
        this.setState({ date: moment(event).format('MMMM Do YYYY') });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.PersonalDetails == true && this.state.AppointmentSchedule == false) {
            this.setState({ AppointmentSchedule: true, PersonalDetails: false })
        }
        if (this.state.PersonalDetails == false && this.state.AppointmentSchedule == true) {
            alert(`Details are as Follows : ${this.state.name} , ${this.state.phone} , ${this.state.doctor}`);
            // this.setState({AppointmentSchedule:true,PersonalDetails:false})
        }

    }


    render() {
        return (
            <form className="container-fluid my-3" style={Style}>
                <div className="text-center">
                    <h2>Need an appointment?</h2>
                    <p>Follow the simple steps below and get your appointment fixed online!</p>
                    <h4>{this.state.PersonalDetails ? "Enter Personal Details" : "Choose Slot and Doctor"}</h4>
                </div>
                <hr></hr>


                {this.state.PersonalDetails && (<><div>
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Patient Name" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                    <div>
                        <label className="form-label">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Patient Email Address" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label className="form-label">Phone:</label>
                        <input type="tel" name="phone" className="form-control" placeholder="Enter Patient Phone Number" value={this.state.phone} onChange={this.handleInputChange} />
                    </div></>)}
                {(this.state.AppointmentSchedule) && (<>
                    <div className='row'>
                        <div className='col-md-6'>

                            <label className="form-label">Appointment Date : <b>{this.state.date}</b></label>
                            {/* <p>Choosen Date : {this.state.date}</p> */}
                            <Calendar minDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())} maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())} onChange={this.handleDateChange}></Calendar>
                        </div>
                        {this.state.date != null ? (<div className='col-md-6'>
                            <label className="form-label">Time:</label>
                            <br></br>
                            <label className='form-check-label'><input type="radio" className='form-check-input' /> Morning Slot (8:00 A.M to 11:00 A.M)</label>
                            <label className='form-check-label'><input type="radio" className='form-check-input' /> Afternoon Slot (1:00 P.M to 4:00 P.M)</label>
                            <label className='form-check-label'><input type="radio" className='form-check-input' /> Night Slot (7:00 P.M to 10:00 P.M)</label>
                            {/* <input type="time" name="time" className="form-control" placeholder="Enter Patient Name" value={this.state.time} onChange={this.handleInputChange} /> */}
                        </div>
                        ) : "First Choose Date to able to Choose Time Slot"}

                    </div>
                    <div>
                        <label className="form-label my-1">Doctor:</label>
                        <select name="doctor" className="form-control" value={this.state.doctor} onChange={this.handleInputChange}>
                            <option value="">Select doctor</option>
                            <option value="Dr.Rk Sharma">Dr. R.K Sharma</option>
                            <option value="Dr.Rk Sharma">Dr. Naveen Purohit</option>
                            <option value="Dr.Rk Sharma">Dr. Jagdish Khanna</option>
                            <option value="Dr.Rk Sharma">Dr. Narayan Sharma</option>

                        </select>
                    </div>
                    <div>
                        <label className="form-label">Symtoms:</label>
                        {!(this.state.DisplayOther) && (<select name="symtoms" className="form-control" value={this.state.department} onChange={this.handleInputChange}>

                            <option value="cold_flu">Cold / Flu</option>
                            <option value="others">Others</option>
                        </select>)}
                        {this.state.DisplayOther && (<input type="text" name="symtoms" id="symtoms" className="form-control my-2" placeholder="Enter Symptoms" value={this.state.symtoms} onChange={this.handleInputChange} />)}
                    </div></>)}

                {/* <div>
                        <label className="form-label">Department:</label>
                        <select name="department" className="form-control" value={this.state.department} onChange={this.handleInputChange}>
                            <option value="">Select department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="pulmonology">Pulmonology</option>
                        </select>
                    </div> */}

                <button className="btn-primary my-3" onClick={this.handleSubmit}> {this.state.AppointmentSchedule ? "Book Appointment" : "Choose Appointment Time / Date"}</button>
            </form>
        );
    }
}

export default AppointmentForm;
