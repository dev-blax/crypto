import { Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { IoChevronBack } from 'react-icons/io5';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillEdit, AiFillDelete, AiFillStop, AiOutlineStock } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { RiBarChart2Fill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { BsWalletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from "react";
import EditProfile from "./EditProfile";

export default function Account() {

    const [ openEditProfile, setOpenEditProfile ] = useState(false);
    const [ openDeactivate, setOpenDeactivate ] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handelOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile)
    }
    const handleOpenDeactivate = () => setOpenDeactivate(!openDeactivate);
    const handleOpenDelete = () => setOpenDelete(!openDelete);

  return (
    <div className=" bg-brand-gray min-h-screen text-white flex flex-col gap-5 pb-10 ">
        <div className=" p-2">
            <div className=" flex items-center justify-between">
                <Link to={'/'} className=" flex items-center gap-1 text-brand-violet  ">
                    <IoChevronBack />
                    <span> back </span>
                </Link>

                <div  className=" flex items-center gap-1 text-brand-violet"  >
                    <Link to={'/login'}> logout  </Link>
                    <RiLogoutCircleRFill className=" " />
                </div>
            </div>
            <div className=" flex flex-col items-center py-5">
                <div className=" p-2 border rounded-full border-[#7264ff]">
                <img src="images/profile.jpg" className=" h-20 w-20 rounded-full " alt="" />
                </div>
                <Typography as={'span'} variant="lead" > Cathy Bond </Typography>
                <Typography variant="small" color="gray"> cath@gmail.com </Typography>
            </div>
        </div>


        <div className=" bg-blue-gray-700 bg-opacity-50 rounded-3xl p-4 h-full mx-2 text-[#7264ff]  ">
            <div className=" flex flex-col gap-3 ">
                <Link to={'/tradeHistory'} className=" flex items-center gap-4 ">
                    <AiOutlineStock />
                    <span> Trading History </span>
                </Link>
                <div className=" flex items-center gap-4  ">
                    <AiFillStop />
                    <span> Trade Suggestions </span>
                </div>
                <div className=" flex items-center gap-4 ">
                    <AiFillDelete />
                    <span> Crypto News </span>
                </div>
            </div>
        </div>

        <div className=" bg-blue-gray-700 bg-opacity-50 rounded-3xl p-4 mx-2 h-full ">
            <div className=" flex flex-col gap-3 ">
                <div className=" flex items-center gap-4 " onClick={()=>{ setOpenEditProfile(true) }} >
                    <AiFillEdit />
                    <span> Edit profile </span>
                </div>
                <div className=" flex items-center gap-4 text-red-200 " onClick={()=> { setOpenDeactivate(true) }} >
                    <AiFillStop />
                    <span> Deactivate Account </span>
                </div>
                <div className=" flex items-center gap-4 text-red-500 " onClick={()=> { setOpenDelete(true)}}>
                    <AiFillDelete />
                    <span> Delete Account </span>
                </div>
            </div>
        </div>

        {/* dialogs */}

        <Dialog 
            open={openEditProfile}
            handler={handelOpenEditProfile}
            animate={{
                mount: { scale: 1, y:0 },
                unmount: { scale: 0.9, y : -100 }
            }}
            >
            <DialogHeader className=" text-2xl" > Edit Profile </DialogHeader>
            <DialogBody>
                <EditProfile />
            </DialogBody>
            <DialogFooter>
            <Button variant="text" color="red" onClick={handelOpenEditProfile}>
                <span> cancel </span>
            </Button>
            <Button variant="gradient" color="purple" onClick={handelOpenEditProfile}>
                <span> Update </span>
            </Button>
            </DialogFooter>
        </Dialog>


        <Dialog 
            open={openDeactivate}
            handler={handleOpenDeactivate}
            animate={{
                mount: { scale: 1, y:0 },
                unmount: { scale: 0.9, y : -100 }
            }}
            >
            <DialogHeader className=" text-2xl" > Deactivate Account </DialogHeader>
            <DialogBody>
                <Typography> Your account will no longer be able to deposit nor to withdraw. You can activate later as required  </Typography>
            </DialogBody>
            <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpenDeactivate}>
                <span> cancel </span>
            </Button>
            <Button variant="gradient" color="purple" onClick={handleOpenDeactivate}>
                <span> Accept </span>
            </Button>
            </DialogFooter>
        </Dialog>

        
        <Dialog 
            open={openDelete}
            handler={handleOpenDelete}
            animate={{
                mount: { scale: 1, y:0 },
                unmount: { scale: 0.9, y : -100 }
            }}
            >
            <DialogHeader className=" text-2xl" > Delete Account </DialogHeader>
            <DialogBody>
                <Typography> This will permanently remove you from crypto. All your assets on our platform will no longer be accessible. <br />
                    This action cannot be undone.
                 </Typography>
            </DialogBody>
            <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpenDelete}>
                <span> cancel </span>
            </Button>
            <Button variant="gradient" color="red" onClick={handleOpenDelete}>
                <span> Delete </span>
            </Button>
            </DialogFooter>
        </Dialog>


    <div className="fixed bottom-0 w-full flex justify-center bg-gray-700 rounded-full p-2 my-2 " >
        <nav className="flex justify-between items-center space-x-4  w-full ">
          <Link  to={'/'} className='p-3 rounded-full '>
              <FaHome />
          </Link>
        
          <Link  to={'/market'} className='p-3 rounded-full '>
              <RiBarChart2Fill />
          </Link>    
          <Link to={'/promotion'} className='p-3 rounded-full'>
              <GiTrophyCup />
          </Link>

          <Link to={'/agent'} className='p-3 rounded-full'>
              <BsWalletFill />
          </Link>

          <Link to={'/account'} className='p-3 rounded-full bg-brand-violet bg-opacity-50'>
              <MdAccountCircle />
              </Link>
        </nav>
      </div>
    </div>
  )
}
