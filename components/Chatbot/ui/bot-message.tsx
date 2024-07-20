import {RiRobot3Line} from 'react-icons/ri';
import { Message } from '../chatbot';



export default function BotMessage({role, content}: Message) {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1 w-8 h-8 border bg-slate-800 rounded-full mr-2'>
                <RiRobot3Line size={18}/>
            </div>

            <div>
                <div>{role}</div>
                <p>{content}</p>
            </div>
        </div>
    ) 
}