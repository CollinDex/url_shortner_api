import { HttpError, ResourceNotFound, BadRequest, Conflict } from "../middleware";
import config from "../config";

interface UrlEntry {
  originalUrl: string;
  shortUrl: string;
  visits: number;
  createdAt: Date;
}

const urlStore: Map<string, UrlEntry> = new Map();

export class UrlShortenerService {
  public async shortenUrl(payload: { url: string }): Promise<{
    message: string;
    shortUrl: string;
  }> {
    const { url } = payload;

    try {     
      let code = Math.random().toString(36).substring(2, 8);
      while (urlStore.has(code)) {
        code = Math.random().toString(36).substring(2, 8);
      }

      const shortUrl = `${code}`;

      urlStore.set(code, {
        originalUrl: url,
        shortUrl,
        visits: 0,
        createdAt: new Date(),
      });

      return {
        message: "URL shortened successfully",
        shortUrl,
      };
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError(500, error.message || "Internal server error");
    }
  }

  public async getOriginalUrl(code: string): Promise<string> {
    try {
      const entry = urlStore.get(code);

      if (!entry) {
        throw new ResourceNotFound("URL not found");
      }

      entry.visits += 1;
      urlStore.set(code, entry);

      return entry.originalUrl;
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError(500, error.message || "Internal server error");
    }
  }

  public async getUrlDetails(code: string): Promise<UrlEntry> {
    try {
      const entry = urlStore.get(code);

      if (!entry) {
        throw new ResourceNotFound("URL not found");
      }

      return entry;
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError(500, error.message || "Internal server error");
    }
  }
}
