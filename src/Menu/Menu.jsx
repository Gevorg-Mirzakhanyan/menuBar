

import './Menu.css'
import React from "react";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faX } from '@fortawesome/free-solid-svg-icons';
class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false,
          showModal: false,
        };
      }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
      };

      toggleModal= () => {
        this.setState(prevState => ({
          showModal: !prevState.showModal
        }));
      }
    
    render() {  
        return (
            <div className="menuHeader">
                <nav className='navBar'>
                  <header>
                    <button onClick={this.toggleModal} className='headerBtn'>
                      Menu
                    </button>
                    
                  </header>
                  
                  <ul className='list'>
                      <li><a className='link' href='/'>Home</a></li>
                      <li><a className='link' href='/'>About</a></li>
                      <li><a className='link' href='/'>Contact Us</a></li>
                    </ul>
                    <button onClick={this.toggleMenu} className='menuIcon'>
                      {this.state.isMenuOpen || <FaBars  />}
                      {!this.state.isMenuOpen || <FontAwesomeIcon icon={faX} /> }
                    </button>
                </nav>
                <div  className='listNew'>
                {!this.state.isMenuOpen || 
                  <ul className='listMenu'>
                    <li><a className='linkNew' href='/'>Home</a></li>
                    <li><a className='linkNew' href='/'>About</a></li>
                    <li><a className='linkNew' href='/'>Contact Us</a></li>
                  </ul>
                }
              </div>
              {this.state.showModal || 
                <div className='modal'>
                  <div className='modalBox'>
                    <p>Hello, I am a modal!</p>
                    <FontAwesomeIcon icon={faRectangleXmark} onClick={this.toggleModal} className='modalIcon' />
                  </div>
                </div>
              } 
             </div>
         )
    }
}


export default Menu;