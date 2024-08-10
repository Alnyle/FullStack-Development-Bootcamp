import React from 'react';
import { useRouter } from 'react-router-dom';

const success = () => {

    const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center">
        <div className="bg-white flex rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
            <h1 className="text-3xl pb-4 font-latoBold">
                Thanks for the email {router.query.name}✨
            </h1>
            <p className="text-lg text-gray-500">
                We have sent you an email over at {router.query.email}. we will get
                back to you as soon as we can?
            </p>
        </div>
    </main>
  )
}

export default success