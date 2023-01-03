import { Dataset, createCheerioRouter } from 'crawlee';
import { Actor } from 'apify';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ enqueueLinks, log, body, json, request, response }) => {

    console.log(typeof json)

    await Actor.pushData({
        urlEndPoint: request.loadedUrl,
        ...json,
    });







    // log.info(`enqueueing new URLs`);
    // await enqueueLinks({
    //     globs: ['https://crawlee.dev/**'],
    //     label: 'detail',
    // });
});

/**
router.addHandler('detail', async ({ request, $, log }) => {
    const title = $('title').text();
    log.info(`${title}`, { url: request.loadedUrl });

    await Dataset.pushData({
        url: request.loadedUrl,
        title,
    });
});
 */