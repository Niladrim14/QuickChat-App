import {useChatStore} from "../store/useChatstore.js"
import {useAuthStore} from "../store/useAuthStore.js"
import {useEffect, useRef} from "react";


import ChatHeader from "./ChatHeader.jsx";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder.jsx";
import MeassageInput from "./MeassageInput.jsx";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton.jsx";

function ChatContainer() {
  const {messages, selectedUser, getMessagesByUserId, isMessagesLoading, subscribeToMessages, unsubscribeFromMessages, subscribeToTyping, isTyping} = useChatStore();
  const {authUser} = useAuthStore();
  const messageEndRef = useRef(null);
  
  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();
    subscribeToTyping();
    return () => { unsubscribeFromMessages(); };
  }, [selectedUser._id, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages, subscribeToTyping]);

   useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
    <ChatHeader />
    <div className="flex-1 px-6 overflow-y-auto py-8 ">
      {messages.length > 0 && !isMessagesLoading ? (
      
        <div className=" max-w-3xl flex flex-col mx-auto space-y-6">

          {messages.map(msg =>(

         <div
                key={msg._id}
                className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble relative ${
                    msg.senderId === authUser._id
                      ? "bg-emerald-600/30 text-white" 
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {msg.image && (
                    <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
                  )}
                  {msg.text && <p className="mt-2">{msg.text}</p>}
                  <p className="text-xs mt-1 opacity-75 flex items-center gap-1">
                    {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            
              
          ))}
          <div ref={messageEndRef}></div>
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="chat chat-start">
              <div className="chat-bubble bg-slate-800 text-slate-200">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}

        </div>
        
      ) : (isMessagesLoading ? <MessagesLoadingSkeleton /> : (
        <NoChatHistoryPlaceholder name={selectedUser.fullName} />
      ))}
    </div>
      <MeassageInput />
    </div>
  )
}

export default ChatContainer; 