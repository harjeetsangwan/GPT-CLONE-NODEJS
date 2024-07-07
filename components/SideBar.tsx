'use client'
import { useSession, signOut } from 'next-auth/react';
import NewChat from './NewChat';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from './ChatRow';
function SideBar() {
  const { data:session}= useSession();
  // gives the realtime list of chats
  const [chats,loading,error]=useCollection(
    session &&
    query(
    collection(db,"users",session.user?.email!,"chats"),
    orderBy("createdAt","asc")
    )
  );
  console.log(chats);
  return (
    < div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* {newchat} */}
          <NewChat/>

          <div>
            {/* model selection */}
          </div>
          {/* {map through the chatros} */}
          {chats?.docs.map(chat =>(
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && <img
      onClick={()=> signOut()}
      src={session.user?.image!} alt='Profile pic' 
      className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'/>}
      <p>logout</p>
    </div>
  );
}

export default SideBar