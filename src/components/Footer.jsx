import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-lg font-semibold'>Connect with me</p>
        <div className='flex justify-center space-x-6 mt-4'>
          <a href='https://github.com/your-profile' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <FaGithub size={24} />
          </a>
          <a href='https://linkedin.com/in/your-profile' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
            <FaLinkedin size={24} />
          </a>
          <a href='mailto:kaif8763@gmail.com' className='text-gray-400 hover:text-white'>
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className='mt-4 text-sm text-gray-500'>© 2026 MD Kaif. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;