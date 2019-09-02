import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Session from './components/Session/Session'
import Router from './router/Router'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import './index.scss'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

const App = () => (
    <ApolloProvider client={client}>
        <Session>
            <Router />
        </Session>
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
