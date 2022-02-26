import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './index.css';
import './App.css';
import AuthorList from './components/Author.js';
import FooterItem from './components/Footer.js';
import HeaderItem from './components/Header.js';


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'authors': []
       }
   }

//   componentDidMount() {
//       const authors = [
//           {
//               'first_name': 'Фёдор',
//               'last_name': 'Достоевский',
//               'birthday_year': 1821
//           },
//           {
//               'first_name': 'Александр',
//               'last_name': 'Грин',
//               'birthday_year': 1880
//           },
//       ]
//       this.setState(
//           {
//               'authors': authors
//           }
//       )
//   }

    componentDidMount() {
       axios.get('http://127.0.0.1:8083/api/authors/')
           .then(response => {
               const authors = response.data
                   this.setState(
                   {
                       'authors': authors
                   }
               )
           }).catch(error => console.log(error))
    }

   render () {
        return (
            <div className="App">
                <HeaderItem/>

                <AuthorList authors={this.state.authors} />

                <FooterItem/>
            </div>
        )
   }
}


//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
