// "use client";

// import { useState } from "react";
// import { useAIChatStream } from "next-ai-stream/client";

// const AIChat = () => {
//   const [inputText, setInputText] = useState("");

//   const { messages, submitNewMessage, loading } = useAIChatStream({
//     apiEndpoint: "/api/chat",
//     systemPrompt: `You are a helpful AI assistant. Be very succinct in your responses because I don't want drop all my cash on tokens.`,
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;

//     submitNewMessage(inputText);
//     setInputText("");
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center p-8 pb-36">
//       <div className="flex flex-col gap-8 w-full max-w-4xl">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`p-4 rounded-2xl max-w-[70%] ${
//               message.role === "user"
//                 ? "bg-slate-800 text-white ml-auto"
//                 : "bg-slate-900 text-gray-200 mr-auto"
//             }`}
//           >
//             {message.content as string}
//           </div>
//         ))}
//       </div>

//       <div className="fixed bottom-0 w-full bg-black/90 backdrop-blur-sm py-6">
//         <form
//           onSubmit={handleSubmit}
//           className="flex items-center justify-center gap-4"
//         >
//           <input
//             className="rounded-lg p-4 bg-slate-800 w-[500px]"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             placeholder="Ask something..."
//           />

//           <button
//             className={`bg-slate-800 p-4 rounded-lg ${
//               loading ? "opacity-50" : ""
//             }`}
//             type="submit"
//             disabled={loading}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AIChat;

// "use client";

// import { useState } from "react";
// import { useAIChatStream } from "next-ai-stream/client";
// import { X } from "lucide-react";

// const AIChat = ({ onClose }: { onClose: () => void }) => {
//   const [inputText, setInputText] = useState("");

//   const { messages, submitNewMessage, loading } = useAIChatStream({
//     apiEndpoint: "/api/chat",
//     systemPrompt: `You are a helpful AI assistant. Be very succinct in your responses because I don't want drop all my cash on tokens.`,
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;
//     submitNewMessage(inputText);
//     setInputText("");
//   };

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-sm border-t border-gray-700 z-50">
//       <div className="relative max-w-4xl mx-auto p-6">
//         <button
//           className="absolute top-2 right-2 text-white hover:text-red-400"
//           onClick={onClose}
//         >
//           <X size={20} />
//         </button>

//         <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`p-4 rounded-2xl max-w-[70%] ${
//                 message.role === "user"
//                   ? "bg-slate-800 text-white ml-auto"
//                   : "bg-slate-900 text-gray-200 mr-auto"
//               }`}
//             >
//               {message.content as string}
//             </div>
//           ))}
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="flex items-center justify-center gap-4"
//         >
//           <input
//             className="rounded-lg p-4 bg-slate-800 w-full"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             placeholder="Ask something..."
//           />
//           <button
//             className={`bg-slate-800 p-4 rounded-lg ${
//               loading ? "opacity-50" : ""
//             }`}
//             type="submit"
//             disabled={loading}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AIChat;

// "use client";

// import { useState } from "react";
// import { useAIChatStream } from "next-ai-stream/client";
// import { X } from "lucide-react";

// const AIChat = ({ onClose }: { onClose: () => void }) => {
//   const [inputText, setInputText] = useState("");

//   const { messages, submitNewMessage, loading } = useAIChatStream({
//     apiEndpoint: "/api/chat",
//     systemPrompt: `You are a helpful AI assistant. Be very succinct in your responses because I don't want drop all my cash on tokens.`,
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;
//     submitNewMessage(inputText);
//     setInputText("");
//   };

//   return (
//     <div className="fixed bottom-20 right-6 z-50 w-[360px] max-h-[500px] bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col overflow-hidden animate-slide-in">
//       {/* Header with close button */}
//       <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
//         <span className="font-semibold text-sm">AI Assistant</span>
//         <button onClick={onClose} className="hover:text-red-400">
//           <X size={18} />
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
//               message.role === "user"
//                 ? "bg-blue-600 text-white ml-auto"
//                 : "bg-white text-black mr-auto border"
//             }`}
//           >
//             {message.content as string}
//           </div>
//         ))}
//       </div>

//       {/* Input form */}
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center gap-2 p-3 bg-white border-t"
//       >
//         <input
//           className="flex-1 px-4 py-2 rounded-full border text-sm bg-gray-100"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           placeholder="Ask something..."
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full disabled:opacity-50"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AIChat;
