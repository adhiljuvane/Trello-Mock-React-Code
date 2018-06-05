import React , { Component } from 'react' ;
import './HeaderDiv.css'
import { Layout, Menu, Button , Carousel } from 'antd';
import a from './usecases-board01.jpg' ;
import b from './usecases-board02.jpg' ;
import c from './usecases-board03.jpg' ;
import d from './usecases-board04.jpg' ;
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
const { Header, Content, Footer } = Layout ;


const history = createHistory(
  {forceRefresh:true}
);

export default class HeaderDiv extends Component{
  render(){
    return(
      <div className="completeDiv">
         <div className = "divForHeader" style={{display : 'flex', flexDirection : 'row' , justifyContent : 'space-between'}}>
           <div className = "trelloIcon"></div>
           <div className = "headerButtons" style={{display : 'flex' , alignSelf : 'center'}}>
                <div className="loginButton" ><Button type="primary" >Login</Button></div>
                <div className="signUpButton" onClick={() => {history.push('/SignUp')}}><Button type="primary">SignUp</Button></div>
           </div>
         </div>
         <div className = "divForContent1">
          <div className="headerandcontent">
            <h1>Trello lets you work more collaboratively and get more done.</h1>
            <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
            <Button type="primary" className="butonInsideC1" onClick={() => {history.push('/SignUp')}}>Sign Up-Its Free.</Button>
            <p className="p2">Already use Trello? Log in.</p>
          </div>
         </div>
         <div className="divForContent2">
            <Carousel autoplay effect="fade" dots="false">
              <div>
                <p>The Design Team shares updates on current projects so everyone in the company knows whats going on.</p>
              </div>
              <div>
                <p>Since the Product Roadmap is on a Trello board, the Product team can focus on building rather than endless status update meetings.</p>
              </div>
              <div>
                <p>The Sales Team updates the status of leads directly in the sales pipeline for all to see.</p>
              </div>
              <div>
                <p>Onboarding new employees is easy for the People Team since they share orientation details directly on a Trello board.</p>
              </div>
              <div>
                <p>The Marketing Team moves blog content through the editorial calendar all the way from "Writing" to "Published".</p>
              </div>
            </Carousel>
            <div className="imageInC2">
              <img src={a} className="fstImage"/>
              <img src={b} className="sndImage"/>
              <img src={c} className="trdImage"/>
              <img src={d} className="fthImage"/>
            </div>
            <div className="divOverImage">
              <p>From startups to Fortune 500 companies, Trello is the most visual way for teams to collaborate on any project.</p>
              <Button type="primary">Create Your Board</Button>
            </div>
         </div>
         <div className="divForContent3">
            <h2>Information At A Glance</h2>
            <p>Dive into the details by adding comments,<br/> attachments, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
            <div className="imageInC3"></div>
         </div>
         <div className="divForContent4">
            <div className="rowElement1">
            <h2>Work With Any Team</h2>
            <div className="divinR1C4">Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</div>
            <Button type="primary" className="buttonInC4">Build Your Dream Here</Button>
            </div>
            <div className="rowElement2">
            </div>
         </div>
         <div className="divForContent5">
              <div className="divForR1C5">
              </div>
              <div className="divForR2C5">
                  <h2>A Productivity Platform</h2>
                  <div className="divInR2C5">Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your teams unique business needs.</div>
                  <Button type="primary" className="buttonInC4">Power-Up Your workflow</Button>
              </div>
         </div>
         <div className="divForContent6">
              <div className="divInC6">
                  <h2>Always In Sync</h2>
                  <div className="divForPinC6">No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</div>
                  <div className="divForbuttons">
                      <div className="button1" onClick={() => {history.push('/itunes')}}></div>
                      <div className="button2" onClick={() => {history.push('/playstore')}}></div>
                  </div>
              </div>
         </div>
         <div className="divForContent7">
              <div className="div1"></div>
              <div className="div2">
                  <div className="div21"></div>
                  <div className="div22"></div>
                  <div className="div23"></div>
                  <div className="div24"></div>
                  <div className="div25"></div>
                  <div className="div26"></div>
              </div>
              <div className="div3">
                    <div className="div31"></div>
                    <div className="div32"></div>
              </div>
              <div className="div4">Companies of all shapes and sizes use Trello Business Class. Learn how Trello helps your team work with perspective.</div>
              <div className="div5">
                    <Button type="primary">Work with prespective -></Button>
              </div>
         </div>
         <div className="divForContent8">
              <div className="column1InC8">What are you waiting for? Sign up for free and become one of the millions of people around the world who have fallen in love with Trello.</div>
              <div className="column2InC8"><Button type="primary" onClick={() => {history.push('/SignUp')}}>SignUp Its free.</Button></div>
              <div className="column3InC8">Already use Trello? Log in.</div>
         </div>
         <div className="divForContent9">
              <div className="divForC9Links">
                    <div className="divForLink">Tour</div>
                    <div className="divForLink">Pricing</div>
                    <div className="divForLink">Apps</div>
                    <div className="divForLink">Jobs</div>
                    <div className="divForLink">Blog</div>
                    <div className="divForLink">Developers</div>
                    <div className="divForLink">About</div>
                    <div className="divForLink">Help</div>
                    <div className="divForLink">Legal</div>
                    <div className="divForLink">Privacy</div>
              </div>
              <div className="lastdiv">
                      <div className="imageInLastDiv"></div>
                      <div className="divInlastdiv">© Copyright 2018. All rights reserved.</div>
              </div>
         </div>
      </div>
    )
  }
}
