const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/todos')
    .then((response) => {
       for(let todo of response.data){
           console.log(
            (todo.completed ? 'v': 'x') +
            '\t' + todo.title
            )
       }
    })
    .catch(console.error)

// axios.get('https://www.google.com/')
//     .then((response) => {
//         console.log(response.data)
//     })
//     .catch(console.error)