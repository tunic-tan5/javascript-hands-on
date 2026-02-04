 
import jwt from 'jsonwebtoken';
export function verifyToken(req, res, next){
    //token verification


    //1.get token from request header or cookie
     let signedToken = req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"Access denied. No token provided"})
    }

    //2.verify token(decode)
    let decodedToken = jwt.verify(signedToken,'abcdef');
    next();
}