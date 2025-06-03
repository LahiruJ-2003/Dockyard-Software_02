"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsX, BsThreeDotsVertical } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { botData } from "@/data/botData";

const options = [
  { label: "💬 Chat with me", isChat: true },
  { label: "📞 Contact Us", link: "https://wa.me/94776970808" },
];

type Message = {
  sender: "user" | "bot";
  text: string;
  buttons?: { label: string; link: string }[];
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const menuRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const getBotResponse = (
    msg: string
  ): { text: string; buttons?: { label: string; link: string }[] } | null => {
    const lower = msg.toLowerCase();
    for (const entry of botData) {
      if (entry.keywords.some((kw) => lower.includes(kw))) {
        return { text: entry.answer, buttons: entry.buttons };
      }
    }
    return null; // Fallback handled in handleSend
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setSuggestions([]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(userMsg);

      if (botReply) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: botReply.text, buttons: botReply.buttons },
        ]);
      } else {
        // Custom fallback: Contact Us message and button
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Invalid input. If you need further help, please contact us below.",
          },
          {
            sender: "bot",
            text: "",
            buttons: [
              { label: "📞 Contact Us", link: "https://wa.me/94776970808" },
            ],
          },
        ]);
      }

      setIsTyping(false);
    }, 1200);
  };

  const handleSuggestionClick = (sug: string) => {
    setInput(sug);
  };

  const handleResetChat = () => {
    setShowChat(false);
    setShowMenu(false);
    setIsTyping(false);
    setSuggestions([]);
    setMessages([
      { sender: "bot", text: "Hi there! How can I help you today?" },
    ]);
  };

  const handleOptionClick = (opt: any) => {
    if (opt.isChat) {
      setShowChat(true);
    } else {
      window.open(opt.link, "_blank");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    });
    return () => {
      document.removeEventListener("mousedown", () => {});
    };
  }, []);

  useEffect(() => {
    if (!showChat) return;

    const filtered =
      input.trim() === ""
        ? botData
            .filter((e) => e.question)
            .slice(0, 5)
            .map((e) => e.question!)
        : botData
            .filter(
              (e) =>
                e.question &&
                e.question.toLowerCase().includes(input.toLowerCase())
            )
            .slice(0, 5)
            .map((e) => e.question!);

    setSuggestions(filtered);
  }, [input, showChat]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-[#0D0C1D] text-white rounded-2xl w-80 shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-700 to-violet-500 rounded-t-2xl">
            <h3 className="font-bold text-lg">DS Bot</h3>
            <div className="flex items-center gap-2">
              <div className="relative" ref={menuRef}>
                <button onClick={() => setShowMenu(!showMenu)}>
                  <BsThreeDotsVertical className="text-white text-lg" />
                </button>
                {showMenu && (
                  <div className="absolute right-0 top-8 bg-[#2F2E41] rounded-md shadow-md w-48 text-sm z-50">
                    <button
                      onClick={handleResetChat}
                      className="w-full px-4 py-2 flex gap-2 hover:bg-white hover:text-black"
                    >
                      <FiRefreshCcw className="text-orange-500" />
                      Restart Chat
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowChat(false);
                }}
              >
                <BsX className="text-white text-xl" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div
            className="p-4 text-sm space-y-2 max-h-[400px] overflow-y-auto"
            ref={messagesEndRef}
          >
            {!showChat ? (
              <>
                <div className="flex gap-2 items-start">
                  <img src="/ds logo.png" className="w-6 h-6 mt-1" />
                  <div>
                    <p className="text-white">Hi there! 👋</p>
                    <p className="text-zinc-300">
                      Welcome to Dockyard Software. How can I help you today?
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="w-full text-left px-4 py-2 bg-[#1E1D2B] hover:bg-[#2F2E41] rounded-lg"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex gap-2 max-w-[80%] items-start">
                      {msg.sender === "bot" && (
                        <img
                          src="/DS logo.png"
                          alt="Bot"
                          className="w-5 h-5 mt-1 rounded-full"
                        />
                      )}
                      <div
                        className={`px-3 py-2 rounded-lg text-sm ${
                          msg.sender === "user"
                            ? "bg-purple-600 text-white"
                            : "bg-[#2F2E41] text-white"
                        }`}
                      >
                        {msg.text}
                        {msg.buttons && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {msg.buttons.map((btn, idx) => (
                              <button
                                key={idx}
                                onClick={() => window.open(btn.link, "_blank")}
                                className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-xs"
                              >
                                {btn.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 items-center max-w-[80%]">
                      <img
                        src="/DS logo.png"
                        alt="Bot"
                        className="w-5 h-5 mt-1 rounded-full"
                      />
                      <div className="px-3 py-2 bg-[#2F2E41] text-white italic rounded-lg text-sm">
                        Bot is typing...
                      </div>
                    </div>
                  </div>
                )}
                {!isTyping && suggestions.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-zinc-400 mb-1">Suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(sug)}
                          className="bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded text-xs"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input */}
          {showChat && (
            <div className="flex items-center gap-2 border-t border-zinc-700 px-3 py-2 bg-[#1E1D2B]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-1 rounded bg-[#2F2E41] text-white text-sm"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                disabled={isTyping}
                className={`px-3 py-1 rounded text-sm text-white ${
                  isTyping
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800"
                }`}
              >
                Send
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 animate-slide-in">
          <div className="bg-white text-black text-sm px-3 py-2 rounded-lg shadow-md animate-pulse-slow">
            👋Need help? Chat with us!
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-full shadow-lg hover:scale-105 transition border-4 border-white"
          >
            <img
              src="/chatbot.gif"
              alt="Chat"
              className="w-14 h-14 rounded-full object-cover"
            />
          </button>
        </div>
      )}
    </div>
  );
}

// ___________________________________________________________________________________________________________________________________

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { BsX, BsThreeDotsVertical } from "react-icons/bs";
// import { FiRefreshCcw } from "react-icons/fi";
// import { botData } from "@/data/botData";

// const options = [
//   { label: "💬 Chat with me", isChat: true },
//   { label: "📞 Contact Us", link: "https://wa.me/94776970808" },
// ];

// type Message = {
//   sender: "user" | "bot";
//   text: string;
//   buttons?: { label: string; link: string }[];
// };

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const [showChat, setShowChat] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       sender: "bot",
//       text: "Hi there! How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   const router = useRouter();
//   const menuRef = useRef<HTMLDivElement>(null);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const getBotResponse = (
//     msg: string
//   ): { text: string; buttons?: { label: string; link: string }[] } => {
//     const lower = msg.toLowerCase();
//     for (const entry of botData) {
//       if (entry.keywords.some((kw) => lower.includes(kw))) {
//         return { text: entry.answer, buttons: entry.buttons };
//       }
//     }
//     return { text: "I'm still learning, Please try something else" };
//   };

//   useEffect(() => {
//     if (!showChat) return;

//     if (input.trim() === "") {
//       const popularQuestions = botData
//         .filter((entry) => entry.question)
//         .map((entry) => entry.question!)
//         .slice(0, 5);
//       setSuggestions(popularQuestions);
//     } else {
//       const filtered = botData
//         .filter(
//           (entry) =>
//             entry.question &&
//             entry.question.toLowerCase().includes(input.toLowerCase())
//         )
//         .map((entry) => entry.question!)
//         .slice(0, 5);
//       setSuggestions(filtered);
//     }
//   }, [input, showChat]);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMsg = input.trim();
//     setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
//     setInput("");
//     setSuggestions([]);
//     setIsTyping(true);

//     setTimeout(() => {
//       const botReply = getBotResponse(userMsg);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: botReply.text, buttons: botReply.buttons },
//       ]);
//       setIsTyping(false);
//     }, 1200);
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setInput(suggestion);
//   };

//   const handleResetChat = () => {
//     setShowChat(false);
//     setShowMenu(false);
//     setIsTyping(false);
//     setSuggestions([]);
//     setMessages([
//       {
//         sender: "bot",
//         text: "Hi there! How can I help you today?",
//       },
//     ]);
//   };

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setShowMenu(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
//     }
//   }, [messages, isTyping]);

//   const handleOptionClick = (option: any) => {
//     if (option.isChat) {
//       setShowChat(true);
//       setMessages([
//         {
//           sender: "bot",
//           text: "Hi there! How can I help you today?",
//         },
//       ]);
//     } else {
//       router.push(option.link);
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {isOpen ? (
//         <div className="bg-[#0D0C1D] text-white rounded-2xl w-80 shadow-2xl relative">
//           <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-700 to-violet-500 rounded-t-2xl">
//             <h3 className="font-bold text-lg">DS Bot</h3>
//             <div className="flex items-center space-x-2">
//               <div className="relative" ref={menuRef}>
//                 <button onClick={() => setShowMenu(!showMenu)}>
//                   <BsThreeDotsVertical className="text-white text-lg" />
//                 </button>
//                 {showMenu && (
//                   <div className="absolute right-0 top-8 bg-[#2F2E41] text-white rounded-md shadow-lg w-48 text-sm z-50">
//                     <button
//                       onClick={handleResetChat}
//                       className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-black w-full"
//                     >
//                       <FiRefreshCcw className="text-orange-500" />
//                       Restart Chat
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   setShowChat(false);
//                   setIsTyping(false);
//                 }}
//               >
//                 <BsX className="text-white text-xl" />
//               </button>
//             </div>
//           </div>

//           <div
//             className="p-4 text-sm space-y-2 max-h-[400px] overflow-y-auto"
//             ref={messagesEndRef}
//           >
//             {!showChat ? (
//               <>
//                 <div className="flex items-start gap-2">
//                   <img
//                     src="/ds logo.png"
//                     alt="Bot Icon"
//                     className="w-6 h-6 object-contain mt-1"
//                   />
//                   <div>
//                     <p className="text-white">Hi there! 👋</p>
//                     <p className="text-zinc-300">
//                       Welcome to Dockyard Software. How can I help you today?
//                     </p>
//                   </div>
//                 </div>
//                 <div className="space-y-2 mt-4">
//                   {options.map((opt, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => handleOptionClick(opt)}
//                       className="w-full text-left px-4 py-2 bg-[#1E1D2B] hover:bg-[#2F2E41] text-white rounded-lg text-sm transition"
//                     >
//                       {opt.label}
//                     </button>
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <>
//                 {messages.map((msg, idx) => (
//                   <div
//                     key={idx}
//                     className={flex ${
//                       msg.sender === "user" ? "justify-end" : "justify-start"
//                     }}
//                   >
//                     <div className="flex items-start gap-2 max-w-[80%]">
//                       {msg.sender === "bot" && (
//                         <img
//                           src="/DS logo.png"
//                           alt="Bot"
//                           className="w-5 h-5 mt-1 rounded-full"
//                         />
//                       )}
//                       <div
//                         className={px-3 py-2 rounded-lg text-sm ${
//                           msg.sender === "user"
//                             ? "bg-purple-600 text-white"
//                             : "bg-[#2F2E41] text-white"
//                         }}
//                       >
//                         {msg.text}
//                         {msg.buttons && (
//                           <div className="mt-2 flex flex-wrap gap-2">
//                             {msg.buttons.map((btn, i) => (
//                               <button
//                                 key={i}
//                                 onClick={() => router.push(btn.link)}
//                                 className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-xs"
//                               >
//                                 {btn.label}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 {isTyping && (
//                   <div className="flex justify-start">
//                     <div className="flex items-center gap-2 max-w-[80%]">
//                       <img
//                         src="/DS logo.png"
//                         alt="Bot"
//                         className="w-5 h-5 mt-1 rounded-full"
//                       />
//                       <div className="px-3 py-2 rounded-lg text-sm bg-[#2F2E41] text-white italic">
//                         Bot is typing...
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {!isTyping && suggestions.length > 0 && (
//                   <div className="mt-2">
//                     <p className="text-xs text-zinc-400 mb-1">Suggestions:</p>
//                     <div className="flex flex-wrap gap-2">
//                       {suggestions.map((sug, i) => (
//                         <button
//                           key={i}
//                           onClick={() => handleSuggestionClick(sug)}
//                           className="bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded text-xs"
//                         >
//                           {sug}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>

//           {showChat && (
//             <div className="flex items-center gap-2 border-t border-zinc-700 px-3 py-2 bg-[#1E1D2B]">
//               <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                 className="flex-1 px-3 py-1 rounded bg-[#2F2E41] text-white text-sm"
//                 placeholder="Type your message..."
//               />
//               <button
//                 onClick={handleSend}
//                 disabled={isTyping}
//                 className={px-3 py-1 rounded text-sm text-white ${
//                   isTyping
//                     ? "bg-gray-500 cursor-not-allowed"
//                     : "bg-purple-700 hover:bg-purple-800"
//                 }}
//               >
//                 Send
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="flex items-center gap-2 animate-slide-in">
//           <div className="bg-white text-black text-sm px-3 py-2 rounded-lg shadow-md relative animate-pulse-slow">
//             👋Need help? Chat with us!
//           </div>
//           <button
//             onClick={() => setIsOpen(true)}
//             className="p-2 rounded-full shadow-lg hover:scale-105 transition transform duration-200 border-4 border-white"
//           >
//             <img
//               src="/chatbot.gif"
//               alt="Chat"
//               className="w-14 h-14 object-cover rounded-full"
//             />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
