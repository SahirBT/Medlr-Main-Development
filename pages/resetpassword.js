import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';


const resetPass = () => {
const [queryParams,setQueryParams] =useState([]);
const [error, setError] = useState(false);
const Router = useRouter();

// useEffect(() => {
//   console.log(Router.query);
  
// },[])
const resetInitialValues ={
    password:'',

  }

const onResetSubmit=(values,onSubmitProps)=>{
    onSubmitProps.setSubmitting(true);
    console.log(values);
    console.log('Submit button clicked');
    axios
      .post(`http://localhost:5000/api/resetpassword/?token=${Router.query.token}&id=${Router.query.id}`, {'password':values.password})
      .then((res) => {
        // console.log(res.response);
        if (res.data.success) {
          toast.success('Password Changed');//res.status
          onSubmitProps.resetForm();
        
        } else {
          toast.error('Something Went Wrong');
        }
      })
      .catch((err) => {
        console.log(err)
        if(err.response && err.response.data && !err.response.data.success){
          // console.log(err.response.data.message)
          toast.error(err.response.data.message)
        }
      });

    onSubmitProps.setSubmitting(false);
  }
  

const resetValidate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = 'Required';
    }
    if (Object.keys(errors).length !== 0) {
      setError(true);
    } else {
      setError(false);
    }

    return errors;
  };


  return (
    <>
      <div>
        <Head>
          <title>Medler</title>
        </Head>
      </div>
      <div>
        <Formik 
         onSubmit={onResetSubmit}
         initialValues={resetInitialValues}
         validate={resetValidate}
        >
          <Form className="mt-12 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#00BFBE] sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 px-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#00BFBE] sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-[#F1CD4B] py-2 px-3 text-sm font-semibold text-black hover:bg-[#00BFBE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00BFBE]"
              >
                Reset Password
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default resetPass;
