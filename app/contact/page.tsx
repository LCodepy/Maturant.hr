import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg_grid w-full flex flex-col items-center justify-center">
        <div className="min-h-screen">
          {/* Contact Hero Section */}
          <section className="px-20 py-48 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold">Kontakt</h1>
            <p className="text-2xl mt-3 max-w-3xl">
              Imate pitanja? Kontaktirajte nas putem obrasca ispod ili putem
              e-maila.
            </p>
          </section>

          {/* Contact Form */}
          <section className="py-16 px-6 text-center bg-slate-200">
            <h2 className="text-3xl font-bold mb-6">Pošaljite nam poruku</h2>
            <form className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4 text-left">
                <label className="block text-lg font-semibold">Ime</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Vaše ime"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-lg font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Vaš email"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-lg font-semibold">Poruka</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={5}
                  placeholder="Vaša poruka"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-400 active:bg-rose-500"
              >
                Pošalji
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Naši kontakt podaci</h2>
            <p className="text-lg">📧 Email: kontakt@maturant.hr</p>
            <p className="text-lg">📍 Adresa: Zagreb, Hrvatska</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
