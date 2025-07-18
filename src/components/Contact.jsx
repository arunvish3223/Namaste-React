import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-20 px-4">
      <div className="text-center max-w-xl w-full">
        <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-2">
          We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to help.
        </p>
        <p className="text-gray-600 mb-6">
          Email us at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a> or call us at <span className="font-semibold">+91 98765 43210</span>.
        </p>
        <form className="flex flex-col items-center space-y-4">
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="5"
            placeholder="Write your feedback here..."
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
