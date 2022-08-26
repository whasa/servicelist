
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component,useState } from 'react';
import Menu from './components/menu';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import 'font-awesome/css/font-awesome.min.css'

const testData = [
  {name: "Air Conditioning Repairs", 
  Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/f2430549-85c4-4d04-903f-ddb54dd1b4e0.jpg", 
  Description: "Air conditioning and heating service may be needed if you cannot maintain a comfortable temperature in the cabin"},
  {name: "Auto Electrical Repairs", Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/0c323b96-64cf-4625-89b0-b37dec51ca30.jpg", 
  Description: "Before auto electrical repair work is completed by our team, we will run diagnostics to ensure that auto electrical repairs will resolve the issue."},
  {name: "Brake Repair & Service ", Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/8f184a04-8e30-4c36-8956-9b427afaebeb.png", 
  Description: "If your vehicle is showing signs that it needs brake repair service, you should not delay scheduling an appointment."},
  {name: "Check Engine Light Service ", Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/db18cff5-00b9-4696-9aff-348743a28429.png", 
  Description: "However, once your check engine light is on, prompt attention is required."},
  {name: "Oil Changes ", Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/792aaf4b-7b68-4e3e-91ed-3b5406539050.png",
  Description: "Regular oil changes ensure that your car’s mechanical features are properly lubricated. "},
  {name: "Steering and Suspension Repairs ", Service_url: "https://stauditcentralusaa01prod.blob.core.windows.net/files/Accounts/1/Locations/e747f396-64da-443d-aec1-38b06bc7bf7e/Services/6ea6537a-f72c-4275-b848-76c975a7b9cc.jpg", 
  Description: "Steering and suspension repairs may be easy to put off for another day when they seem relatively minor. "},
];



class App extends React.Component{
      constructor(props){
        super(props);
        this.state={
          profiles:testData,
          count:0,

        }
      }

      handleClick = (e) => {
      if(e.target.checked){
        this.setState({ count: this.state.count + 1 })
      }
      else{
        this.setState({ count: this.state.count - 1 })
      }
    }


  render(){
    return(
        <div className="App">
          <div className="App-searchBar"> 
            <SearchBar />
          </div>
          <h2 className="App-header">
            <Menu/>
          </h2>
          <div >
              <div className="services"> 
                <CardList  profiles={this.state.profiles}  handleClick={this.handleClick}/>
              </div>
        
          <div className="App-footer"> 
            <label><b> Selected  Services:  {this.state.count} </b></label>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
