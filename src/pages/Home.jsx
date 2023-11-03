import { Badge, Button, IconButton, Typography, Dialog, DialogHeader, DialogBody, DialogFooter,   Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    } from "@material-tailwind/react";
import { useState } from "react";
import { FaBell } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { PriceChart } from "../components/PriceChart";

export default function Home() {

    const [openDeposit, setOpenDiposit] = useState(false);
    const [openWithdraw, setOpenWithdraw] = useState(false);

    const handleOpenDeposit = () => setOpenDiposit(!openDeposit);
    const handleOpenWithdraw = ( )=> setOpenWithdraw(!openWithdraw);


  return (
    <div className=" pb-20 bg-brand-gray min-h-screen ">

        {/* top section */}
        <div className=" m-1 pt-8 p-5 rounded-xl bg-gradient-to-tr from-[#7264ff] to-pink-600 text-brand-white flex flex-col gap-8 " >

            <div className=" flex items-start justify-between" >
                {/* name section */}
                <Link to={'/account'} className=" flex items-center gap-3 rounded-full bg-white p-2 bg-opacity-20  ">
                    <img src="images/profile.jpg" className=" h-8 w-8 rounded-full " alt="" />

                    <Typography as={"span"} variant="paragraph" > Cathy Chris </Typography>
                </Link>

                {/* bell section */}
                <Link to={'/market'}>
                    <Badge className=" bg-brand-violet">
                        <IconButton className="bg-white bg-opacity-20" >
                            <FaBell />
                        </IconButton>
                    </Badge>
                </Link>
            </div>

            {/* balance */}
            <div className=" flex items-center justify-between">
                <div>
                    <Typography as={'span'} variant="small" className=" text-gray-300 " > Total Balance </Typography>
                    <Typography as={"span"} variant="h4"> 120,000/=  </Typography>
                </div>

                <Dialog 
                    open={openDeposit}
                    handler={handleOpenDeposit}
                    animate={{
                        mount: { scale: 1, y:0 },
                        unmount: { scale: 0.9, y : -100 }
                    }}
                >
                    <DialogHeader className=" text-2xl" > Deposit Instructions </DialogHeader>
                    <DialogBody>
                    <Timeline >
                        <TimelineItem  >
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none">
                            Step 1
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gary" className="font-normal text-gray-600">
                            Create and login to your Binance Account
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none">
                            Step 2
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gary" className="font-normal text-gray-600">
                            On the dashboard, select the send button and enter the receiver account as <span className=" text-brand-violet " >XXX-XXX-XXX</span>, with your <span className=" text-brand-violet ">Crypto Email</span> as referal code. Make sure your binance account has a minimum credit of  <span className=" font-bold text-black" >$5.0</span> 
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none">
                            Step 3
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody>
                            <Typography variant="small" color="gary" className="font-normal text-gray-600">
                            In less than 10 minutes, your crypto account will be loaded with your new balance.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                    </DialogBody>
                    <DialogFooter>
                   
                    <Button variant="gradient" color="purple" onClick={handleOpenDeposit}>
                        <span>Ok</span>
                    </Button>
                    </DialogFooter>
                </Dialog>




                <Dialog 
                    open={openWithdraw}
                    handler={handleOpenWithdraw}
                    animate={{
                        mount: { scale: 1, y:0 },
                        unmount: { scale: 0.9, y : -100 }
                    }}
                >
                    <DialogHeader className=" text-2xl" > Request Withdras </DialogHeader>
                    <DialogBody>
                        <Typography> You are about to send a withdraw request. Make sure crypto account balance is atleast <span className=" text-brand-violet font-semibold " >$200.00</span>. <br />
                            Requst processing may take up to 10 days.
                         </Typography>
                    </DialogBody>
                    <DialogFooter>
                    <Button variant="text" color="red" onClick={handleOpenWithdraw}>
                        <span> cancel </span>
                    </Button>
                    <Button variant="gradient" color="purple" onClick={handleOpenWithdraw}>
                        <span> Confirm </span>
                    </Button>
                    </DialogFooter>
                </Dialog>

                
                <Typography as={"span"} variant="small" className=" bg-white bg-opacity-20 p-2 rounded-full" > +4.82% </Typography>
            </div>

            {/* buy and sell */}
            <div className=" flex items-center justify-between space-x-4">
                <Button ripple={true} onClick={handleOpenDeposit} className=" w-1/2 bg-white bg-opacity-20 rounded-full py-5 "> Deposit </Button>
                <Button ripple={true} onClick={handleOpenWithdraw} className=" w-1/2 rounded-full py-5 " > Withdraw </Button>

            </div>
        </div>

        <div className=" bg-[#191c27] h-screen my-5 w-screen mb-10 mx-2 ">
            <header className=" my-5 text-center " > Crypto Market Analysis </header>
            <PriceChart />
        </div>

        <div className="fixed z-20 bottom-0 w-full flex justify-center bg-gray-700 bg-opacity-50 rounded-full p-2 my-2 " >
                  <nav className="flex justify-between items-center space-x-4  w-full ">
                    <Link  to={'/'} className='p-3 rounded-full bg-brand-violet bg-opacity-50'>
                        <FaHome />
                    </Link>
                  
                    <Link  to={'/market'} className='p-3 rounded-full'>
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
    </div>  )
}
