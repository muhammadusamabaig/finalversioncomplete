import React, { Component } from 'react'
import {Products} from './Data';
const ProductContaxt=React.createContext();
export default class ProductProvider extends Component {


    state={
        product:[],
        total:0,
        qno:0,
        nextbutton:true,
        loadingtop:0,
        gtotal:0,
        buttonstate:false,
        wrong:0,
        wrongset:0,
        totalset:0,
        remain:0

    }
    modalclosebutton=()=>{
        this.setState({
            modalcondition:false
        })
    }
componentDidMount(){
    this.setproduct()
    

}



quizincrement=()=>{
    this.setState({
        qno:this.state.qno+1,
        loadingtop:this.state.loadingtop+1,
        buttonstate:false,
        nextbutton:true
        
    })
    if (this.state.loadingtop==4) {

       
            this.setState({
              modalcondition:true,
              nextbutton:true,
              buttonstate:true

      
            })
        
        
        
    }
}

checkquiz=(quizvalue,quizindex)=>{
this.setState({
    buttonstate:true,
    nextbutton:false
})
    console.log(quizvalue,"dattttttttttttttttttta",quizindex)
   
   
    
   
    if(quizindex==0&quizvalue=='Mozilla'){
    this.setState({
        total:(this.state.total+1),
        totalset:(this.state.total+1)/5*100,
        
    })
    }
   else if(quizindex==1&quizvalue=='Hyper Text Markup Language'){
        this.setState({
            total:(this.state.total+1),
            totalset:(this.state.total+1)/5*100,
            
        })
        }
       else if(quizindex==2&quizvalue=='Head, Title, HTML'){
            this.setState({
                total:(this.state.total+1),
                totalset:(this.state.total+1)/5*100,
            })
            }
           else if(quizindex==3&quizvalue=='Br'){
                this.setState({
                    total:(this.state.total+1),
                    totalset:(this.state.total+1)/5*100,
                })
                }
               else if(quizindex==4&quizvalue=='Body background=yellow'){
                    this.setState({
                        total:(this.state.total+1),
                        totalset:(this.state.total+1)/5*100,
                    })
                    
                    }
                    

                    
                 

    else{
        this.setState({
            wrong:this.state.wrong+1,
            wrongset:(this.state.wrong+1)/5*100
        })
    }
  
console.log(this.state.total)
}
missing=()=>{
  
    this.setState({
        mis:this.state.total+this.state.wrong
    })
}


    setproduct=()=>{
      let temparray=[]
      Products.forEach((item)=>{
         
          temparray=[...temparray,item]
      })
      this.setState({
          product:temparray
      }
      )
    }

modalclose=()=>{
this.setState({
    modalcondition:false
})
}
    render() {
                                                                                                                                                                                                                        
        return(
            <ProductContaxt.Provider value={{...this.state,handleproduct:this.handleproduct,toploader:this.toploader,addcart:this.addcart,modal:this.modal,modalclose:this.modalclose,cartcalincre:this.cartcalincre,delproduct:this.delproduct,gtotal:this.gtotal,cartdelettotupdate:this.cartdelettotupdate,cartcaldecrem:this.cartcaldecrem
                ,modalclosebutton:this.modalclosebutton,quizincrement:this.quizincrement,checkquiz:this.checkquiz,remaine:this.remaine}}>
                {this.props.children}
                {console.log(this.state.cart,"mooooooooooooooooooooooodal")}

            </ProductContaxt.Provider>
        )
    }
}
const ProductConsumer=ProductContaxt.Consumer;


export {ProductProvider,ProductConsumer};