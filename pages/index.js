import {
    MESSAGE_TEXT,
    MESSAGE_TEXT2,
    MESSAGE_TEXT3,
    TITLE_TEXT,
    VERSION_TEXT,
} from "../utils/config/styles";


const logger = DeviceRuntimeCore.HmLogger.getLogger("watchdrip_app");


/** type Watchdrip */
let watchdrip = null;

class Watchdrip {
    constructor(page){
        logger.log("page:" + page);

        this.titleTextWidget = null;
        this.versionTextWidget = null;
        this.messageTextWidget1 = null;
        this.messageTextWidget2 = null;
        this.messageTextWidget3 = null;

        this.main_page();
    }

    main_page() {
        const pkg = hmApp.packageInfo();
        this.titleTextWidget = hmUI.createWidget(hmUI.widget.TEXT, TITLE_TEXT);

        this.versionTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {...VERSION_TEXT, text: "v" + pkg.version + "-minimal"});
        this.messageTextWidget1 = hmUI.createWidget(hmUI.widget.TEXT, {...MESSAGE_TEXT, text: ""});
        this.messageTextWidget2 = hmUI.createWidget(hmUI.widget.TEXT, {...MESSAGE_TEXT2, text: ""});
        this.messageTextWidget3 = hmUI.createWidget(hmUI.widget.TEXT, {...MESSAGE_TEXT3, text: ""});

        this.showMessage("Minimal version", "Leave installed to keep", "watchface updated.");
    }

    showMessage(line1, line2, line3) {
        this.messageTextWidget1.setProperty(hmUI.prop.MORE, {text: line1});
        this.messageTextWidget2.setProperty(hmUI.prop.MORE, {text: line2});
        this.messageTextWidget3.setProperty(hmUI.prop.MORE, {text: line3});
        this.setMessageVisibility(true);
    }

    setMessageVisibility(visibility) {
        this.messageTextWidget1.setProperty(hmUI.prop.VISIBLE, visibility);
        this.messageTextWidget2.setProperty(hmUI.prop.VISIBLE, visibility);
        this.messageTextWidget3.setProperty(hmUI.prop.VISIBLE, visibility);
    }

    onDestroy() {
        
    }
}


Page({
    onInit(page) {
        logger.log("page onInit invoked");
        if (!page || page === 'undefined') page = "main";

        watchdrip = new Watchdrip(page);

    },
    build() {
        logger.log("page build invoked");
    },
    onDestroy() {
        logger.log("page onDestroy invoked");
        //watchdrip.onDestroy();
    }
});
