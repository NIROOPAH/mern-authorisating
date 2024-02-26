import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <div className='bg-sky-500'>
       <div className='flex justify-between items-center max-w-1xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold'>Authorisation App</h1>
        </Link>
        <ul className='flex gap-6'>
            <Link to='/'>
            <li className='text-black'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='text-black'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-black'>SignIn</li>
            </Link>

        </ul>
       </div>

    </div>
  )
}
