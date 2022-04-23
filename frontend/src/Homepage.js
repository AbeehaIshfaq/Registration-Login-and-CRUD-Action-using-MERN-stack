import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
//import Color from "./Color";
import React, { Component } from 'react';
import {
  Button, TextField, Dialog, DialogActions, LinearProgress,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell
} from '@material-ui/core';
//import { Button } from "react-native-elements";
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
const axios = require('axios');


export default class Homepage extends Component {
    constructor() {
        super();
      this.state={
          word:[],
          userword:[],
          wordcount:0,
          colorarray1:"",
          colorarray2:"",
          colorarray3:"",
          colorarray4:"",
          colorarray5:"",
          winner:"",
          colorarray1a:"",
          colorarray2a:"",
          colorarray3a:"",
          colorarray4a:"",
          colorarray5a:"",

      }

    }
 
    async componentDidMount () {
      //this.check
      try {
        axios.get('https://random-word-api.herokuapp.com/word?length=5').then(resp =>
        {
         console.log(resp.data);
         this.setState({word:resp.data});
         console.log(this.state.word,"value stored");
        });
    } catch (err) {
        console.log(err);
    }

    }

    checko(userValue)
    {
        if (userValue===undefined)
        {
            return;
        }
       //this.setState({wordcount:this.state.wordcount+1});
       this.setState({ userword:userValue }, () => {
        console.log(this.state.userword, 'dealersOverallTotal1');
      }); 
       let actualword=this.state.word[0];
       let userword=userValue;
       let b;

       for (let i =0;i<5;i++)
        {
            let a=actualword.charAt(0);
             b=userword.charAt(0);
            //console.log(userword,"userword")
            let h;
            let g;
            if (a===b)
            {
                h="secondary";
                actualword = actualword.substr(1, actualword.length);
                userword = userword.substr(1, userword.length);
                g="red"
         }
            else if (actualword.includes(b)) {
               h="primary";
                actualword = actualword.substr(1, actualword.length);
                userword = userword.substr(1, userword.length);
                g="y"



              } else {
                h="grey";
                actualword = actualword.substr(1, actualword.length);
                userword = userword.substr(1, userword.length);
                g="ft"


              }
            // console.log(actualword,a,"actualword");
            // console.log(userword,b,"userword");
            // console.log(i)
            if (i===0)
            {
                this.setState({ colorarray1:h }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
                  this.setState({ colorarray1a:g }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
            }
            
            if (i===1)
            {
                this.setState({ colorarray2:h }, () => {
                    console.log(this.state.colorarray2, 'dealersOverallTotal1');
                  }); 
                  this.setState({ colorarray2a:g }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
            }
            if (i===2)
            {
                this.setState({ colorarray3:h }, () => {
                    console.log(this.state.colorarray3, 'dealersOverallTotal1');
                  }); 
                  this.setState({ colorarray3a:g }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
            }
            if (i===3)
            {
                this.setState({ colorarray4:h }, () => {
                    console.log(this.state.colorarray4, 'dealersOverallTotal1');
                  }); 
                  this.setState({ colorarray4a:g }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
            }
            if (i===4)
            {
                this.setState({ colorarray5:h }, () => {
                    console.log(this.state.colorarray5, 'dealersOverallTotal1');
                  }); 
                  this.setState({ colorarray5a:g }, () => {
                    console.log(this.state.colorarray1, 'dealersOverallTotal1');
                  }); 
            }
 if ((this.state.colorarray5a) === "red" && (this.state.colorarray4a) === "red" && (this.state.colorarray3a) === "red" && (this.state.colorarray2a) === "red" && (this.state.colorarray1a) === "red")
            {
                this.setState({ winner:"winner" }, () => {
                    console.log(this.state.winner, 'dealersOverallTotal1');
                  }); 

            }
        else
        {
            this.setState({ winner:"true" }, () => {
                console.log(this.state.winner, 'lets try again');
              }); 

        }

            

        }
  //   console.log(typeof userValue,"value userValue ");
  this.setState({ wordcount:this.state.wordcount+1}, () => {
    console.log(this.state.wordcount, 'dealersOverallTotal1');
  }); 
 
       console.log(this.state.colorarray);
    }
    getInputValue = (event)=>{
        // show the user input value to console
        let userValue = event.target.value;
       // console.log(this.state.userword,"befor trim");
        //this.check(userValue);
        if(userValue.length===5)
        {    userValue= userValue.trim()
            console.log(userValue,"after trim");
            //this.state.userword[0]=userValue;
            this.checko(userValue);
        }
    };

    render() {
        const state = this.state;

        return (
            <>
            <input type="text" onChange={this.getInputValue} maxlength={5} />
           
            <Button
            className="button_style"
            variant="contained"
            color="this.state.colorarray[0]"
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            Submit
          </Button>
          {<br></br>}
          <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray1}
            size="small"

           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.userword[0]}
          </Button>
          color =  {this.state.colorarray1}

          {<br></br>}

          <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray2}
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.userword[1]}
          </Button>  
          color =  {this.state.colorarray2}

          {<br></br>}

           <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray3}
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.userword[2]}
          </Button>
          color =  {this.state.colorarray3}

          {<br></br>}

          <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray4}
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.userword[3]}
          </Button>
          color =  {this.state.colorarray4}

          {<br></br>}

          <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray5}
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.userword[4]}

          </Button>
          color =  {this.state.colorarray5}
          {<br></br>}
          <Button
            className="button_style"
            variant="contained"
            color={this.state.colorarray5}
            size="small"
           // onClick={this.check(this)}
           // onPress={this.check()}
           >
            {this.state.winner}
          </Button>
          {<br></br>}
          

          


         

          </>

        );
    }


}