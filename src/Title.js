import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



class Title extends Component {
    render() {
        return (
            <div className="container text-center" style={{backgroundColor:"black",marginTop:"2%",color:"white",fontFamily: "Oswald, sans-serif"}}>
                <div className="row" >
                    <div className="col-sm-12">
    <h3 >{this.props.head1} {this.props.head2}</h3>
    </div>
    </div>
            </div>  
        )
    }
}


export default Title