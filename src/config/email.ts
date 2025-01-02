if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
    !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
    !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  throw new Error('Missing required email configuration');
}

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const; 
