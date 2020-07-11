import React, {Component} from 'react'
import Card from './CardUI'
import Header from "../Components/Header";


import history from '../images/history.jpg';


class Home extends Component {
    render() {
        return(
          <div className="header">
           <br/><br/><br/>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card title="How to use NoFishfasaf ?"
                              text="Learn to use NoFish phishing detection service" btn="HELP"/>
                    </div>
                    <div className="col-md-4">
                        <Card title="History"
                              text="View history of detected phishing attacks" btn="History"/>
                    </div>
                    <div className="col-md-4">
                        <Card title="Feedback"
                              text="Give your valuable feedbacks for enhance of the service" btn="Feedback"/>
                    </div>
                </div>
            </div>
          </div>

        )
    }
}

export default Home