import setTokenCookie from '../../utils/setTokenCookie'

const logout = (parent, args, { res }) => {
    try {
        setTokenCookie(res, '')
        return true
    } catch (e) {
        return false
    }
}

export default logout
