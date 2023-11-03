import { Input, Typography } from "@material-tailwind/react";
// import { Link } from 'react-router-dom';
// import { IoChevronBack } from 'react-icons/io5';
// import { RiLogoutCircleRFill } from 'react-icons/ri';

export default function EditProfile() {
  return (
    <div>
      {/* <div className=" flex items-center justify-between p-2">
                <Link to={'/'} className=" flex items-center gap-1 text-brand-violet  ">
                    <IoChevronBack />
                    <span> back </span>
                </Link>

                <div  className=" flex items-center gap-1 text-brand-violet"  >
                    <Link to={'/login'}> logout  </Link>
                    <RiLogoutCircleRFill className=" " />
                </div>
            </div>
        <div className=" py-4 text-white ">
          <header className=" text-center text-brand-violet  "> Edit Profile </header>
        </div> */}

        <div className=" px-4 ">
            <form className=" flex flex-col items-center" >

                <div className=" my-5 w-full ">
                  <Input label="email" value={'jay@gmail.com'} disabled className=" bg-gray-500 " />
                  <Typography
                      variant="small"
                      color="red"
                      className="mt-2 flex items-center gap-1 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      you cannot edit email
                    </Typography>
                </div>

                <div className="my-3 w-full">
                  <Input label="username" value={'Cathy Chris'} />
                </div>

                <div className="my-3 w-full">
                  <Input label="wallet ID" />
                </div>

                <div className="my-3 w-full">
                  <Input label="binance account" value={'xxx-xxx-xxx-xxx'} />
                </div>

                {/* <Button ripple={true}  fullWidth className=" my-3  " > Update </Button> */}
            </form>
        </div>
    </div>
  )
}
