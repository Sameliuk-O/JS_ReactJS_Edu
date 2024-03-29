
import {HttpError} from "./errors/http.error";
import {NextFunction, Request, Response, Router} from "express";

export interface IExceptionFilter {
    catch(
        err: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction
    ): void
}

export interface IControllerRout {
     path: string;
     method: keyof Pick<Router, "get" | "post"| "delete" | "patch" | "put">
     handler: (req: Request, res: Response, next: NextFunction) => void;
    validators?: Validation;
}

export type Validation = Record<string, any>

