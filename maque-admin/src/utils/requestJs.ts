import requestWrap from "maque-request-ts";


function MyRequest(args: any) {

    if (!args.url.startsWith("https://") && !args.url.startsWith("http://")) {
        //@ts-ignore
        if (window.apiApp) {
            //@ts-ignore
            args.url = window.apiApp + args.url;
        }
    }
    return requestWrap(args);
}

export default MyRequest
