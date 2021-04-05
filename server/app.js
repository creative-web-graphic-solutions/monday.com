const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios')
// import mondaySdk from 'monday-sdk-js';
const mondaySdk = require ('monday-sdk-js')
// const monday = mondaySdk.mondaySdk()


const typeDefs = gql`
    type User {
        id: ID
        login: String
        avatar_url: String
    }

    type Query {
        users: [User]
    }
`

const resolvers = {
    Query: {
        users: async () => {
            try {
                // const users = await axios.get('https://api.github.com/users')
                let query = '{ boards (limit:5) {name id} }';

            fetch ("https://api.monday.com/v2", {
                method: 'post',
                headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjkyMTY5NTgzLCJ1aWQiOjE2Mjc0MjcwLCJpYWQiOiIyMDIwLTExLTI5VDE0OjIwOjA2LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjo3MTcxMzM1LCJyZ24iOiJ1c2UxIn0.m_GVphTmTeXP1Vtn5ga-XMuyizzjJOLbHosMVgTsmLo'
                
                },
            body: JSON.stringify({
                'query' : query
            })
            })
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res, null, 2)));
                console.log("users.data", users.data)
                return users.data.map(({ id, login, avatar_url }) => ({
                    id,
                    login,
                    avatar_url 
                }))
            } catch (error) {
                throw error
            }
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjkyMTY5NTgzLCJ1aWQiOjE2Mjc0MjcwLCJpYWQiOiIyMDIwLTExLTI5VDE0OjIwOjA2LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjo3MTcxMzM1LCJyZ24iOiJ1c2UxIn0.m_GVphTmTeXP1Vtn5ga-XMuyizzjJOLbHosMVgTsmLo'
server.listen().then(({ url }) => console.log(`Server ready at ${url}`)).then((res) => {
    let body = {
        query: `{
            users (limit:5) {
                id
                name
                photo_original
                email
                phone
            }
        }`
    }
    return data = axios.post('https://api.monday.com/v2', body, {
        headers: {
            Authorization: token
        }
    } )
}).then((res) => {
    console.log(JSON.stringify(res.data));
})
