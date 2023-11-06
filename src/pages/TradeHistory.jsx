import { SiEthereum, SiBitcoinsv, SiBinance, SiDogecoin } from 'react-icons/si'
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

export default function TradeHistory() {
  return (
    <div>
        <div className=" flex items-center justify-between p-2">
                <Link to={'/account'} className=" flex items-center gap-1 text-brand-violet  ">
                    <IoChevronBack />
                    <span> back </span>
                </Link>
            </div>
        <header className=' text-center text-brand-violet my-3 ' >Trade History</header>

        <div className=' mx-3 flex flex-col gap-4 ' >
            <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
                <div className=' flex items-center gap-2'>
                    <div className=' bg-blue-600 p-2 rounded-full '>
                    <SiEthereum className=' h-6 w-6' />
                    </div>
                    <div className=' flex flex-col'>
                    <span> BUY </span>
                    <span className=' text-xs text-gray-500 '> ETH </span>
                    </div>
                </div>
            
                <div className=' flex flex-col items-end'>
                    <span className='text-cyan-400' > $0.06629 </span>
                    <span className=' text-xs'> Octobe 31, 2023 </span>
                </div>
            </div>

            <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
                <div className=' flex items-center gap-2'>
                    <div className=' bg-yellow-600 p-2 rounded-full '>
                    <SiBitcoinsv className=' h-6 w-6' />
                    </div>
                    <div className=' flex flex-col'>
                    <span> BUY </span>
                    <span className=' text-xs text-gray-500 '> BTC </span>
                    </div>
                </div>
            
                <div className=' flex flex-col items-end'>
                    <span className='text-cyan-400' > $0.03649 </span>
                    <span className=' text-xs'> Octobe 30, 2023 </span>
                </div>
            </div>

            <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
                <div className=' flex items-center gap-2'>
                    <div className=' bg-blue-600 p-2 rounded-full '>
                    <SiEthereum className=' h-6 w-6' />
                    </div>
                    <div className=' flex flex-col'>
                    <span> SELL </span>
                    <span className=' text-xs text-gray-500 '> ETH </span>
                    </div>
                </div>
            
                <div className=' flex flex-col items-end'>
                    <span className='text-cyan-400' > $0.08689 </span>
                    <span className=' text-xs'> Octobe 30, 2023 </span>
                </div>
            </div>

            <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
                <div className=' flex items-center gap-2'>
                    <div className=' bg-yellow-600 p-2 rounded-full '>
                    <SiBinance className=' h-6 w-6' />
                    </div>
                    <div className=' flex flex-col'>
                    <span> SELL </span>
                    <span className=' text-xs text-gray-500 '> BNC </span>
                    </div>
                </div>
            
                <div className=' flex flex-col items-end'>
                    <span className='text-cyan-400' > $0.00766 </span>
                    <span className=' text-xs'> Octobe 29, 2023 </span>
                </div>
            </div>

            <div className=' flex items-center justify-between bg-blue-gray-900 p-3 rounded '>
                <div className=' flex items-center gap-2'>
                    <div className=' bg-yellow-600 p-2 rounded-full '>
                    <SiDogecoin className=' h-6 w-6' />
                    </div>
                    <div className=' flex flex-col'>
                    <span> BUY </span>
                    <span className=' text-xs text-gray-500 '> DGC </span>
                    </div>
                </div>
            
                <div className=' flex flex-col items-end'>
                    <span className='text-cyan-400' > $0.09942 </span>
                    <span className=' text-xs'> Octobe 27, 2023 </span>
                </div>
            </div>
        </div>
    </div>
  )
}
