import React from 'react';
import ReactDOM from 'react-dom';
import './scroll.css'
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



// // When the user scrolls down 40px from the top of the document, show the button

class ScrollButton extends React.Component{
        constructor(){
          super()
          this.state={
            pagePx:'',
            id:'none'
          }
        }
        componentDidMount() {
          window.addEventListener('scroll', this.showScroll);
        }
        componentWillUpdate(){
          window.addEventListener('click', this.onButtonClick)
        }
      
        componentWillUnmount() {
          window.removeEventListener('scroll', this.showScroll);
        }
    
  showScroll=()=>{
  ( document.documentElement.scrollTop > 40)?
     this.setState({ id:'myBtn'}) : this.setState({ id:''}) 
  }

  onButtonClick=()=>{
   window.scrollTo(0,0)
  }

    render(){

      return(
        <div>
             <button onClick= {this.onButtonClick} id={this.state.id} title="Go to top">
             <i className="fas fa-arrow-up"></i></button>
        </div>
      )
    }
  }

  ReactDOM.render(<ScrollButton />, document.getElementById('root'));