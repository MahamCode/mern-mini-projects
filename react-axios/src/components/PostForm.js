import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          //state properties of the below input fields
         userId: '',
         title: '',
         body: ''
      }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        //to avoid page refresh
        e.preventDefault()
        console.log(this.state)

        //make post request
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
      //structure the above properties in the rendor method
      const { userId, title, body } = this.state
      
    return (
        <>
        <div className='container'>
        <form onSubmit={this.submitHandler}>
              <h1>Let's hit the API from in react App using axios</h1>
              <label>ID</label>
              <div>
                  {/* on change handler is to track the change in input values and keep
                  them in sync with the state object*/}
                  <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
              </div>
              <label>TITLE</label>
              <div>
                  <input type="text" name="title" value={title} onChange={this.changeHandler} />
              </div>
              <label>BODY</label>
              <div>
                  <input type="text" name="body" value={body} onChange={this.changeHandler} />
              </div>
              <button type="submit">Submit</button>
          </form>
     
        </div>   
        </>
    )
  }
}

export default PostForm
