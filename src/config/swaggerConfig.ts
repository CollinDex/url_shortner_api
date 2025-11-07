import swaggerJsdoc, { SwaggerDefinition } from "swagger-jsdoc";
import config from ".";
import { version } from "../../package.json";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "Express Template",
    version: version,
    description: "OpenApi documentaiton for the Url Shortner",
  },
  servers: [
    {
      url: `http://localhost:8080/v1`,
      description: "Local server",
    },
    {
      url: "https://express-template-production.up.railway.app/",
      description: "Live server",
    },
  ],
  tags: [
    {
      name: "URL Shortener",
      description: "A list of routes for Url Shortener",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  externalDocs: {
    url: config.SWAGGER_JSON_URL,
  },
};

const options = {
  swaggerDefinition,
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
    "./src/services/*.ts",
    "./src/schema/*.ts",
    "./src/docs/*.ts",
  ],
};

const specs = swaggerJsdoc(options);

export default specs;