import React, { Component } from 'react'
import "./Slider.css"


let PatientList = [
    {
        id: 1,
        Name: "Rahul Sharma",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661326951.jpg",
        Review: "I have found amazing result with the advance technique"
    },
    {
        id: 2,
        Name: "Naveen Purohit",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661359438.jpg",
        Review: "It was a great experience with Doctors . 5 years back I was so worried about my hair loss but now my problem is cured"
    },
    {
        id: 3,
        Name: "Jagdish Khanna",
        Link: "https://www.hiranandanihospital.org/public/our_doctors_images/1661359438.jpg",
        Review: "It was a great experience with Doctors . 5 years back I was so worried about my hair loss but now my problem is cured"
    }
]
class SLider extends Component {
    constructor(props) {
        super(props)

        this.state = PatientList[0]
    }
    // Binding Using Arrow function
    nextImage = () => {
        let Current=this.state.id;
        // console.log(Current,PatientList[Current-1],PatientList.indexOf({id:Current}));

        if(Current!=PatientList.length){
            this.setState(PatientList[Current])
        }
        else{
            this.setState(PatientList[0])
        }

    }
    prevImage = () => {
        let Current=this.state.id;
        // console.log(Current,PatientList[Current-2]);
        if(Current!=1){
            this.setState(PatientList[Current-2])
        }
        else{
            this.setState(PatientList[PatientList.length-1])

        }

    }
    render() {
        return (
            <div className='Doctor_List container mt-5'>
                <h2 className='text-center my-3'>Patient Reviews</h2>
                <div className='row'>
                    <div className='col-sm-2 d-flex align-items-center'>
                    <button className='btn btn-danger' onClick={this.nextImage}>Next</button>
                    </div>
                <div className='card DoctorCard col-auto'>
                    <div className='card-body' key={this.state.id}>
                    <img src={this.state.Link}></img>
                    <h2 className='my-2'>{this.state.Name}</h2>
                    <h6 className='fst-italic my-1'>{`" ${this.state.Review} "`}</h6>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.QOhwh1JLNOHV6U0URqQpAAHaCt&pid=Api&P=0'></img>
                    </div>
                    

                </div>
                <div className='col-sm-2 d-flex align-items-center offset-sm-1'>
                <button className='btn btn-success' onClick={this.prevImage}>Pervious</button>

                    </div>

                </div>
                {/* <div className='btnGrp'>
                    <button className='btn btn-danger' onClick={this.nextImage}>Next</button>
                    <button className='btn btn-success' onClick={this.prevImage}>Pervious</button>
                </div> */}

            </div>
        )
    }
}

export default SLider