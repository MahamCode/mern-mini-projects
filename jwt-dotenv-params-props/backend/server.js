import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

////////////////////////sign a token/////////////////////

const encoded = jwt.sign({
 exp: Math.floor(Date.now() / 1000) + parseInt(36000000000),
 username: "maham",
 class: "mcs"
},process.env.secret )

// console.log(encoded)

////////////////////////verify a token/////////////////////
const decoded = jwt.verify(encoded, process.env.secret )
console.log(decoded) //it contains our id, iat(issuedAt) and expiration time
console.log(decoded.username)