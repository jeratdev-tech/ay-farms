import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cbo20h7",
        "template_uoq9j04",
        form.current,
        "qopzs3LgsY1-Ao458"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-12"
    >
      <div className="max-w-4xl w-full mx-auto shadow-3xl rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold font-palanquin text-center text-black mb-8">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold font-palanquin text-black mb-4">
              Contact Information
            </h3>
            <p className="text-black mb-2">
              Phone:{" "}
              <a href="tel:08143795632" className="text-gray-700">
                08143795632
              </a>
              ,{" "}
              <a href="tel:08030863551" className="text-gray-700">
                08030863551
              </a>
            </p>
            <p className="text-black mb-2">
              Email:{" "}
              <a href="" className="text-gray-900">
                ayuba@actibetechnologies.org, nancy@activetechnologies.org
              </a>
            </p>
            <p className="text-black mb-4">
              Address: No. 90A Nelson Mandela Street, Asokoro
            </p>

            <h3 className="text-xl font-semibold font-palanquin text-black mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/people/AY-Agro-Hub/61557348143410/"
                className="text-blue-600 hover:text-blue-800"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/yourprofile"
                className="text-blue-400 hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/yourprofile"
                className="text-blue-700 hover:text-blue-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  name="user_name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  name="user_email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  name="user_phone"
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
