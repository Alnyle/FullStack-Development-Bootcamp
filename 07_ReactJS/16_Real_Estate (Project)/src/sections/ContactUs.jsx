import React from 'react';
import contact from '../assets/contact.jpg';
import { contactInfo } from '../constants';
import ContactElement from '../components/ContactElement';

const ContactUs = () => {
  return (
    <div className="md:max-w-5xl max-w-xl mx-auto px-4 sm:px-2">
        <div className="flex flex-col md:flex-row gap-6 justify-between px-2 sm:px-2">
                <div className="w-full md:w-1/2 mr-2">
                    <div>
                        <div >
                            <h2 className="text-lg md:text-xl font-bold text-amber-500">Our Contact Us</h2>
                            <h1 className="text-blue-900 text-xl sm:text-2xl font-bold mt-3">Easy to contact us</h1>
                        </div>
                        <div className="mt-4 flex flex-col">
                            <p className="text-sm text-gray-500">We always ready to help by providijng the best services for you. We beleive 
                            a good blace to live can make your life better
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {contactInfo.map((contact, index) => (
                            <ContactElement 
                            key={index} 
                            icon={contact.icon}
                            title={contact.title}
                            number={contact.number}
                            btn={contact.btn}
                            />
                        ))}

                    </div>
                </div>

                <div className="w-full md:w-1/3 h-[450px] flex flex-row items-center justify-center lg:justify-normal">
                    <img src={contact} alt="Contact image" className="size-full object-cover rounded-t-full"/>
                </div>
        </div>
        
    </div>
  )
}

export default ContactUs