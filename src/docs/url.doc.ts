/**
 * @openapi
 * tags:
 *   name: URL Shortener
 *   description: Endpoints for URL shortening and redirection
 */

/**
 * @openapi
 * /shorten:
 *   post:
 *     tags:
 *       - URL Shortener
 *     summary: Create a short URL
 *     description: Accepts a long URL and returns a shortened version.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://example.com"
 *     responses:
 *       201:
 *         description: URL shortened successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 shortUrl:
 *                   type: string
 *                   example: "http://localhost:3000/abc123"
 *       400:
 *         description: Invalid URL
 */

/**
 * @openapi
 * /{code}:
 *   get:
 *     tags:
 *       - URL Shortener
 *     summary: Redirect to original URL
 *     description: Redirects the user to the original URL associated with the short code.
 *     parameters:
 *       - name: code
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The short code generated for the URL
 *     responses:
 *       302:
 *         description: Redirects to the original URL
 *       404:
 *         description: URL not found
 */

/**
 * @openapi
 * /{code}/details:
 *   get:
 *     tags:
 *       - URL Shortener
 *     summary: Get URL details
 *     description: Returns metadata about a shortened URL (original link, visits, creation time).
 *     parameters:
 *       - name: code
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The short code generated for the URL
 *     responses:
 *       200:
 *         description: Returns URL details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUrl:
 *                   type: string
 *                 shortUrl:
 *                   type: string
 *                 visits:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: URL not found
 */
