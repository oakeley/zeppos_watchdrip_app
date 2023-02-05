import {MessageBuilder} from "../shared/message";
import {Commands, SERVER_INFO_URL, SERVER_URL} from "../utils/config/constants";


const messageBuilder = new MessageBuilder();

const fetchInfo = async (ctx) => {
    let resp = {};

    await fetch({
        url: SERVER_URL + SERVER_INFO_URL,
        method: "GET"
    }).then((response) => {
        if (!response.body) { throw Error('No Data') }
        return response.body;
    }).then((data) => {
        try {
            console.log("log", data);
            const parsed = JSON.stringify(data);
            console.log("log", parsed);
            resp = parsed;
        } catch (error) {
            throw Error(error.message);
        }
    }).catch(function (error) {
        resp = {error: true, message: error.message};
    }).finally(() => {
        const jsonResp = {data: {result: resp}};
        if (ctx !== false) {
            ctx.response(jsonResp);
        } else {
            return jsonResp;
        }
    }
)};


AppSideService({
    onInit() {
        messageBuilder.listen(() => { });
        messageBuilder.on("request", (ctx) => {
            const jsonRpc = messageBuilder.buf2Json(ctx.request.payload);
            switch (jsonRpc.method) {
                case Commands.getInfo:
                    return fetchInfo(ctx);

                default:
                    break;
            }
        });
    },

    onRun() {
    
    },

    onDestroy() {
    
    }
});
