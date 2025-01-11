'use client'
import React, { useRef, useState } from 'react'
import styles from './Authenticate.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Hypertext from "@/components/magicui/hyper-text";
import { Vortex } from "@/components/ui/vortex"
// import Waves from "@/components/ui/wavy-background"
// import Particle from '@/components/magicui/particles'
import { Back } from "@/components/ui/background-gradient-animation"
// import Meteors from '@/components/magicui/meteors';
// import Scene from '@/Component/Scene'
import { useRouter } from "next/navigation";
import axios from 'axios';
// import { useRouter } from 'next/navigation';

const Authenticate = () => {
    // toggle states 
    const [labelToggel, setlabelToggel] = useState(false);
    const [signinToggle, setsigninToggle] = useState(false);
    // Toggle methods 
    const displayOn = () => { setlabelToggel(true); }
    const displayOff = () => { setlabelToggel(false); }
    const switchModes = () => { setsigninToggle(!signinToggle); }


    // to Display sign in component
    const DisplaySignIn = () => {
        const router = useRouter();
        const loginSchema = Yup.object().shape({
            email: Yup.string().email("Invalid Email").required('required'),
            password: Yup.string().required('Required'),
                
        })
        const loginForm = useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            onSubmit: (values, { resetForm, setSubmitting }) => {
                console.log(values);
                setSubmitting = false;
                axios.post('https://screenrecordingtool.onrender.com/u/authenticate', values)
                    .then((result) => {
                        // console.log(result.response.data.message);
                        if (result.data.isValid) {
                            toast.success("Login Succesfull");
                            localStorage.setItem("user", JSON.stringify(result.data.user));
                            localStorage.setItem("Usertoken",result.data.token);
                            resetForm();
                            router.push('/'); 

                        } else {
                            //    resetForm();\
                            toast.error("Invalid credentials");
                            displayOn();
                            setSubmitting = true;
                        }

                    }).catch((err) => {
                        if(!err.response.data.isValid){
                            toast.error("Invalid credentials");
                            displayOn();
                            setSubmitting = true;
                        }
                        console.log(err);
                    });

            },
            validationSchema: loginSchema,
        })
        return (

            <div className={`flex flex-col ${signinToggle ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                transition-opacity duration-75 delay-200 ease-in-out`}>
                <div className=''><Hypertext text={"ScreenSnap"} className={"text-4xl font-bold font-sans text-white dark:text-white"} delay={0.5} /></div>
                <div className='font-bold text-3xl font-sans mt-11 text-white'>Welcome Back</div>
                <div className='text-sm mt-2'><span className='text-slate-400'>Not registered yet?</span><span className='font-bold text-slate-200'><button onClick={switchModes}>Sign up</button>
                </span></div>
                {/* form element */}
                <form onSubmit={loginForm.handleSubmit} className='flex flex-col'>

                    {/* input feilds */}

                    <label htmlFor="email" className={`relative text-base top-10 text-slate-400 px-2 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Email</label>

                    <input type="email" id='email' required className='outline-none border-b-2 rounded-md focus:border-black border-slate-200 py-2 mt-2 transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} value={loginForm.values.email} onChange={loginForm.handleChange}
                    />
                    {loginForm.touched.email && loginForm.errors.email ? (<p className='text-xs text-red-600' id='email-error'>
                        {loginForm.errors.email}
                    </p>) : null}

                    <label htmlFor="password" className={`relative text-base px-2 top-10 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Password</label>

                    <input type="password" id='password' required className='outline-none border-b-2 focus:border-black border-slate-300 py-2 mt-2 transition-all duration-200 ease-in rounded-md' onFocus={displayOn} onBlur={displayOff} value={loginForm.values.password} onChange={loginForm.handleChange} aria-describedby='error-pass' />
                    {loginForm.touched.password && loginForm.errors.password ? (<p className='text-xs text-red-600' id='error-pass'>
                        {loginForm.errors.password}
                    </p>) : null}

                    {/* submit btn */}
                    <button type="submit" className='mt-8 bg-black text-white rounded-xl p-2 font-bold'>Sign In</button>

                    {/* end text */}


                </form>
                <div className='mt-8 text-slate-400 text-sm'>
                    <p>Don&apos;t have a account? <span className='underline'>Sign up</span> to get started</p>

                </div>
            </div>



        )
    }

    const DisplaySignUp = () => {

        const router =useRouter();
        const signUpSchema = Yup.object().shape({
            name: Yup.string()
                .required('Required')
                .min(2, 'Too Short!')
                .max(50, 'Too Long!'),

            email: Yup.string()
                .email("Invalid Email")
                .required('required'),

            password: Yup.string()
                .required('Required')
                .matches(/[a-z]/, 'must include lowecase'),
                // .matches(/[A-Z]/, 'must include uppercase')
                // .matches(/[0-9]/, 'must include number')
                // .matches(/\W/, 'must include special charchter'),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
        })
        const signUpForm = useFormik({
            initialValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            onSubmit: (values, { resetForm, setSubmitting }) => {
                // console.log(values);
                axios.post("https://screenrecordingtool.onrender.com/u/addUser", values).then((response) => {
                    console.log(response.status);
                    // console.log(response.data);

                    // localStorage.setItem('Usertoken',response.data.token);
                    
                    toast.success("user added successfully");
                    resetForm();
                    switchModes();
                    // router.push("/");
                }).catch((err) => {
                    console.log(err)
                    if (err.response.data.code === 11000) {
                        toast.error("Email already exists");
                      }
                      setSubmitting(false);
                });
                
            },
            validationSchema: signUpSchema,


        })
        return (

            <div className={`flex flex-col ${!signinToggle ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-75 delay-200 ease-in-out`}>
                {/* <div className=''><p className=''>ScreenSnap</p></div> */}
                <div className='font-bold text-3xl font-sans text-white'>Get Started</div>
                <div className='text-sm mt-2'><span className='text-xs text-slate-400'>Already have a account?</span><span className='font-bold text-sm text-slate-200'><button onClick={switchModes}>Sign In</button>
                </span></div>
                {/* form element */}
                <form onSubmit={signUpForm.handleSubmit} className='flex flex-col w-full space-y-2'>

                    {/* input feilds */}
                    <div className='relative'>
                        <label htmlFor="name" className={`relative text-base top-9 px-2 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Name</label>
                        <input type="text" id='name' name='name' required className='w-full mt-1 outline-none border-b-2 border-slate-300 rounded-md py-2 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} value={signUpForm.values.name} onChange={signUpForm.handleChange} />
                        {signUpForm.touched.name && signUpForm.errors.name ? (<p className='text-xs text-red-600'>
                            {signUpForm.errors.name}
                        </p>) : null}</div>


                    <div className="relative">
                        <label htmlFor="semail" className={`relative text-base top-9 px-2 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Email</label>
                        <input type="email" id='semail' name='email' required className='w-full outline-none border-b-2 rounded-md border-slate-300 py-2 mt-1 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} value={signUpForm.values.email} onChange={signUpForm.handleChange} />

                        {signUpForm.touched.email && signUpForm.errors.email ? (<p className='text-xs text-red-600'>
                            {signUpForm.errors.email}
                        </p>) : null}</div>

                    <div className='relative'>
                        <label htmlFor="spassword" className={`relative text-base top-9 px-2 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Password</label>

                        <input type="password" id='spassword' name='password' required className='w-full outline-none border-b-2 rounded-md border-slate-300 py-2 mt-1 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} value={signUpForm.values.password} onChange={signUpForm.handleChange} />
                        {signUpForm.touched.password && signUpForm.errors.password ? (<p className='text-xs text-red-600'>
                            {signUpForm.errors.password}
                        </p>) : null}</div>

                    <div className='relative'>
                        <label htmlFor="confirmPassword" className={`relative text-base top-9 px-2 text-slate-400 visible transition-all ease-in-out duration-500 ${labelToggel ? styles.labelactive : ''}`}>Confirm Password</label>

                        <input type="password" id='confirmPassword' name='confirmPassword' required className='w-full outline-none border-b-2 rounded-md border-slate-300 py-2 mt-1 mb-4 focus:border-black transition-all duration-200 ease-in' onFocus={displayOn} onBlur={displayOff} value={signUpForm.values.confirmPassword} onChange={signUpForm.handleChange} />
                        {signUpForm.touched.confirmPassword && signUpForm.errors.confirmPassword ? (<p className='text-xs text-red-600'>
                            {signUpForm.errors.confirmPassword}
                        </p>) : null}</div>
                    {/* submit btn */}
                    <button type="submit" className='bg-black text-white rounded-xl p-2 font-bold'>Sign In</button>

                    {/* end text */}


                </form>

            </div>



        )
    }

    return (
        <div className="bg-black h-screen w-screen flex justify-center items-center overflow-hidden bg-gradient-to-l from-blue-500 via-purple-500 to-red-500">

            <Vortex backgroundColor="black"
                rangeY={100}
                baseSpeed={0}
                particleCount={500}
                baseHue={220}

                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-2xl rounded-lg p-4 w-[60%]">
                    <div className='w-full h-[70vh] p-4 flex items-center justify-center bg-transparent rounded-2xl'>


                        {/* innner div */}
                        <div className={`${styles.innerBox} relative`}>
                            <div className={`${styles.formWrap} ${signinToggle ? styles.signupmodeform : ''} grid grid-cols-1 grid-rows-1 h-[100%] w-[45%] p-8 absolute left-0 top-0 trasition-left duration-700 ease-in-out`}>
                                {/* from side div */}
                                {DisplaySignIn()}

                                {DisplaySignUp()}
                            </div>

                            {/* intro side div */}

                            <div className={`${styles.infoWrap} ${signinToggle ? styles.signupmodeinfo : ''} p-4 h-[100%] w-[55%] bg-orange-100 rounded-3xl absolute right-0 top-0 transition-right duration-700 ease-in-out text-center`}>


                                <img src="/images/cameraman1.png" alt="cameraman" className='h-full mx-auto' />


                            </div>


                        </div>

                    </div>
                </div>
            </Vortex>

            {/* {DisplayModel()} */}
            {/* <Particle 
        className="absolute inset-0"
        quantity={400}
        size ={0.5}
        ease={100}
        color={'#ffffff'}
        refresh={true}/> */}
            {/* <Meteors
        number ={20}/> */}
            {/* main div  */}

        </div>
    )
}

export default Authenticate
