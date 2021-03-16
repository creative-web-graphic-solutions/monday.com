import { Component } from "react"
import { ApolloProvider} from 'react-apollo';
import {ApolloClient } from 'apollo-client';
import {createNetworkInterface} from 'react-apollo';
import React from 'react'
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
// import { NormalizedCacheObject ,InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
// import { cache } from './cache';


// const apolloClient = new ApolloClient({
//     link: new HttpLink({
//       uri: 'http://localhost:8080/graphql'
//     }),
//     connectToDevTools: true,
//   })

// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//     uri:'http://localhost:8080/graphql',
//   cache: new InMemoryCache({
//     Friends: {
//         keyFields: ["firstname", "lastname", "email"],
//       },
//   })
// });


// const networkInterface = createNetworkInterface({
//     uri:'http://localhost:4000/graphql',
// })

// const client = new ApolloClient({
//     networkInterface,
// });

const getuserquery = gql`
{
    Friends{
        firstname
        lastname
        email
    }
}
`;


class UserInfo extends Component{
render(){
    console.log(this.props)
    return(
        <div>
            
        </div>
    )
}

}

export default graphql(getuserquery)(UserInfo);