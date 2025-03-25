import DarkNavbar from "@/components/navbar/DarkNavbar";
import Footer from "@/components/footer/Footer";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-full h-[860px] animate-gradient-triangle 
                        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 
                        blur-2xl clip-angle-line"
        ></div>
      </div>
      <div className="w-full max-w-6xl">
        <DarkNavbar />
        <div className="w-full flex flex-col justify-center">
          <div className="min-h-screen">
            {/* About Us Hero Section */}
            <section className="py-60 mt-2 text-left flex flex-col">
              <h1 className="text-5xl font-semibold mt-2">Pozdrav,</h1>
              <p className="text-2xl mt-3 max-w-3xl">
                Mi smo studenti FER-a, i napravili smo ovu stranicu kako bi
                olakšali maturantima pripremanje za maturu.
              </p>
            </section>

            {/* Our Mission */}
            <section className="text-left mb-20">
              <h2 className="text-5xl font-bold mb-6">Cilj</h2>
              <p className="text-xl max-w-3xl">
                Vjerojatno se pitate zašto smo napravili ovu stranicu kada već
                postoje vrlo dobre pripreme za maturu kao što su trinom i
                auxilia.
              </p>
              <p className="text-xl max-w-3xl my-4">
                Ideju za ovu stranicu smo dobili još za vrijeme naših
                maturantskih dana, kada smo iz prve ruke vidjeli da popularne
                pripreme za maturu nisu uvijek korisne i da puno maturanata ne
                voli taj pristup učenju.
              </p>
              <p className="text-xl max-w-3xl">
                Imamo 3 prednosti nad klasičnim pripremama:
              </p>
              <div className="flex flex-col text-center max-w-min max-h-min">
                <div className="p-8 mt-8 rounded-full bg-blue-400 text-white text-xl">
                  1.
                </div>
                <div className="p-8 mt-8 rounded-full bg-blue-400  text-white text-xl">
                  2.
                </div>
                <div className="p-8 mt-8 rounded-full bg-blue-400  text-white text-xl">
                  3.
                </div>
              </div>
            </section>

            {/* Our Team */}
            <section className="text-left mb-40">
              <h2 className="text-4xl font-bold my-6">Naš tim</h2>
              <div className="w-fit grid grid-cols-1 md:grid-rows-2 gap-6">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold">Lovro Gale</h3>
                  <p>Osnivač i instruktor</p>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold">Jakov Džijan</h3>
                  <p>Osnivač i instruktor</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Footer />
        </div>
        <div className="absolute bottom-0 w-full h-[700px] bg-gray-100 clip-triangle-bottom -z-10"></div>
      </div>
    </div>
  );
};

export default About;
