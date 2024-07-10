import { db } from "@/firebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id:string;
};


function ChatRow( {id}:Props) {
  const pathname = usePathname();
  const router = useRouter();
  const {data: session} = useSession();
  // use effect
  const [active,setActive] = useState(false);

  const [messages] = useCollection(

      collection(db,"users",session?.user?.email!,"chats",id,"messages")

    
  );
  useEffect(() =>{
    if (!pathname) return;

    setActive(pathname.includes(id));
  },[pathname] );
  // delete a chat
  const removeChat = async() => {
    await deleteDoc(doc(db,'users',session?.user?.email! , 'chats', id));
    router.replace("/");
  }

  return (
    <Link href={`/chat/${id}`} className={`chatRoq justify-center`} >
      <div className="flex mb-2 ">
      <ChatBubbleLeftIcon className="h-5 w-5" />

<p className="flex-1 hidden md:inline-flex truncare text-white pl-3">
  {messages?.docs[messages?.docs.length -1]?.data().text || "New Chat" }
</p>

<TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-700 hover:text-red-700" />
      </div>
  
    </Link>
  )
}

export default ChatRow