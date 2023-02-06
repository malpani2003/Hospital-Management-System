import React, { Component } from 'react'
import "./Slider.css"


let DoctorList = [
    {
        id: 1,
        Name: "xyz",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661326951.jpg",
        Department: "abc"
    },
    {
        id: 2,
        Name: "pqr",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661359438.jpg",
        Department: "abc"
    },
    {
        id: 3,
        Name: "qwerty",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661362617.jpg",
        Department: "abc"
    }
]
class SLider extends Component {
    constructor(props) {
        super(props)

        this.state = DoctorList[0]
    }
    // Binding Using Arrow function
    nextImage = () => {
        let Current=this.state.id;
        // console.log(Current,DoctorList[Current-1],DoctorList.indexOf({id:Current}));

        if(Current!=DoctorList.length){
            this.setState(DoctorList[Current])
        }
        else{
            this.setState(DoctorList[0])
        }

    }
    prevImage = () => {
        let Current=this.state.id;
        // console.log(Current,DoctorList[Current-2]);
        if(Current!=1){
            this.setState(DoctorList[Current-2])
        }
        else{
            this.setState(DoctorList[DoctorList.length-1])

        }

    }
    render() {
        return (
            <div className='Doctor_List'>
                <h2 className='text-center my-3'>Our Doctors</h2>
                <div className='card DoctorCard'>
                    <div className='card-body' key={this.state.id}>
                    <img src={this.state.Link}></img>
                    <h2>{this.state.Name}</h2>
                    <h5>{this.state.Department}</h5>
                    </div>
                    <div className='card-footer'>
                        <a href=''>Book Appointment</a>

                    </div>

                </div>
                <div className='btnGrp'>
                    <button className='btn btn-danger' onClick={this.nextImage}>Next</button>
                    <button className='btn btn-success' onClick={this.prevImage}>Pervious</button>
                </div>

            </div>
        )
    }
}

export default SLider