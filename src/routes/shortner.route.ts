import { Router } from "express";
import { shortenUrl, redirectUrl, getUrlDetails } from "../controllers";
import { validateData } from "../middleware/validationMiddleware";
import { shortenUrlSchema } from "../validation-schema/url.schema";

const urlRoute = Router();


urlRoute.post("/shorten", validateData(shortenUrlSchema), shortenUrl);


urlRoute.get("/:code", redirectUrl);


urlRoute.get("/:code/details", getUrlDetails);

export { urlRoute };
