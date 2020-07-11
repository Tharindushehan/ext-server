import React, { Component } from 'react'
import axios from 'axios';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataObj: null
        }
    }


    componentDidMount() {

        let host = this.props.match.params.host
        axios.get(`https://endpoint.apivoid.com/sslinfo/v1/pay-as-you-go/?key=d58abc5be3bed02ea9c36833c7b2be60c4f01872&host=${host}`)
            .then(res => {
                this.setState({
                    dataObj: res.data.data
                })

                console.log(res.data.data.certificate)
            }).catch(err => {
                console.log(err)
            })

    }

    render() {
        if (this.state.dataObj) {
            return (

                <div>
                    <br /><br /><br />
                    <div className="container" >
                        <h1 className="text-center text-white">Details</h1>

                        <h4 className="text-center text-white">{this.props.match.params.host}</h4>

                        <div className="card text-center" style={{ width: '100%' }}>
                            <div className="card-header">
                                Certificate Details
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-dark">
                                    <tbody>
                                        <tr>
                                            <td>Certifiacate</td>
                                            <td>{this.state.dataObj.certificate.found ? 'Available' : 'Not Available'}</td>
                                        </tr>
                                        <tr>
                                            <td>Blacklisted</td>
                                            <td>{this.state.dataObj.certificate.blacklisted ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Deprecated Issuer</td>
                                            <td>{this.state.dataObj.certificate.deprecated_issuer ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Expired</td>
                                            <td>{this.state.dataObj.certificate.expired ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Valid</td>
                                            <td>{this.state.dataObj.certificate.valid ? 'Yes' : 'No'}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <br /><br />
                        <div className="card text-center" style={{ width: '100%' }}>
                            <div className="card-header">
                                Issuer Details
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-dark">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{this.state.dataObj.certificate.details.issuer.common_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Organizartion</td>
                                            <td>{this.state.dataObj.certificate.details.issuer.organization}</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>{this.state.dataObj.certificate.details.issuer.country}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <br /><br />
                        <div className="card text-center" style={{ width: '100%' }}>
                            <div className="card-header">
                                Validity
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-dark">
                                    <tbody>
                                        <tr>
                                            <td>Days Left</td>
                                            <td>{this.state.dataObj.certificate.details.validity.days_left}</td>
                                        </tr>
                                        <tr>
                                            <td>Valid From</td>
                                            <td>{this.state.dataObj.certificate.details.validity.valid_from}</td>
                                        </tr>
                                        <tr>
                                            <td>Valid To</td>
                                            <td>{this.state.dataObj.certificate.details.validity.valid_to}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }
}

export default Main