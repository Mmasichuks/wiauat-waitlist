import React from 'react'

const Waitlist = () => {

  return (
      <><div className="container mx-auto min-h-screen relative" >
          <img
                  src="/20250106_105309.png"
                  width={248}
                  height={90}
                  className='items-start mx-0 px-0 cursor-pointer size-50 '
              alt="wiaut logo" />
        
              
             
         <section>
         <div className="intro ml-14 ">
         
              <h1 className='sm:text-5xl text-4xl text-balance transition-all font-bold font-sans'>Introducing Wiauat App: <br />Revolutionizing Tracking, Security <br />and Locating</h1>
                  <p className='font-sans  font-bold mt-10'>We're currently under development, but we invite you to join our <br />
                      community to stay updated on our progress, provide feedback,<br />
                      and help shape the future of Wiauat App.</p>
                  <div className=" mt-10">
                      <a href="https://chat.whatsapp.com/GMReW0NArzf2LtpStuoFhq"
                          className='bg-primary hover:px-11 hover:py-4 transition-all px-10 py-3  text-white rounded-full  font-bold font-sans'>join our community</a>
                  </div>
                
              <img src="Waiuat disp copy 2.png"
                      className='w-full xl:w-1/3 xl:absolute top-36 right-10 hover:rotate-12'
                      alt="" />
              
              </div>
          </section>
          <div className="mt-16 relative  overflow-hidden bg-cover bg-no-repeat ">
              <img src="/20250102_111530.jpg"
                  className='h-auto w-full object-cover transition duration-300 ease-in-out hover:scale-105'
                  alt="" />
              </div>
              <div className="section2 py-20">
              <h1 className=' font-sans transition-all font-bold sm:text-7xl text-5xl ml-16 mt-10 py-16 text-balance '>This Application <br />is Currently <br /> Under Development</h1>
              <div className=" mt-10 ml-16">
                      <a href="https://chat.whatsapp.com/GMReW0NArzf2LtpStuoFhq" 
                          className='ml-10 bg-primary hover:px-11 hover:py-4 transition-all  text-white rounded-full px-10 py-3 font-bold font-sans'>join our community</a>
                  </div>
              </div>
          </div>
          
      
      
              <footer className="text-gray-600 body-font bg-black mt-16 p-10">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="/Wiauat disp copy.png"
                  className='w-1/2' alt="" />
      
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 wiauat —
      <a href="https://x.com/wiauatapp?t=Mxuc9WawJFClLVu5-sV9OA&s=09" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@wiauatapp</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      {/* <a className="text-gray-500 cursor-pointer transition duration-300 ease-in-out hover:scale-125" href=''>
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a> */}
      <a className="ml-3 text-gray-500 cursor-pointer transition duration-300 ease-in-out hover:scale-125" href='https://x.com/wiauatapp?t=Mxuc9WawJFClLVu5-sV9OA&s=09'>
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      {/* <a className="ml-3 text-gray-500 cursor-pointer transition duration-300 ease-in-out hover:scale-125">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500 cursor-pointer transition duration-300 ease-in-out hover:scale-125">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a> */}
    </span>
  </div>
</footer>
        
      </>
  )
}

export default Waitlist