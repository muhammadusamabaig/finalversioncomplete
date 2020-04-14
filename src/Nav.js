import React, { Component } from 'react';
import {ProductConsumer} from './Contaxt';

import LoadingBar from 'react-top-loading-bar';
 
export default class Nav extends Component {
  state = {
    loadingBarProgress: 0
  };
 
  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + 5
    });
  };
 
//   complete = () => {
//     this.setState({ loadingBarProgress: 100 });
//   };
 
//   onLoaderFinished = () => {
//     this.setState({ loadingBarProgress: 0 });
//   };
 
  render() {


return(
<div >
            {/* <Title head1="Our" head2="Products" /> */}
            

                <ProductConsumer>
                    {
                        (value)=>
                            {
                            return(
                                <div className="container text-center" >
                                    <LoadingBar progress={(value.loadingtop/5)*100}
          height={15}
        color='rgb(80, 125, 199)'
          // onLoaderFinished={() => this.onLoaderFinished()}
        />
                                    </div>
                            )

                    }
                }
                </ProductConsumer>
            </div>
            








    
    );
  }
}