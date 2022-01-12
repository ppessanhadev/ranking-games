import { CustomError } from '@shared/errors/CustomError';
import { Request, Response, NextFunction } from 'express';

export class ValidateIds {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { ids } = req.body;

    try {
      if (!ids || !Array.isArray(ids) || !ids.length) {
        throw new CustomError({ message: 'Must receive an array of ids', statusCode: 422 });
      }

      if (ids.some((id) => typeof id !== 'string')) {
        throw new CustomError({ message: 'All ids must be type of string', statusCode: 422 });
      }

      return next();
    } catch (err) {
      const e = err as CustomError;
      return res.status(e.statusCode || 500).send({ error: e.message });
    }
  }
}
