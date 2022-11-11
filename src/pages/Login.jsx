import React from 'react'
import { useFormik, } from "formik";
import validationSchema from "../validations/loginValidation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const notifySuccsess = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  };
  const notifyError = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values.password)

    }
  })
  return (
    <>
      <div className='flex items-center justify-center bg-black h-screen w-full fixed top-10'>
        <div className="p-4  max-w-sm bg-white rounded-lg border border-gray-300 shadow-lg sm:p-6 md:p-8 w-11/12 sm:w-full">
          <form onSubmit={formik.handleSubmit} className="space-y-5"  >
            <h5 className="text-2xl font-medium text-gray-900 dark:text-gray-900 text-center">Admin Giriş</h5>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email:</label>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="emailıd" placeholder='example@gmail.cpm' className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-gray-900" required />
              {formik.errors.email && formik.touched.email && <span className='text-red-600 text-xs'>{formik.errors.email}</span>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your password:</label>
              <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name="password" id="passwordId" placeholder="••••••••" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-gray-900" required />
              {formik.errors.password && formik.touched.password && <span className='text-red-600 text-xs'>{formik.errors.password}</span>}
            </div>           
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login