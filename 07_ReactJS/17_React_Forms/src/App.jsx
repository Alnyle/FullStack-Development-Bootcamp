import React from 'react';
import fimg from './assets/fimg.png'
import { useFormik } from 'formik';
import * as Yup from "yup";
// import { useRouter } from 'next/router';

const App = () => {

  // Router 
  // const router = useRouter();

  // Formik Logics

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },


    // Validate Form

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Name is required'),
      email: Yup.string().email('Invalid Email Address').required("email is required"),
      terms: Yup.array().required("Terms of service must be checked")
    }),

    // submit Form
    onSubmit: (values) => {
      console.log(values);
      // router.push({path: "/success" , query: values});
    }
  });


  console.log(formik.errors);
  
  return (
    <main className="h-screen flex items-center justify-center">
      <form 
        onSubmit={formik.handleSubmit} 
        className="bg-white flex rounded-lg w-1/2 font-latoRegular">

        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-bold">Let's get started 👋</h1>
          <p className="text-lg text-gray-500">
            Join our E-learning platform today and unlock over 500+ courses
            and digital assets ready to download.
          </p>

          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label 
                className={`block font-latoBold text-sm pb-2 
                  ${formik.touched.name && formik.errors.name? "text-red-400" : ""}`} 
                htmlFor="name">
                {formik.touched.name && formik.errors.name ? formik.errors.name: "Name"}
              </label>

              <input 
                className={`border-2 border-gray-500 p-2 
                rounded-md w-2/3 focus:border-teal-500
              focus:ring-teal-500`}
                type="text" 
                name="name" 
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
            </div>

            {/* Email input field */}
            <div className="pb-4">
              <label 
                className={`block font-latoBold text-sm pb-2 
                          ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`} 
                htmlFor="Email">
                {formik.touched.email && formik.errors.email? formik.errors.email : "Email"}
              </label>

              <input 
                className="border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500" 
                type="email" 
                name="email" 
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
            </div>

            {/* Country select field */}
            <div className="pb-4">
              <label 
                className="block font-latoBold text-sm pb-2" 
                htmlFor="Country">
                Country
              </label>

              <select 
                value={formik.values.country}
                onChange={formik.handleChange}
                name="country" 
                className="border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500"> 
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Korea</option>
                <option>Malaysia</option>
              </select>
            </div>


            {/* Terms of service */}
            <div className="pb-4">
              <label 
                className={`block font-latoBold text-sm pb-2 
                              ${formik.touched.terms && formik.errors.terms? "text-red-400" : ""}`} 
                htmlFor="Country">

                {formik.touched.terms && formik.errors.terms? formik.errors.terms : "Terms and Service"}
              </label>

              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  name="terms" 
                  value="checked"
                  onChange={formik.handleChange} 
                  className="size-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500" />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
              </div>
            </div>

            <button type="submit" className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full">
              Start learning today !
            </button>

          </div>
        </div>

        <div className="flex-1">
          <img src={fimg} alt="from image" className="size-full object-cover aspect-auto rounded-r-lg"/>
        </div>
      </form>
      
    </main>
  )
}

export default App