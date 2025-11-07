import { NextFunction, Request, Response } from "express";
import { UrlShortenerService } from "../services";

const service = new UrlShortenerService();

export const shortenUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await service.shortenUrl(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};


export const redirectUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code } = req.params;
      const originalUrl = await service.getOriginalUrl(code);
      res.redirect(originalUrl);
    } catch (error) {
      next(error);
    }
  };
  

export const getUrlDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const details = await service.getUrlDetails(req.params.code);
    res.json(details);
} catch (error) {
    next(error);
}
};
