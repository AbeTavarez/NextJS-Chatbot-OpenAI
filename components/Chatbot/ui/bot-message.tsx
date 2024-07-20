import {RiRobot3Line} from 'react-icons/ri';

export default function BotMessage() {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1 w-8 h-8 border bg-slate-800 rounded-full mr-2'>
                <RiRobot3Line size={18}/>
            </div>

            <div>
                <div>Bot</div>
                <p>Hello, how can i help you?</p>
            </div>
        </div>
    ) 
}