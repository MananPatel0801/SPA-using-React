/*
Author: Manan Patel
*/

import React from 'react';
import './App.css';
import{BrowserRouter as Router,
      Route,
      Link,
      NavLink} from 'react-router-dom';


class Home extends React.Component
{
  render()
  {
    return(
      <p> Hey, This is the Home Page of the Application.</p>
    );
  }
};

class TODO extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = 
    {
      newItem: "",
      output: "",
      list: [{id: 1, body: "Visit the Bank."},
             {id: 2, body: "Do the dishes."},
             {id: 3, body: "Finish react assignments."},
             {id: 4, body: "Do the laundry."},
             {id: 5, body: "Do the groceries."}
            ],
      newList: []
    };
  }



  stateChange(event)
  {
    this.setState({newItem: event.target.value})
  }

  addItem(e)
  {
    e.preventDefault();
    let {list} = this.state;

    list.push({
      id: list ? list.length + 1 : 0,
      body: this.state.newItem
    });

    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    this.setState({
      list: this.state.list.filter( listItem => listItem.id !== id,
        ),
    });
  }


  changeBtnText()
  {
      document.getElementById("addBtn").innerHTML = "Edit";
  }

  editItem(body)
  {
    this.changeBtnText();
    
    {
      this.setState({newItem: body})

      //this.statechange();
      //document.getElementById("addBtn").onClick = Update();

      /*  Update()
     {
      this.setState(
        state => { this.list = state.list.map(this.listItem.body = this.newItem.body)}
      )
      return(this.list)
      } */
      
    }
  }

  renderList(listItem){
    return (   
      <li key={listItem.id}>
        {listItem.body}{ '    '} 
        <button onClick={this.editItem.bind(this, listItem.body)}> Edit </button> { '    '}
        <button onClick={this.deleteItem.bind(this, listItem.id)}> Delete </button>
      </li>
      );
  }

  render()
  {
    return(
      <div>
        <form>
          <input type="text" onChange={this.stateChange.bind(this)} value={this.state.newItem} />
          {'        '} 
          {/* Above line adds space between text field and button. */}
          <button id="addBtn" onClick={this.addItem.bind(this)}>  Add to the List. </button> 
          <br />
          
        </form>

        <h2> Your Current TODO List: </h2>
          <ul>
            {this.state.list.map(this.renderList.bind(this))}
          </ul>
      </div>
    );
  }
};

class Contact extends React.Component
{
  render()
  {
    return(
      <p> Hey, This is the Contact Page of the Application.</p>
    );
  }
};

class About extends React.Component
{
  render()
  {
    return(
      <p> Hey, This is the About Page of the Application.</p>
    );
  }
};

/* class Form extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = 
    {
      newItem: ""
    };
  }
}
 */



class App extends React.Component
{
  render()
  {
    return (
      <div>
        <h1> Assignment 5 - Single Page Application using React </h1>
        <Router>
          <div>
              
              <ul className="nav">
                <li><NavLink exact to="/"> Home </NavLink></li>
                <li><NavLink to="/TODO"> TODO </NavLink></li>
                <li><NavLink to="/Contact"> Contact </NavLink></li>
                <li><NavLink to="/About"> About </NavLink></li>
              </ul>

              <hr/>

              <Route exact path="/" component={Home} />
              <Route path="/TODO" component={TODO} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />

          </div>
        </Router>
        
      </div>
    );
  }
}



export default App;
