import { createCheerioRouter } from 'crawlee';
import { Actor } from 'apify';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ log, json, request }) => {
    log.info(`Processing ${request.loadedUrl}`);
    await Actor.pushData({
        urlEndPoint: request.loadedUrl,
        json, error: json?.error
    });
});