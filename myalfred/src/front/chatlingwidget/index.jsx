import React, { useEffect } from "react";

const ChatlingWidget = ({ mode = "default", displayId }) => {
  useEffect(() => {
    // Define a configuração com base no modo
    window.chtlConfig = {
      chatbotId: "3858566848",
      ...(mode === "inline" && { display: "page_inline" }),
    };

    // Adiciona o script ao DOM apenas se ainda não estiver presente
    if (!document.getElementById("chatling-embed-script")) {
      const script = document.createElement("script");
      script.async = true;
      script.id = "chatling-embed-script";
      script.type = "text/javascript";
      script.src = "https://chatling.ai/js/embed.js";
      document.body.appendChild(script);
    }

    // Cleanup opcional (remover script, se necessário)
    return () => {
      // document.body.removeChild(script); // Apenas se necessário desmontar completamente
    };
  }, [mode]); // Reexecuta caso o modo seja alterado

  // Retorna o container para o bot inline, se necessário
  if (mode === "inline") {
    return (
      <div
        id={displayId || "chatling-inline-bot"}
        style={{ height: "100%", padding: "0px !important" }}
      ></div>
    );
  }

  return null; // Widget padrão não precisa de um elemento visual
};

export default ChatlingWidget;
