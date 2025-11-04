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

              <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent relative overflow-hidden">
              <div className="relative group">
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none z-10"></div>
                
                <img
                  src="/canva-blue-illustration-cartoon-phone-wallpaper-Muj7uji0w4E.webp"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain grayscale contrast-125 sepia-[.15] 
                  hover:grayscale-0 hover:sepia-0 transition-all duration-700 ease-in-out
                  shadow-2xl shadow-black/50
                  group-hover:scale-105 transform"
                />
                
                {/* Film grain overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none"></div>
                
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
                
               
               
               
              </div>
            </div>
     
     
   </div>  
  </BoarderAnimatedContainer>
    
    </div>
  </div>;
  
}

export default LoginPage;