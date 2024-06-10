import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="contact_section bg-gray-100 py-12">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <form action="">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
