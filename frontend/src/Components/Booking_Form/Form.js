import React, { Component } from 'react';

const Style = {
    "border": "3px solid black",
    "padding": "20px",
    "borderRadius": "20px"
}
class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            department: '',
            doctor: '',
            symtoms: '',
            DisplayOther: false

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

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Details are as Follows : ${this.state.name} , ${this.state.phone} , ${this.state.doctor}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container-fluid w-75 my-3" style={Style}>
                <h2>Hospital Appointment Form</h2>
                <div>
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
                </div>
                <div>
                    <label className="form-label">Date:</label>
                    <input type="date" name="date" className="form-control" placeholder="Enter Patient Name" value={this.state.date} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label className="form-label">Time:</label>
                    <input type="time" name="time" className="form-control" placeholder="Enter Patient Name" value={this.state.time} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label className="form-label">Department:</label>
                    <select name="department" className="form-control" value={this.state.department} onChange={this.handleInputChange}>
                        <option value="">Select department</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pulmonology">Pulmonology</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Doctor:</label>
                    <select name="doctor" className="form-control" value={this.state.doctor} onChange={this.handleInputChange}>
                        <option value="">Select doctor</option>
                        <option value="Dr.Rk Sharma">Dr. Rk Sharma</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Symtoms:</label>
                    {!(this.state.DisplayOther) && (<select name="symtoms" className="form-control" value={this.state.department} onChange={this.handleInputChange}>

                        <option value="cold_flu">Cold / Flu</option>
                        <option value="others">Others</option>
                    </select>)}
                    {this.state.DisplayOther && (<input type="text" name="symtoms" id="symtoms" className="form-control my-2" placeholder="Enter Symptoms" value={this.state.symtoms} onChange={this.handleInputChange} />)}
                </div>
                <button type="submit" className="btn-primary my-3">Submit</button>
            </form>
        );
    }
}

export default AppointmentForm;
