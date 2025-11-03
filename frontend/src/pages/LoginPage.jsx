import {useState} from 'react';
import {useAuthStore} from "../store/useAuthStore.js"

import { MessageCircleIcon, LockIcon, MailIcon,  LoaderIcon } from "lucide-react"; 

import BoarderAnimatedContainer from '../components/BoarderAnimatedContainer.jsx';
import { Link } from 'react-router-dom'; 


function LoginPage() {
  
   const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const {login, isLoggingIn} = useAuthStore();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      login(formData);
    }





  return <div className='w-full flex items-center justify-center p-4 bg-slate-950 '>
    <div className=' relative w-full max-w-6xl md:h-[800px] h-[600px]'> 

  <BoarderAnimatedContainer> 
    
     <div className='w-full flex flex-col md:flex-row '>
    <div className='w-full md:w-1/2 p-8 flex justify-center items-center md:border-r border-slate-600/30  '>      
      <div className='w-full max-w-md '>
        
       <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">Welcome Back</h2>
                  <p className="text-slate-400">Login to your account</p>
                </div> 
           
              <form onSubmit={handleSubmit} className="space-y-6">

                 
                   {/* Email */}
                 <div>
                  <label className='auth-input-label'>Email Address</label>
                  <div className='relative'>
                    <MailIcon className='auth-input-icon' />
                    <input 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className='input' 
                      placeholder='johndoe@gmail.com'
                      required
                    />

                  </div>
                 </div>

                  {/* Password */}
                 <div>
                  <label className='auth-input-label'>Password</label>
                  <div className='relative'>
                    <LockIcon className='auth-input-icon' />
                    <input type="text"  value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className='input' placeholder='123456'
                     />
 
                  </div>
                 </div>

                <button className="auth-btn" type="submit" disabled={isLoggingIn}>
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Login"
                    )}
                  </button>

              </form> 
                  <div className="mt-6 text-center border-black">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              
      </div>
       </div>
        {/* Right Side */ }

              <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/simple-login-meme-petition-v0-ue86o3bohheb1.webp"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain border border-spacing-0 border-black"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold text-emerald-400">Back to Us? I know You Will Love It Here!</h3>
                  <div className="mt-4 flex justify-center gap-4">
                   
                  </div>
                </div>
              </div>
            </div>
     
     
   </div>  
  </BoarderAnimatedContainer>
    
    </div>
  </div>;
  
}

export default LoginPage