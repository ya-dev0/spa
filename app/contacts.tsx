import React from "react";

function Contacts() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col items-center gap-6">
      <h1 className="text-4xl text-white font-bold">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-3xl text-center">
        We'd love to hear from you! Whether you have questions about our recipes, feedback, or collaboration inquiries, feel free to reach out to us at:
      </p>
      <p className="text-lg text-gray-300">Email: support@ketorecipehub.com</p>
      <p className="text-lg text-gray-300">Phone: +1 (555) 123-4567</p>
    </main>
  );
}

export default Contacts;
