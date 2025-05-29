import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    if (value.trim() !== '') {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // // Check for EmailJS configuration
    // if (
    //   !import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ||
    //   !import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ||
    //   !import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
    // ) {
    //   setFormErrors({
    //     general: 'Form configuration error. Please try again later.',
    //   });
    //   return;
    // }

    // Validation
    const errors: { [key: string]: string } = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      } else if (key === 'from_email' && !validateEmail(value)) {
        errors[key] = 'Please enter a valid email address';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 7000); // Increased timeout for accessibility
          form.current!.reset();
        },
        error => {
          console.error('EmailJS error:', error);
          setFormErrors({
            general: 'Failed to send message. Please try again later.',
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const getInputClasses = (field: string) =>
    `appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      formErrors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <section id="contact" className="mb-10">
      <h2 className="font-bold text-2xl">Get in Touch!</h2>
      <p className="my-4 text-gray-800">
        Whether you're a <strong>potential client</strong>,{' '}
        <strong>hiring manager</strong>, or a <strong>fellow developer</strong>,
        I'd love to hear from you.
      </p>
      <div className="container mx-auto py-6">
        <div className="max-w-lg bg-white shadow-lg rounded px-8 py-6">
          <form ref={form} onSubmit={sendEmail}>
            {/* General Error */}
            {formErrors.general && (
              <p className="text-red-500 text-center mb-4">
                {formErrors.general}
              </p>
            )}

            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Your name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="eg. John Doe"
                className={getInputClasses('from_name')}
                value={formValues.from_name}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.from_name}
                aria-describedby={
                  formErrors.from_name ? 'from_name-error' : undefined
                }
              />
              {formErrors.from_name && (
                <p id="from_name-error" className="text-red-500 text-sm">
                  {formErrors.from_name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="from_email"
              >
                Your email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="eg. johndoe@example.com"
                className={getInputClasses('from_email')}
                value={formValues.from_email}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.from_email}
                aria-describedby={
                  formErrors.from_email ? 'from_email-error' : undefined
                }
              />
              {formErrors.from_email && (
                <p id="from_email-error" className="text-red-500 text-sm">
                  {formErrors.from_email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                How can I help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message here"
                className={getInputClasses('message')}
                value={formValues.message}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.message}
                aria-describedby={
                  formErrors.message ? 'message-error' : undefined
                }
              />
              {formErrors.message && (
                <p id="message-error" className="text-red-500 text-sm">
                  {formErrors.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {messageSent && (
            <div className="bg-green-600 rounded text-white text-center px-1 py-2 my-2">
              Thanks for reaching out! I'll respond as soon as possible.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
