import pkg from 'jsonwebtoken';
const { verify, decode } = pkg;
import jsonSecret from "../../config/jsonSecret.js";
import { request, response } from "express";
 

export default async(request, response, next) => {const token = request.headers.authorization 

    if(!token){
        return response.status(401).send('Problem in access token');
    }

    const [, accessToken] = token.split(" ")

    try {
        verify(accessToken, jsonSecret)

        const { id, email} = await decode(accessToken)

        request.usuarioId = id
        request.usuarioEmail = email

        return next()

    } catch (error) {
        response.status(401).send('unauthorized user')
    }
};