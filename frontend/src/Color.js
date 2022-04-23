import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
//import moment from "moment";
import { Item, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Card, Header } from "semantic-ui-react";
// import './c.css';
// import server from "../../../server/server";
// import UniCard from "../unigrid/UniCard";

// import UniGridCompact from "../unigrid/UniGridCompact";
// import NoUni from "../unigrid/NoUni";
export default function Color(props) 
{        
   //console.log(props.name,("calendar"))
  //  console.log(uni,"uni")
   
    console.log( props.name,"gygg")
    const mark = props.name;
    console.log(mark,"uni")

    return (
        <Card fluid align="center">
             <Button  inverted color={mark[0]}>
                  
                </Button>
            
            
        </Card>
    );
}