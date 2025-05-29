import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form values
    setFormValues(prev => ({ ...prev, [name]: value }));

    // Remove error if field is now valid
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

    // Validation
    const errors: { [key: string]: string } = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
          form.current.reset();
          setFormValues({ from_name: '', from_email: '', message: '' });
        },
        error => {}
      );
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
              />
              {formErrors.from_name && (
                <p className="text-red-500">{formErrors.from_name}</p>
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
              />
              {formErrors.from_email && (
                <p className="text-red-500">{formErrors.from_email}</p>
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
                placeholder=""
                className={getInputClasses('message')}
                value={formValues.message}
                onChange={handleInputChange}
              />
              {formErrors.message && (
                <p className="text-red-500">{formErrors.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>

          {messageSent && (
            <div className="bg-green-600 rounded text-white text-center py-2 my-2">
              Thanks for reaching out! I'll respond as soon as possible.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
