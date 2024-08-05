const jwt = require('jsonwebtoken');

const TokenAuthentication = (req, res, next) => {
    try {
        const token = req.header.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}

module.exports = {TokenAuthentication};