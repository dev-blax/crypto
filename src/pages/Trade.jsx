
import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ApexCandleStick from '../components/ApexCandleStick';

export default function Trade() {
  return (
    <div className=''>
    <header className=' text-center text-brand-violet my-2 text-xl '  > Trade </header>

    <div className='  '>
        <ApexCandleStick />
    </div>

    {/* <BottomNavBar /> */}
    <div className="fixed bottom-0 w-full flex justify-center bg-gray-700 rounded-full p-2 my-2 " >
        <nav className="flex justify-between items-center space-x-4  w-full ">
          <Link  to={'/'} className='p-3 rounded-full '>
              <FaHome />
          </Link>
        
          <Link  to={'/market'} className='p-3 rounded-full'>
              <RiBarChart2Fill />
          </Link>    
          <Link to={'/promotion'} className='p-3 rounded-full'>
              <GiTrophyCup />
          </Link>

          <Link to={'/agent'} className='p-3 rounded-full  bg-brand-violet bg-opacity-50'>
              <BsWalletFill />
          </Link>

          <Link to={'/account'} className='p-3 rounded-full '>
              <MdAccountCircle />
              </Link>
        </nav>
      </div>
  </div>
  )
}
