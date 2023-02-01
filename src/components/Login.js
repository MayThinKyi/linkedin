import React, { useState } from 'react'
import logo from '../images/logo.png'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import {createUserWithEmailAndPassword, getAuth,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
const Login = () => {
   
    const dispatch = useDispatch();
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image,setImage]=useState('')
    const schema = yup.object().shape({
        username:yup.string().required(),
         useremail: yup.string().email().required(),
  userpassword: yup.string().min(8).max(32).required(),
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
          resolver:yupResolver(schema)
    });
    const userSignUp = () => {
         createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
// Signed in 
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:image
}).then(() => {
   const user = userCredential.user;
    console.log('sinup', user);
     dispatch(login({
      username: user.displayName,
           email: user.email,
      image:user.photoURL
       })) 
}).catch((error) => {
  alert(error)
});
     

   
      

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

    }
    const userSignIn = (data, e) => {
      
        e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
       updateProfile(auth.currentUser, {
         displayName: name,
         photoURL:image
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    // Signed in 
      const user = userCredential.user;
    
      dispatch(login({
      username: user.displayName,
           email: user.email,
      image:user.photoURL
       }))
      
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    
  };
    
    return (<div className='login'>
      <img src={logo} />
      <form onSubmit={handleSubmit(userSignIn)}>
            <div className='input'>
                 <input {...register('username')} p value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Full Name' />
             <p>{errors.username?.message}</p>
        </div>
         <div className='input'>
                 <input   value={image} onChange={(e)=>setImage(e.target.value)}  placeholder='Enter Image URL(Optional)' />
           </div>
            <div className='input'>
                 <input {...register('useremail')}   onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
           <p>{errors.useremail?.message}</p>
         </div>
            <div className='input'>
                 <input {...register('userpassword')} type='password' onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' />
             <p>{errors.userpassword?.message}</p>
           </div>
            <button type='submit'>Sign In</button><br></br><br></br>
          <span >Not a member ?<a style={{color:'#0074B1',marginLeft:'5px'}} onClick={userSignUp}>Click on this to Register</a></span>
      </form>
    </div>
  )
}

export default Login