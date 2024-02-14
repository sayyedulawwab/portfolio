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
        'service_29wpt6n',
        'template_gfshrv7',
        form.current,
        'EotImljlWTADgFk_L'
      )
      .then(
        result => {
          console.log(result.text);
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000); // Clear toast message after 5 seconds
          form.current.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div className="container mx-auto py-12">
        <div className="max-w-lg bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded px-8 py-6">
          <div className="font-bold text-xl mb-4">
            Hello Muhammad Sayyedul Awwab,
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="clientProject"
              >
                Tell me about your project
              </label>
              <textarea
                id="clientProject"
                name="clientProject"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Tell me about your project"
              ></textarea>
              {formErrors.clientProject && (
                <p className="text-red-500">{formErrors.clientProject}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Enter your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                Enter your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
          {messageSent && (
            <div className="bg-green-600 rounded text-white text-center py-2 my-2">
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
