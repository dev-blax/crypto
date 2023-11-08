import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-tailwind/react';

export default function Promotion() {

  const handleCopyToClipboard = async () => {
    const referralURL = 'https://crypto.co.tz/register?invite=234567Le';

    try {
        await navigator.clipboard.writeText(referralURL);
        alert('referral code copied to clipboard');
    } catch (err) {
        console.error('Failed to copy URL to clipboard', err);
    }
};


  return (
    <div className="">
      <header className=" text-brand-violet text-center p-3 " > Referral Code </header>

      <div  className='p-3'>
          <Typography className=''> Referral URL and Tree </Typography>
          <div className=' mt-3 p-3 rounded-md bg-blue-gray-900 '>
              <div className=' flex flex-col gap-3'>
                <div className=' border border-indigo-600 p-2 overflow-hidden rounded-md '>
                  <Typography variant='small' className=''> https://crypto.co.tz/register?invite=234567Le </Typography>
                </div>

                <Button  fullWidth className=' max-w-[600px] mx-auto bg-brand-violet ' onClick={handleCopyToClipboard} > Copy </Button>
              </div>

              <div className=' mt-3'>
                <Typography variant='small' color='pink'> 3 people have registered using this url  </Typography>
              </div>
          </div>

          <div className=' mt-10'>
              <div className=' flex items-center justify-between '>
                <Typography> Total commissions </Typography>
                <Typography color='purple'> $0.3 </Typography>
              </div>

              <div className=' flex flex-col gap-2 mt-3'>
                <div  className=' flex items-center justify-between bg-gray-700 p-3 rounded-md ' >
                  <div className=' flex items-center gap-1  '>
                    <MdAccountCircle className=' text-blue-gray-200 h-6 ' />
                    <Typography> Agnes Clax  </Typography>
                  </div>

                  <Typography> $ 0.1 </Typography>
                </div>

                <div  className=' flex items-center justify-between bg-gray-700 p-3 rounded-md ' >
                  <div className=' flex items-center gap-1  '>
                    <MdAccountCircle className=' text-blue-gray-200 h-6 ' />
                    <Typography> Michael Stani  </Typography>
                  </div>

                  <Typography> $ 0.1 </Typography>
                </div>

                <div  className=' flex items-center justify-between bg-gray-700 p-3 rounded-md ' >
                  <div className=' flex items-center gap-1  '>
                    <MdAccountCircle className=' text-blue-gray-200 h-6 ' />
                    <Typography> Vicky Marwa  </Typography>
                  </div>

                  <Typography> $ 0.1 </Typography>
                </div>
              </div>

          </div>
      </div>

      {/* <BottomNavBar tab='trophy' /> */}

      <div className="fixed bottom-0 w-full flex justify-center bg-gray-700 rounded-full p-2 my-2 " >
                  <nav className="flex justify-between items-center space-x-4  w-full ">
                    <Link  to={'/'} className='p-3 rounded-full '>
                        <FaHome />
                    </Link>
                  
                    <Link  to={'/market'} className='p-3 rounded-full '>
                        <RiBarChart2Fill />
                    </Link>    
                    <Link to={'/promotion'} className='p-3 rounded-full bg-brand-violet bg-opacity-50'>
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
