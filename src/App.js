import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarButton from './components/github/StarButton';

import store from './store';
import Banner from './components/Banner';
import Filter from './components/github/Filter';

import bannerImage from './images/hackathon.png';
import event1 from './images/hackday1.png';
import event2 from './images/REACTATHON1.png';
import event3 from './images/TESTATHON1.png';

import event0 from './images/download.png';

import {Provider} from 'react-redux';
import {render} from "react-dom";

import Tabs from './components/github/Tabs';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src="images/download.png"   alt="Profile image"></img>
          <h1 className="App-title">Welcome to HackWorld!!</h1>
          <h3><button type="button">Login/Signup</button></h3>
        </header>
        <body className="App-body">
        </body>
       
      </div>
    );
  }
}

export default App;*/


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <table>
                        <tr>
                            <td width="20%">&nbsp;</td>
                            <td width="50%" colSpan="2">><h1 className="App-title"> Game on </h1></td>
                            <td width="20%">&nbsp; <img src={event0}/></td>


                        </tr>
                    </table>
                    <div>
                        <Tabs>
                            <div label="Upcoming">
                                <table>

                                    <tr>
                                        <td><Banner src={event1} alt='Promoção Camisas do Timão'/></td>
                                        <td>&nbsp;</td>
                                        <td width="50%" colSpan="2">
                                            <div //onClick={() => props.addProduct(product)}
                                                className="shelf-item__buy-btn">Register
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <em>Upcoming</em>!
                            </div>
                            <div label="History">
                                <table>
                                    <tr>
                                        <td><Banner src={event2} alt='Promoção Camisas do Timão'/></td>
                                        <td>&nbsp;</td>
                                        <td width="50%" colSpan="2">
                                            <div //onClick={() => props.addProduct(product)}
                                                className="shelf-item__buy-btn">Register
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <em>History</em>!
                            </div>
                            <div label="Ongoing">
                                <table>
                                    <tr>
                                        <td><Banner src={event3} alt='Promoção Camisas do Timão'/></td>
                                        <td>&nbsp;</td>
                                        <td width="50%" colSpan="2">
                                            <div //onClick={() => props.addProduct(product)}
                                                className="shelf-item__buy-btn">Register
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <em>extinct</em>!
                            </div>
                        </Tabs>
                    </div>


                    <StarButton/>
                </div>

            </Provider>
        )
    }
}

export default App;
