import {useState} from 'react';
import {useAuthStore} from "../store/useAuthStore.js"

import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react"; 

import BoarderAnimatedContainer from '../components/BoarderAnimatedContainer.jsx';
import { Link } from 'react-router-dom'; 

function SignUpPage() {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const {signup, isSigningUp} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(formData);
  }

  return <div className='w-full flex items-center justify-center p-4 bg-slate-950 '>
    <div className=' relative w-full max-w-6xl md:h-[800px] h-[600px]'> 

  <BoarderAnimatedContainer> 
    
     <div className='w-full flex flex-col md:flex-row '>
    <div className='w-full md:w-1/2 p-8 flex justify-center items-center md:border-r border-slate-600/30  '>      
      <div className='w-full max-w-md '>
        
       <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">Create Account</h2>
                  <p className="text-slate-400">Sign up for a new account</p>
                </div> 
           
              <form onSubmit={handleSubmit} className="space-y-6">

                 <div>
                  <label className='auth-input-label'>Full Name </label>
                  <div className='relative'>
                    <UserIcon className='auth-input-icon' />
                    <input 
                      type="text" 
                      value={formData.fullName} 
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                      className='input' 
                      placeholder='John Doe'
                      required
                    />

                  </div>
                 </div>

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
                    minLength={6} required />
 
                  </div>
                 </div>
                 
                <button className="auth-btn" type="submit" disabled={isSigningUp}>
                    {isSigningUp ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center " />
                    ) : (
                      "Create Account"
                    )}
                  </button>

              </form> 
                  <div className="mt-6 text-center border-black">
                  <Link to="/login" className="auth-link">
                    Already have an account? Login
                  </Link>
                </div>
              
      </div>
       </div>
        {/* Right Side */ }

              <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/a97ueh.webp"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain border border-spacing-0 border-black"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold text-emerald-400">Wanna Start?</h3>
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

export default SignUpPage; 