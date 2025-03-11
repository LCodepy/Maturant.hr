import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg_grid w-full flex flex-col items-center justify-center">
        <div className="min-h-screen">
          {/* About Us Hero Section */}
          <section className="px-20 py-48 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold">O nama</h1>
            <p className="text-2xl mt-3 max-w-3xl">
              Maturant.hr je prva web-stranica sa video pripremama za državnu
              maturu, kreirana od maturanata za maturante.
            </p>
          </section>

          {/* Our Mission */}
          <section className="py-16 px-6 text-center bg-slate-200">
            <h2 className="text-3xl font-bold mb-6">Naša misija</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Želimo omogućiti svim maturantima kvalitetnu, pristupačnu i
              interaktivnu pripremu za državnu maturu putem modernih video
              lekcija.
            </p>
          </section>

          {/* Our Team */}
          <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Naš tim</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">🎓 Ivan Novak</h3>
                <p>Osnivač i instruktor matematike</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">📚 Ana Kovačić</h3>
                <p>Instruktorica hrvatskog jezika</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">🔬 Marko Perić</h3>
                <p>Instruktor fizike</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-6 text-center bg-sky-500 text-white">
            <h2 className="text-3xl font-bold">Zašto odabrati nas?</h2>
            <p className="text-lg mt-3 max-w-3xl mx-auto">
              Naš sadržaj je prilagođen maturantima, kreiran od najboljih bivših
              maturanata i potpuno fleksibilan za vaše potrebe.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
