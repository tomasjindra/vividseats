import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';
import { createUrlEndpoints } from '../utilities/createUrlEndpoints.js';
import { Actor } from 'apify';


await Actor.init();

const { inputURLs } = await Actor.getInput();

const URLEndpoints = []

createUrlEndpoints(inputURLs, URLEndpoints)


const crawler = new CheerioCrawler({

    requestHandler: router,

    //DC proxies solution which has high blocking rate
    // proxyConfiguration: await Actor.createProxyConfiguration({
    //     useApifyProxy: true,
    //     apifyProxyGroups: ["US"]
    // }),

    //maxRequestRetries: 50, // a lot of 429 blocks
    //useSessionPool: true,
    // sessionPoolOptions: {
    //     maxPoolSize: 4,
    //     sessionOptions: {
    //         maxUsageCount: 80, // tests show that they start blocking approx after 85th usage.
    //     },
    // },

    //Residentials solution which seems to work without blocking
    proxyConfiguration: await Actor.createProxyConfiguration({
        apifyProxyGroups: ['RESIDENTIAL'],
        //countryCode: 'US', 
    }),

});



await crawler.run(URLEndpoints);
await Actor.exit();