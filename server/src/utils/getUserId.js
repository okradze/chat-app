import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'


const getUserId = (req) => {
    const token = req.cookies.token

    if(token) {
        return jwt.verify(token, process.env.JWT_SECRET).hotelId
    }

    throw new AuthenticationError('NO_AUTH')
}

export default getUserId