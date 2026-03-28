import React from 'react';
import { useRouteError } from 'react-router-dom';


// When exceptions are thrown in loaders,
// actions, or component rendering, instead 
// of the normal render path for your Routes (<Route element>), 
// the error path will be rendered (<Route errorElement>) and
// the error made available with useRouteError.

// React have 

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div className="error-page h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-5xl font-bold">OOps!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
    </div>
  )
}

export default ErrorPage