import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter, Switch } from 'react-router-dom'
import Firebase from '../components/Firebase/Firebase'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../components/Home/Home'
import LoginAndSignupPage from '../pages/LoginAndSignupPage/LoginAndSignupPage'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

const Router = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Firebase>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginAndSignupPage}
                    />
                </Switch>
            </Firebase>
        </BrowserRouter>
    </ApolloProvider>
)

export default Router
