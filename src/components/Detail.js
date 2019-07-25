import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Detail extends Component {
    viewMethod =() =>{
        alert("Not implemented...!")
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <div class="card" width= '250px'>
                            <img class="card-img-top" src="" alt=""
                                width= '249px' height= '250px' />
                            <div class="card-body text-center">
                                <h4 class="card-title">Name</h4>

                                <div class="text-center">
                                    <p class="text-center"> Conducted by : </p>
                                </div>
                                <div class="text-center">
                                    <button id="update" class="btn btn-primary"
                                        onClick={this.viewMethod}>View More Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Detail;