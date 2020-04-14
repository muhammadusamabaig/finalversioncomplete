import React, { Component } from 'react'
import {ProductConsumer} from './Contaxt';
import Title from './Title';
// import './productcard.css'
import Button from 'react-bootstrap/Button';
// import Productcard from './Productcard';
import ProgressBar from 'react-bootstrap/ProgressBar'

 class quizstructure extends Component {

     
    render() {
        return (
            <div style={{background:"white"}} className="container">
            {/* <Title head1="Our" head2="Products" /> */}

                <ProductConsumer>
                    {
                        (value)=>

                            {
                               
                           
                               var a=[]
                                var output = '';
                                for (var property in  value.product[value.qno]) {
                                  output += property + ': ' +  value.product[value.qno][property]+'; ';
                                  a.push(value.product[value.qno][property])

                                
                                }
                                console.log(a)
                               
                            return(
                                
                               <div >{

                                <Title head1={"QUIZ"} head2={"APPLICATION"}/>

                            //    a.map((item)=>{
                            //        return(

                            //        <p>{item}</p>
                            //        )

                            //    })    

                                    
                                

                            }
                            <div className="row " style={{marginTop:"2%"}}>
                            <h4 className="col-12 text-center" style={{fontWeight:"bolder"}}>{value.total+value.wrong}/5</h4>

                            </div>
                            <div className="row"  style={{marginTop:"2%",boder:'2px solid'}}>
                            <h5>{a[1]}</h5>
                            </div>
                            <div className="row" style={{marginTop:"2%"}}>
                            <Button disabled={value.buttonstate} onClick={()=>{console.log( value.checkquiz(a[2],a[0]))}}  className="col-5" style={{border:"4px solid"}} variant="outline-secondary">{a[2]}</Button>
                            <Button disabled={value.buttonstate} onClick={()=>{console.log( value.checkquiz(a[3],a[0]))}} className="col-5" style={{marginLeft:"16%",border:"4px solid"}} variant="outline-secondary">{a[3]}</Button>


                            </div>
                            <div className="row"  style={{marginTop:"2%"}}>
                            <Button disabled={value.buttonstate} onClick={()=>{console.log( value.checkquiz(a[4],a[0]))}}  className="col-5" style={{border:"4px solid"}} variant="outline-secondary">{a[4]}</Button>
                            <Button disabled={value.buttonstate} onClick={()=>{console.log( value.checkquiz(a[5],a[0]))}}  className="col-5" style={{marginLeft:"16%",border:"4px solid"}} variant="outline-secondary">{a[5]}</Button>


                            </div>
                            <div className="row" style={{marginLeft:"35%",marginTop:"2%"}}>
                            <Button disabled={value.nextbutton} onClick={()=>{console.log(value.quizincrement())}} className="col-5" style={{border:"4px solid"}} variant="dark">NEXT</Button>
                        {/* <p>{value.total}</p> ******************************************total correct ko denot krta ht answer */}
                        {/* <p>{value.total}</p> ******************************************total correct ko denot krta ht answer */}
                        {/* <p>{value.total}</p> ******************************************total correct ko denot krta ht answer */}
                        {/* <p>{value.total}</p> ******************************************total correct ko denot krta ht answer */}

                            </div>
                            <div style={{marginLeft:"5%"}} className="row">
                            <img width="3%" src={process.env.PUBLIC_URL + '/lightblue.png'}/><h6 style={{fontWeight:"bolder"}}>Correct:{value.totalset}%</h6> 
                            </div>
                            <div style={{marginTop:"2%",marginLeft:"5%"}} className="row">
                            <img width="3%" src={process.env.PUBLIC_URL + '/red.png'}/><h6 style={{fontWeight:"bolder"}}>Wrong:{value.wrongset}%</h6>
                            </div>
                            <div style={{marginTop:"2%",marginLeft:"5%"}} className="row">
                            <img width="3%" src={process.env.PUBLIC_URL + '/black.png'}/><h6 style={{fontWeight:"bolder"}}>Remaining Score:{100-(value.totalset+value.wrongset)}%</h6>
                            </div>
                            <div className="row" >
                        <p className="col-5 text-left" style={{fontWeight:"bolder",fontSize:"150%"}}>{value.totalset}%</p>
                            <p className="col-7 text-right" style={{fontWeight:"bolder",fontSize:"150%"}}>100%</p>

                            </div>
                                <ProgressBar style={{backgroundColor:"lightgray",marginTop:"0%"}}>
  <ProgressBar striped variant="succses" animated={false} now={value.totalset} />
  <ProgressBar variant="danger"  now={value.wrongset} />
  <ProgressBar striped variant="dark" now={100-(value.totalset+value.wrongset)} />
</ProgressBar>
      </div>


                    
                                
                        
                                    
                            )

                    }
                }
                </ProductConsumer>
            </div>
            
        )
    }
}
export default quizstructure