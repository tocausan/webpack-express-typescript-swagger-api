import {Request, Response, NextFunction} from "express";
import {AuthServices} from '../services';

export const AuthController = {

    signin: async (req: Request, res: Response, next: NextFunction) => {
        const result = await AuthServices.signin(req.body.username, req.body.password, req.body.passwordConfirmation)
            .catch((err: Error) => {
                return next(err);
            });
        return res.json(result);
    },

    login: async (req: Request, res: Response, next: NextFunction) => {
        const result = await AuthServices.login(req.body.username, req.body.password)
            .catch((err: Error) => {
                return next(err);
            });
        return res.json(result);
    }
};
