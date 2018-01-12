import React from 'react';
import ReactDOM from 'react-dom';


 const Card = (props) => {
   return(
          <div>
          <img width="100px" src={props.avatar_url}/>
          <div>
          <div>{props.name}</div>
          <div>{props.company}</div>
          </div>
          </div>
   )
 }
 
 /*---------------------------------------------------------------------*/

 let data =   [
  {
    avatar_url: "https://avatars2.githubusercontent.com/u/18922014?v=4",
    name: "krishna chavali",
    company: "google"
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    name: "nani",
    company: "microos"
  },
  {
    avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
    name: "ezmobius",
    company: "google"
  },
];

 /*---------------------------------------------------------------------*/

 const Form = (props) => {

    return (
      <div>
  	    {props.cards.map(card => <Card {...card}/>)}
      </div>
    );

}


const HelloMessage = (props) => {

     return (
       <div>
         <Form cards={data} />
       </div>
     );

 }

 export default HelloMessage;
