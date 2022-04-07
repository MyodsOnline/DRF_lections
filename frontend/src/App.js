import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';

import AuthorList from './components/Author.js';
import BookList from './components/Book.js';
import ArticleList from './components/Articles.js';
import BiographyList from './components/Biography.js';
import LoginForm from './components/Auth.js';

import AuthorBookList from './components/AuthorBook.js';
import AuthorArticleList from './components/AuthorArticle.js';
import AuthorBiographyList from './components/AuthorBiography.js';


const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу {location.pathname} не найдена</h1>
        </div> )
}

class App extends React.Component {

    constructor(props) {
       super(props)
       this.state = {
            'authors': [],
            'books': [],
            'articles': [],
            'biographies': [],
            'token': ''
            }
       }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8083/api-token-auth/', {username: username, password: password})
        .then(response => { this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {'Content-Type': 'application/json; version=2'}
            if (this.is_authenticated()) {
                headers['Authorization'] = 'Token ' + this.state.token;
            }
        return headers
    }

    load_data () {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8083/api/authors/', {headers})
            .then(response => {
            const authors = response.data.results;
                   this.setState(
                   { 'authors': authors }
               )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8083/api/books/', {headers})
            .then(response => {
               const books = response.data.results;
                   this.setState(
                   { 'books': books }
               )
             }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8083/api/articles/', {headers})
            .then(response => {
               const articles = response.data.results;
                   this.setState(
                   { 'articles': articles }
               )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8083/api/biographies/', {headers})
            .then(response => {
               const biographies = response.data.results;
                   this.setState(
                   { 'biographies': biographies }
               )
            }).catch(error => console.log(error))
    }

    componentDidMount () {
        this.get_token_from_storage()
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li><Link to='/'>Authors</Link></li>
                            <li><Link to='/books'>Books</Link></li>
                            <li><Link to='/articles'>Articles</Link></li>
                            <li><Link to='/biographies'>Biographies</Link></li>
                            <li>{this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}</li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <AuthorList authors={this.state.authors} />} />
                        <Route exact path='/books' component={() => <BookList books={this.state.books} />} />
                        <Route exact path='/articles' component={() => <ArticleList articles={this.state.articles} />} />
                        <Route exact path='/biographies' component={() => <BiographyList biographies={this.state.biographies} />} />
                        <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
                        <Route path="/author/:id">
                            <AuthorBookList books={this.state.books} />
                            <AuthorArticleList articles={this.state.articles} />
                        </Route>
                        <Route path="/authorbio/:id">
                            <AuthorBiographyList biographies={this.state.biographies} />
                        </Route>
                        <Redirect from='/authors' to='/' />
                        <Route component={NotFound404} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;
