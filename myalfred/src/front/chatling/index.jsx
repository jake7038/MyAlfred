import { useEffect } from "react";

const ChatlingBot = () => {
    useEffect(() => {

    window.chtlConfig = {
        chatbotId: "3858566848",
        display: "page_inline",
    };
    const script = document.createElement("script");
    script.async = true;
    script.id = "chatling-embed-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    script.setAttribute("data-id", "3858566848");
    script.setAttribute("data-display", "page_inline");
    }, []);

    return (
    <div
        id="chatling-inline-bot"
        style={{ width: "100%", height: "100%" }}
    ></div>
    );
};

export default ChatlingBot;
