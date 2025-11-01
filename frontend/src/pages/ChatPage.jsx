import React from 'react'
import { useAuthStore } from '../store/useAuthStore.js';
import { useChatStore } from '../store/useChatstore.js';

import BoarderAnimatedContainer from '../components/BoarderAnimatedContainer.jsx';

import ProfileHeader from "../components/ProfileHeader.jsx";
import ActiveTabSwitch from "../components/ActiveTabSwitch.jsx";
import ChatList from "../components/ChatList.jsx";
import ContactList from "../components/ContactList.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import NoConversationPlaceHolder from "../components/NoConversationPlaceHolder.jsx";


function ChatPage() {
  const { logout } = useAuthStore();
  const { activeTab, selectedUser } = useChatStore();

  return (
  <div className='relative w-full max-w-6xl h-[800px]'>
    <BoarderAnimatedContainer>
      {/** Sidebar **/}
      <div className='w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col'>
         <ProfileHeader/>
         <ActiveTabSwitch/>
         <div className='flex-1 overflow-y-auto p-4 space-y-2 '>

          {activeTab === 'chats' ? <ChatList/> : <ContactList/>}
         </div>
      </div>

        {/** Chat Area **/}
      <div className='flex-1 bg-slate-700/50 backdrop-blur-sm relative'>
        {selectedUser ? <ChatContainer/> : <NoConversationPlaceHolder/>}
      </div>

    </BoarderAnimatedContainer>
  </div>
  );
  
  
  
}

export default ChatPage;