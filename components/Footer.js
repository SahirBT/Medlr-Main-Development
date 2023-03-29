import Link from "next/link";

const Footer = () => {

  return (
    <>
      <div className="mt-12 mx-auto">
        <footer className="p-4 h-96 bg-white sm:p-6   bg-gradient-to-b from-[#018686] to-[#00403F]" >
          <div className="md:flex md:justify-between mt-28 ">
           
            <div className="pl-28 grid grid-cols-2 gap-16 sm:gap-x-96 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" target="_blank" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Mission</a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="nofollow" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Vision</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="./tandc">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Terms And Conditiions</h3></a>
                <ul>
                  <li className="mb-4">
                    <a href="#" target="_blank" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Team</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get App</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" target="_blank" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Blogs</a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="text-sm font-semibold text-gray-900 uppercase dark:text-white">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
           
            
          </div>
        </footer>
       
      </div>
    
       
    </>
  );
};
export default Footer;
