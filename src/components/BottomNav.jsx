
import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';

import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useState  } from 'react';


function BottomNav() {
    
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab); 
      };

  return (
    <div className=" fixed bottom-0  w-full max-w-[400px] my-2 bg-white bg-opacity-20 py-2 px-3  bg-blur text-white rounded-full " >
    <div className='text-center align-middle'>
    <div className=" flex items-center justify-between">
        <Link  to={'/'} className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-brand-violet bg-opacity-50' : ''}`}
        onClick={() => handleTabClick('home')}>
            <FaHome />
        </Link>
        <Link  to={'/trade'} className={`p-3 rounded-full ${activeTab === 'wallet' ? 'bg-brand-violet bg-opacity-50' : ''}`}
        onClick={() => handleTabClick('wallet')}>
            <RiBarChart2Fill />
        </Link>
        <Link to={'/promotion'} className={`p-3 rounded-full ${activeTab === 'trophy' ? 'bg-brand-violet bg-opacity-50' : ''}`}
        onClick={() => handleTabClick('trophy')}>
            <GiTrophyCup />
        </Link>
        <Link to={'/agent'} className={`p-3 rounded-full ${activeTab === 'music' ? 'bg-brand-violet bg-opacity-50' : ''}`}
        onClick={() => handleTabClick('music')}>
            <BsWalletFill />
        </Link>
        <Link to={'/account'} className={`p-3 rounded-full ${activeTab === 'account' ? 'bg-brand-violet bg-opacity-50' : ''}`}
        onClick={() => handleTabClick('account')}>
            <MdAccountCircle />
        </Link>
    </div>
    </div>
</div>
  )
}

export default BottomNav