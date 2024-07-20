import {CiUser} from 'react-icons/ci';

export default function UserMessage() {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1 w-8 h-8 border bg-slate-800 rounded-full mr-2'>
                <CiUser size={18}/>
            </div>

            <div>
                <div>User</div>
                <p>I need help with my computer</p>
            </div>
        </div>
    ) 
}