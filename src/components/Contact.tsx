import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AudioWave } from './animations/AudioWave';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    alert('Sending your message...');
    
    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'contact@audexisconsultancy.com'
        },
        EMAIL_CONFIG.publicKey
      );

      alert('Thank you! Your message has been sent. We will be with you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <AudioWave />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Get in touch with our team</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 disabled:bg-blue-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">contactus@audexisconsultancy.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    India, New Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import { AudioWave } from './animations/AudioWave';

// export function Contact() {
//   return (
//     <section id="contact" className="py-16 sm:py-20 relative bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
//       <AudioWave />
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
//           <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Get in touch with our team</p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4">
//           <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
//             <form className="space-y-4 sm:space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="space-y-6 sm:space-y-8">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex items-start">
//                 <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
//                   <p className="mt-1 text-gray-600 dark:text-gray-300">contact@audexis.com</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex items-start">
//                 <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
//                   <p className="mt-1 text-gray-600 dark:text-gray-300">+91 9104411978</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex items-start">
//                 <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
//                   <p className="mt-1 text-gray-600 dark:text-gray-300">
//                     123 Business Avenue<br />
//                     Suite 100<br />
//                     New Delhi, 110001
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }