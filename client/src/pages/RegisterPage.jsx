
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

        const { register,
           handleSubmit, 
           formState : {errors} }= useForm();
        const { signup, isAuthenticathed, errors: RegisterErrors } = useAuth();
        const navigate = useNavigate();

        useEffect(() => {
          if(isAuthenticathed) navigate('/tasks');
        }, [isAuthenticathed, navigate])
        
        const onSubmited = handleSubmit(async(values) => {
          signup(values);//console.log(values);
        })
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

      {
        RegisterErrors.map((error, i) => (
            <div className='bg-red-500 text-white p-2' key={i} >
                { error }
            </div>

        ))
      }

      <form onSubmit={onSubmited}>
         <input type="text" {...register("username", {required:true})} placeholder='username' 
         className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
          {
              errors.username && <p className='text-red-500'>username is requerid</p>
          }
         
         <input type="email" {...register("email", {required:true})} placeholder='email' 
          className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

          {
              errors.email && <p className='text-red-500'>Email is requerid</p>
          }

         <input type="password" {...register("password", {required:true})} placeholder='password' 
          className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
           {
              errors.password && <p className='text-red-500'>Password is requerid</p>
          }
         <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Registrarse</button>
      </form>
    </div>
  )
}

export default RegisterPage
