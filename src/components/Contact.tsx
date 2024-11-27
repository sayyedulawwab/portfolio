import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Perform validation
    const formData = new FormData(form.current);
    let errors: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      if (!value) {
        errors[key] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear previous form errors if any
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
          setTimeout(() => setMessageSent(false), 5000); // Clear toast message after 5 seconds
          form.current.reset();
        },
        error => {}
      );
  };

  return (
    <section id="contact" className="mb-10">
      <h2 className="font-bold text-2xl">Get in Touch!</h2>
      <p className="my-4 text-gray-800">
        Whether you're a <strong>potential client</strong>,{' '}
        <strong>hiring manager</strong>, or a <strong>fellow developer</strong>,
        I'd love to hear from you.
      </p>
      <div className="container mx-auto py-6">
        <div className="max-w-lg bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded px-8 py-6">
          {/* <div className="font-bold text-xl mb-4">Let's Work Together!</div> */}

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="eg. John Doe"
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="eg. johndoe@example.com"
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="clientProject"
              >
                How can I help you?
              </label>
              <textarea
                id="clientProject"
                name="clientProject"
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder=""
              ></textarea>
              {formErrors.clientProject && (
                <p className="text-red-500">{formErrors.clientProject}</p>
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
              Thanks for reaching out! I'll respond as soon as possible. If it's
              urgent, you can email me directly at sayyedulawwab@gmail.com
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
