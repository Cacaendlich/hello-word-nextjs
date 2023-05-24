import type {NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';

//arrow function //vou receber uma requisição e espero dar uma resposta.
export default (req:NextApiRequest, res:NextApiResponse) => {
    res.status(200).json({data: moment().format('DD/MM/yyyy HH:mm:ss')});
}