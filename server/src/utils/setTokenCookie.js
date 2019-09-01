const setCookie = (res, token) => {
    const expiresIn = 604800000

    res.cookie('token', token, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })
}

export default setCookie
