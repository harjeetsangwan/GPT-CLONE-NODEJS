// all dynamic pages user app folder in [id] folder .

import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params:{
    id:string;

  }
}


function ChatPage({params:{ id } }: Props  ) {
  return (
    // overflow hidden so that chats can be scrollable
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id}/>
      <ChatInput chatId={id}/>
    </div>
  );
}

export default ChatPage;