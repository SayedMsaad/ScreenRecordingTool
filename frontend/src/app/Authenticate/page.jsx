'use client'
import React, { useRef, useState } from 'react'
import styles from './Authenticate.module.css';

const Authenticate = () => {
    // toggle states 
    const [labelToggel, setlabelToggel] = useState(false);
    const [signinToggle, setsigninToggle] = useState(false);
    // Toggle methods 
    const displayOn =()=>{setlabelToggel(!labelToggel);}
    const displayOff =()=>{ setlabelToggel(!labelToggel); }
    const switchModes=()=>{ setsigninToggle(!signinToggle);}

    
// to Display sign in component
    const DisplaySignIn =()=>{
            return(
                
                <div className={`flex flex-col ${signinToggle ?'opacity-0 pointer-events-none' : 'opacity-100'}
                transition-opacity duration-75 delay-200 ease-in-out`}>
                    <div className=''><p className=''>ScreenSnap</p></div>
                    <div className='font-bold text-3xl font-sans mt-11'>Welcome Back</div>
                    <div className='text-sm mt-2'><span className='text-slate-400'>Not registered yet?</span><span className='font-bold'><button onClick={switchModes}>Sign up</button>
                    </span></div>
                    {/* form element */}
                    <form className='flex flex-col'>

                        {/* input feilds */}

                        <label htmlFor="name" className={`relative text-base top-10 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Name</label>

                        <input type="text" id='name' required className='outline-none border-b-2 border-slate-300 py-2 mt-2' onFocus={displayOn} onBlur={displayOff}/>

                        <label htmlFor="password" className={`relative text-base top-10 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Password</label>

                        <input type="password" id='password' required className='outline-none border-b-2 border-slate-300 py-2 mt-2' onFocus={displayOn} onBlur={displayOff} />
                        {/* submit btn */}
                        <button type="submit" className='mt-8 bg-black text-white rounded-xl p-2 font-bold'>Sign In</button>

                        {/* end text */}


                    </form>
                    <div className='mt-8 text-slate-400 text-sm'>
                        <p>Don't have a account? <span className='underline'>Sign up</span> to get started</p>

                    </div>
                </div>


            
            )
    }

    const DisplaySignUp =()=>{
            return(
                
                <div className={`flex flex-col ${!signinToggle ?'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-75 delay-200 ease-in-out`}>
                    <div className=''><p className=''>ScreenSnap</p></div>
                    <div className='font-bold text-3xl font-sans mt-5'>Get Started</div>
                    <div className='text-sm mt-2'><span className='text-xs text-slate-400'>Already have a account?</span><span className='font-bold text-sm'><button onClick={switchModes}>Sign In</button>
                    </span></div>
                    {/* form element */}
                    <form className='flex flex-col'>

                        {/* input feilds */}
                        <div className='relative'>
                        <label htmlFor="name" className={`absolute text-base top-4 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Name</label>
                        <input type="text" id='name' required className='outline-none border-b-2 border-slate-300 py-2 pb-0 mt-4 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff}/></div>

                        <div className="relative">
                        <label htmlFor="email" className={`absolute text-base top-4 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Email</label>
                        <input type="email" id='email' required className='outline-none border-b-2 border-slate-300 py-2 pb-0 mt-4 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff}/></div>

                        <div className='relative'>
                        <label htmlFor="password" className={`absolute text-base top-4 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Password</label>

                        <input type="password" id='password' required className='outline-none border-b-2 border-slate-300 py-2 pb-0 mt-4 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} /></div>

                        <div className='relative'>
                        <label htmlFor="password" className={`absolute text-base top-4 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Confirm Password</label>

                        <input type="password" id='password' required className='outline-none border-b-2 border-slate-300 py-2 pb-0 mt-4 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} /></div>
                        {/* submit btn */}
                        <button type="submit" className='mt-8 bg-black text-white rounded-xl p-2 font-bold'>Sign In</button>

                        {/* end text */}


                    </form>
                    <div className='mt-8 text-slate-400 text-sm'>
                        <p>Don't have a account? <span className='underline'>Sign up</span> to get started</p>

                    </div>
                </div>


            
            )
    }

    return (
        <div className='bg-red-300 h-screen w-screen flex justify-center items-center'>
            {/* main div  */}

            <div className='w-[60%] h-[70vh] p-4 flex items-center justify-center bg-white rounded-2xl'>

                {/* innner div */}
                <div className={`${styles.innerBox} relative`}>
                <div className={`${styles.formWrap} ${signinToggle ? styles.signupmodeform : ''} grid grid-cols-1 grid-rows-1 h-[100%] w-[45%] p-11 absolute left-0 top-0 trasition-left duration-700 ease-in-out`}>
                    {/* from side div */}
                    {DisplaySignIn()}

                    {DisplaySignUp()}
                    </div>

                    {/* intro side div */}

                    <div className={`${styles.infoWrap} ${signinToggle ? styles.signupmodeinfo : ''} h-[100%] w-[55%] bg-orange-100 rounded-3xl absolute right-0 top-0 transition-right duration-700 ease-in-out`}></div>


                </div>

            </div>
        </div>
    )
}

export default Authenticate
