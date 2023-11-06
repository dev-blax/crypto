import { Typography , Input, Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {


  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');

  return (
    <main className=" min-h-screen bg-pattern ">
      <div className=" min-h-screen bg-gradient-to-t from-black to-transparent flex flex-col items-center " >
        <div className=' flex flex-col items-center gap-5 py-8'>
          <img className=' h-16 w-16 ' src="images/dioz.svg" alt="dioz logo" />
          <div className=" flex flex-col text-center ">
            <h2 className=' text-white font-semibold text-center text-xl ' > Welcome to Crypto </h2>
            <Typography variant="small" textGradient className=" font-semibold text-brand-violet " >  Profits everyday </Typography>
          </div>
        </div>

        <div className=" w-full mx-3 bg-blur text-white rounded-md p-5 ">
          <div>
            <Typography variant="h3" className=" text-brand-violet " > Sign up </Typography>
            <Typography variant="small" > Please enter your information </Typography>
          </div>
          {/* <hr className=" my-5 " /> */}
          <div className='text-white'>
            <form action="">
              <div className="my-5">
                <Input onChange={(e) => { setEmail(e.target.value) }} label="Email" size="lg" color="white" type="email" className="" />
              </div>

              <div className="my-5 ">
                <Input onChange={(e) => { setPasswod(e.target.value)}} label="Password" size="lg" color="white" type="password" />
              </div>

              <div className="my-5">
                
                <Link to={'/login'}> <Button size="lg" fullWidth className=" bg-brand-violet " > Sign up </Button>  </Link>
              </div>
            </form>

            <div className=" my-3 text-center ">
              <Link to={'/login'} > <Typography variant="small" className=" underline underline-offset-2 text-brand-violet " > Sign in here  </Typography> </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
