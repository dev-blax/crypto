import { SiEthereum, SiBitcoinsv, SiBinance, SiDogecoin } from 'react-icons/si'
import { FaLitecoinSign } from 'react-icons/fa6';
import { Input } from '@material-tailwind/react';
import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function Market() {
  return (
    <div className=' mb-24 '>
    <header className=' text-center text-brand-violet my-5 text-xl  '  > Crypto Markets </header>

    <div className=' text-center px-2 '>
      
      <div className=' my-4'>
        <Input variant='outlined' label='search for a coin' size='lg' color='indigo' />
      </div>
    </div>
    <div className=' flex flex-col gap-4 py-3 px-2'>

       <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
          <div className=' flex items-center gap-2'>
            <div className=' bg-blue-600 p-2 rounded-full '>
              <SiEthereum className=' h-6 w-6' />
            </div>
            <div className=' flex flex-col'>
              <span> Ethereum </span>
              <span className=' text-xs text-gray-500 '> ETH </span>
            </div>
          </div>
        
          <div className=' flex flex-col items-end'>
            <span > $0.06629 </span>
            <span className=' text-xs text-red-400'> -0.53% </span>
          </div>
       </div>

       <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded'>
          <div className=' flex items-center gap-2'>
            <div className=' bg-yellow-600 p-2 rounded-full '>
              <SiBitcoinsv className=' h-6 w-6 text-black ' />
            </div>
            <div className=' flex flex-col'>
              <span> Bitcoin </span>
              <span className=' text-xs text-gray-500 '> ETH </span>
            </div>
          </div>
        
          <div className=' flex flex-col items-end'>
            <span > $0.06629 </span>
            <span className=' text-xs text-green-400'> +0.58% </span>
          </div>
       </div>

       <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
          <div className=' flex items-center gap-2'>
            <div className=' bg-yellow-600 p-2 rounded-full '>
              <SiBinance className=' h-6 w-6 text-black ' />
            </div>
            <div className=' flex flex-col'>
              <span> Binance Coin </span>
              <span className=' text-xs text-gray-500 '> ETH </span>
            </div>
          </div>
        
          <div className=' flex flex-col items-end'>
            <span > $0.06629 </span>
            <span className=' text-xs text-green-400'> +0.58% </span>
          </div>
       </div>

       <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
          <div className=' flex items-center gap-2'>
            <div className=' bg-blue-900 p-2 rounded-full '>
              <FaLitecoinSign className=' h-6 w-6 ' />
            </div>
            <div className=' flex flex-col'>
              <span> Lite Coin </span>
              <span className=' text-xs text-gray-500 '> ETH </span>
            </div>
          </div>
        
          <div className=' flex flex-col items-end'>
            <span > $0.06629 </span>
            <span className=' text-xs text-green-400'> +0.58% </span>
          </div>
       </div>


       <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
          <div className=' flex items-center gap-2'>
            <div className=' bg-yellow-900 p-2 rounded-full '>
              <SiDogecoin className=' h-6 w-6 ' />
            </div>
            <div className=' flex flex-col'>
              <span> Dogecoin </span>
              <span className=' text-xs text-gray-500 '> ETH </span>
            </div>
          </div>
        
          <div className=' flex flex-col items-end'>
            <span > $0.06629 </span>
            <span className=' text-xs text-green-400'> +0.58% </span>
          </div>
       </div>

    </div>

    {/* <BottomNavBar /> */}
    <div className="fixed bottom-0 w-full flex justify-center bg-gray-700 rounded-full p-2 my-2 " >
                  <nav className="flex justify-between items-center space-x-4  w-full ">
                    <Link  to={'/'} className='p-3 rounded-full '>
                        <FaHome />
                    </Link>
                  
                    <Link  to={'/market'} className='p-3 rounded-full bg-brand-violet bg-opacity-50'>
                        <RiBarChart2Fill />
                    </Link>    
                    <Link to={'/promotion'} className='p-3 rounded-full'>
                        <GiTrophyCup />
                    </Link>

                    <Link to={'/agent'} className='p-3 rounded-full'>
                        <BsWalletFill />
                    </Link>

                    <Link to={'/account'} className='p-3 rounded-full'>
                        <MdAccountCircle />
                        </Link>
                  </nav>
            </div>
  </div>
  )
}
