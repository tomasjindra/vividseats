export const createUrlEndpoints = (inputURLs, URLEndpoints) => {
    inputURLs.map(inputURL => {
        let id = inputURL.url.match(/\d+$/gm)
        URLEndpoints.push(`https://www.vividseats.com/hermes/api/v1/listings?productionId=${id}&includeIpAddress=false`)
    }
    )
}