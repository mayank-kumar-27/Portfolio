import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setIsFocused({
        ...isFocused,
        [field]: false
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'service_pqeeaz8',
        'template_jry3q3n',
        formRef.current,
        'H6X5q9F74zm5z3ekm'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setIsFocused({
        name: false,
        email: false,
        subject: false,
        message: false
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl animate-float relative">
      {/* Toast Notification */}
      {status.message && (
        <div 
          className={`absolute -top-20 right-0 z-[9999] animate-slide-down`}
          style={{
            animation: 'slideDown 0.5s ease-out forwards'
          }}
        >
          <div className={`relative backdrop-blur-xl rounded-lg px-4 py-3 shadow-2xl border-2 flex items-center gap-2 ${
            status.type === 'success'
              ? 'bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border-green-400/50'
              : 'bg-gradient-to-r from-red-500/20 via-rose-500/20 to-red-500/20 border-red-400/50'
          }`}>
            {/* Icon */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              status.type === 'success' 
                ? 'bg-green-500/30' 
                : 'bg-red-500/30'
            }`}>
              {status.type === 'success' ? (
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            
            {/* Message */}
            <p className={`text-sm font-medium ${
              status.type === 'success' ? 'text-green-300' : 'text-red-300'
            }`}>
              {status.type === 'success' ? 'Message sent!' : 'Failed to send'}
            </p>
            
            {/* Close Button */}
            <button
              onClick={() => setStatus({ type: '', message: '' })}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Glow Effect */}
            <div className={`absolute inset-0 -z-10 blur-lg opacity-50 ${
              status.type === 'success' ? 'bg-green-500/30' : 'bg-red-500/30'
            }`}></div>
          </div>
        </div>
      )}

      <form ref={formRef} className="relative bg-surface/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl" onSubmit={handleSubmit}>
        {/* Decorative Gradient Blur */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-tertiary/30 to-primary/30 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-2">
            Send a Message
          </h2>
          <p className="text-gray-500 text-sm mb-8">Fill out the form below and I'll get back to you soon!</p>
          
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                required
                className="w-full bg-surface/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary/50 focus:bg-surface/50 transition-all duration-300 peer"
                placeholder="Your Name"
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.name || formData.name 
                  ? '-top-2.5 text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium'
                  : 'top-3 text-gray-500'
              }`}>
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                required
                className="w-full bg-surface/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-secondary/50 focus:bg-surface/50 transition-all duration-300 peer"
                placeholder="Your Email"
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.email || formData.email 
                  ? '-top-2.5 text-xs bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent font-medium'
                  : 'top-3 text-gray-500'
              }`}>
                Your Email
              </label>
            </div>

            {/* Subject Field */}
            <div className="relative group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                required
                className="w-full bg-surface/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-tertiary/50 focus:bg-surface/50 transition-all duration-300 peer"
                placeholder="Subject"
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.subject || formData.subject 
                  ? '-top-2.5 text-xs bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent font-medium'
                  : 'top-3 text-gray-500'
              }`}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                required
                className="w-full bg-surface/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary/50 focus:bg-surface/50 transition-all duration-300 peer resize-none"
                placeholder="Your Message"
                rows="5"
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.message || formData.message 
                  ? '-top-2.5 text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium'
                  : 'top-3 text-gray-500'
              }`}>
                Your Message
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full mt-8 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-xl px-6 py-4 text-white font-semibold overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </span>
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
