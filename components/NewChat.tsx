'use-client'
import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {db} from "../firebase"

// type Props={
//     id:string;
// };

function NewChat(  ) {
    // getting router so that user can be navigated to a newer page
    const router=useRouter();
    const { data:session } = useSession();
    const createNewChat = async () => {
        const doc = await addDoc(
            // declaring databse where we would be storing values(collection ,document - nosql)
            collection(db,"users",session?.user?.email!,"chats"),{
                // messages:[],
                userID:session?.user?.email!,
                createdAt: serverTimestamp()
            }
        );
        // redirect user to chat screen
        router.push(`/chat/${doc.id}`)

    };

  return (    
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
        <PlusIcon className='h-4 w-4' />
        <p>NewChat</p>
        </div>
  )
}

export default NewChat