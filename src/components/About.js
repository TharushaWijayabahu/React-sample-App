import React, { Component } from 'react';
import NavBar from './navBar'


function currentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}


class About extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <h1 className="text-center">Tutorial Library</h1>
                    <h5 className="text-center">{currentDate()}</h5>
                    <NavBar />

                    <div className="container">
                        <h1 className='text-center'>About</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;