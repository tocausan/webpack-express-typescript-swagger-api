import {DebugConsole} from "../models";
import * as express from "express";

export const HeaderMiddleware = {
    enableCORS: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new DebugConsole('HeaderMiddleware/enableCORS');

        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
};