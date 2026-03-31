/**
 * Dependencies:
 * - Lucide React (for icons): npm install lucide-react
 * - Tailwind CSS (for styling)
 */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Store, RefreshCw } from "lucide-react";
import { chatbotConfig } from "./chatbot-config";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial_msg",
      role: "bot",
      content: chatbotConfig.welcomeMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Send conversation history to the API for context
      // Note: adjust the path if you place 'route.ts' differently
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat(userMessage)
            .map((msg) => ({ role: msg.role === "bot" ? "assistant" : "user", content: msg.content })),
        }),
      });

      if (!response.ok) {
        throw new Error("Mạng có thể đang chập chờn, bạn thử lại sau nhe!");
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: "Xin lỗi, hiện tại mình không thể trả lời được. Hãy thử lại chút nữa nhé hoặc gọi hotline 0901234567 nha!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const hasMessages = messages.length > 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 sm:w-[90vw] sm:h-[80vh] sm:max-w-[400px]">
          {/* Header */}
          <div className="bg-amber-600 text-white px-4 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <Store size={20} />
              <div>
                <h3 className="font-semibold text-sm">{chatbotConfig.shopName}</h3>
                <p className="text-xs text-amber-100 opacity-90">Trợ lý tiệm bánh 👋</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-amber-700 p-1.5 rounded-full transition-colors text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-amber-50/50 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={"flex w-full " + (msg.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={
                    "max-w-[85%] text-sm rounded-2xl px-4 py-2 " +
                    (msg.role === "user"
                      ? "bg-amber-600 text-white rounded-tr-none"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none leading-relaxed")
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Quick replies */}
            {!hasMessages && (
              <div className="flex flex-wrap gap-2 mt-2">
                {chatbotConfig.quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full hover:bg-amber-50 transition-colors shadow-sm"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex w-full justify-start">
                <div className="bg-white text-gray-400 text-sm shadow-sm border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer (Input) */}
          <div className="bg-white border-t border-gray-100 p-3">
            <div className="flex items-center bg-gray-50 rounded-full pr-1 shadow-inner border border-gray-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập tin nhắn..."
                className="flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none text-gray-700"
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 disabled:opacity-50 disabled:hover:bg-amber-600 transition-colors"
                aria-label="Gửi"
              >
                <Send size={16} className={isLoading ? "animate-pulse" : ""} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 group"
          aria-label="Tư vấn nhanh"
        >
          <MessageCircle size={26} />
          {/* Tooltip visible on hover */}
          <span
            className={
              "absolute right-16 px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-lg shadow-md whitespace-nowrap transition-all duration-300 pointer-events-none " +
              (isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2")
            }
          >
            Tư vấn nhanh 👋
          </span>
        </button>
      )}
    </div>
  );
}
