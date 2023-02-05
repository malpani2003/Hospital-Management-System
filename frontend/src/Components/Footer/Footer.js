import React from "react";
import { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark mt-5 footer text-white">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus officia ad culpa illum deleniti nemo quod cum maiores non officiis asperiores, quia error, facilis exercitationem, hic numquam perferendis neque repudiandae cumque saepe pariatur fuga optio. Eos itaque beatae omnis, rem distinctio in inventore tempore deleniti.
                    </div>
                    <div className="col-md-3">
                        <h3>Links</h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus officia ad culpa illum deleniti nemo quod cum maiores
                    </div>
                    <div className="col-md-3">
                        <h3>Links</h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus officia ad culpa illum deleniti nemo quod cum maiores
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer