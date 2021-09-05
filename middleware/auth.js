
const jwt = require('jsonwebtoken')

exports.authentication = (req, res, next) => {
    const token = req.header('token')
    console.log(token);
    if (!token) {
        return res.status(401).json({message: 'Chua cap quyen truy cap'})
    }
    jwt.verify(token, 'fptHCM', (err, user) => {
        if (err) {
            return res.status(500).json({message: 'ban ko co quyen truy cap'})
        }
        req.user = user
        console.log('user verify'+ user);
        next()
    })
}