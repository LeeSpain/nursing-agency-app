import React from "react";
import { MessageCircle, Send, Search, Phone, Video, MoreVertical, Paperclip, Image, Smile, Clock, CheckCircle, Brain, Users } from "lucide-react";

const ContactList = ({ contacts }) => (
 <div className="h-[calc(100vh-12rem)] overflow-y-auto">
   <div className="p-4 sticky top-0 bg-white border-b">
     <div className="relative">
       <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
       <input
         type="text"
         placeholder="Search messages..."
         className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
       />
     </div>
   </div>
   
   <div className="divide-y divide-slate-200">
     {contacts.map((contact, i) => (
       <button key={i} className="w-full text-left hover:bg-slate-50 transition-colors">
         <div className="flex items-center gap-4 p-4">
           <div className="relative">
             {contact.type === 'human' ? (
               <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
             ) : (
               <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                 {contact.type === 'ai' ? (
                   <Brain className="w-6 h-6 text-violet-500" />
                 ) : (
                   <Users className="w-6 h-6 text-blue-500" />
                 )}
               </div>
             )}
             {contact.online && (
               <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
             )}
           </div>
           
           <div className="flex-1 min-w-0">
             <div className="flex justify-between items-baseline">
               <h3 className="font-medium text-slate-900 truncate">{contact.name}</h3>
               <span className="text-xs text-slate-500">{contact.time}</span>
             </div>
             <p className="text-sm text-slate-500 truncate">{contact.lastMessage}</p>
           </div>

           {contact.unread > 0 && (
             <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
               {contact.unread}
             </div>
           )}
         </div>
       </button>
     ))}
   </div>
 </div>
);

const ChatWindow = () => (
 <div className="flex flex-col h-[calc(100vh-12rem)]">
   <div className="p-4 border-b flex justify-between items-center">
     <div className="flex items-center gap-4">
       <img src="https://via.placeholder.com/40" alt="" className="w-10 h-10 rounded-full" />
       <div>
         <h2 className="font-medium text-slate-900">Maria Gonzales</h2>
         <div className="flex items-center gap-2 text-sm text-slate-500">
           <div className="w-2 h-2 rounded-full bg-green-500"></div>
           Online
         </div>
       </div>
     </div>
     
     <div className="flex items-center gap-4">
       <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
         <Phone className="w-5 h-5" />
       </button>
       <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
         <Video className="w-5 h-5" />
       </button>
       <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
         <MoreVertical className="w-5 h-5" />
       </button>
     </div>
   </div>

   <div className="flex-1 overflow-y-auto p-4 space-y-4">
     {/* Messages */}
     <div className="flex gap-3">
       <img src="https://via.placeholder.com/32" alt="" className="w-8 h-8 rounded-full" />
       <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
         <p className="text-slate-700">How can I help you today?</p>
         <span className="text-xs text-slate-500 mt-1">10:30 AM</span>
       </div>
     </div>

     <div className="flex gap-3 flex-row-reverse">
       <div className="bg-emerald-500 text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
         <p>I have a question about my medication schedule.</p>
         <span className="text-xs text-emerald-50 mt-1">10:32 AM</span>
       </div>
     </div>
   </div>

   <div className="p-4 border-t bg-white">
     <div className="flex items-center gap-2">
       <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
         <Paperclip className="w-5 h-5" />
       </button>
       <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
         <Image className="w-5 h-5" />
       </button>
       <input 
         type="text" 
         placeholder="Type your message..." 
         className="flex-1 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
       />
       <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
         <Smile className="w-5 h-5" />
       </button>
       <button className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
         <Send className="w-5 h-5" />
       </button>
     </div>
   </div>
 </div>
);

const MessagePage = () => {
  const contacts = [
    {
      type: 'human',
      name: 'Maria Gonzales',
      avatar: 'https://via.placeholder.com/100',
      lastMessage: "Hi, I will be available at 2 PM.",
      time: '12:30 PM',
      online: true,
      unread: 2
    },
    {
      type: 'ai',
      name: 'AI Guardian',
      lastMessage: 'Your health metrics look good today.',
      time: '11:15 AM',
      online: true,
      unread: 0
    },
    {
      type: 'group',
      name: 'Family Group',
      lastMessage: 'Latest vital signs update: stable',
      time: '10:45 AM',
      online: false,
      unread: 1
    }
  ];

 return (
   <div className="min-h-screen bg-slate-50">
     <main className="max-w-7xl mx-auto px-4 py-8 mt-20">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
         <div className="border-r border-slate-200">
           <ContactList contacts={contacts} />
         </div>
         <div className="md:col-span-2">
           <ChatWindow />
         </div>
       </div>
     </main>
   </div>
 );
};

export default MessagePage;