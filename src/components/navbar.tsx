import { Squirrel } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="flex justify-between items-center py-4 bg-transparent backdrop-blur-md sticky top-0 z-10">
            <ul className="flex gap-4 justify-between items-center w-full">
                <div className='flex gap-2 justify-center items-center'>
                    <Squirrel size={32} />
                    <h5 className='font-bold text-xl'>Qolby Oby</h5>
                </div>
                <div className='flex gap-3'>
                    <Link to={'/'} >
                        <span className={location.pathname === '/' ? 'text-red-400 font-bold text-lg' : 'font-bold text-lg'}>Home</span>
                    </Link>
                    <Link to={'/portfolio'} >
                        <span className={location.pathname === '/portfolio'  ? 'text-red-400 font-bold text-lg' : 'font-bold text-lg'}>Portfolio</span>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}
