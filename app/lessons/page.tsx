import BunnyVideoPlayer from "@/components/bunny/BunnyVideoPlayer";
import DarkNavbar from "@/components/navbar/DarkNavbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PayButton from "@/components/buttons/PayButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession, Session } from "next-auth";
import BuyLessonButton from "@/components/buttons/BuyLessonButton";

const Lessons = async () => {
  const session = await getServerSession(authOptions);

  // const url1 =
  //   "https://iframe.mediadelivery.net/embed/389758/6546cdb6-5395-49a9-95df-e7d533a9c8e9?token=904CFA05CAC014298C2C10AFBB72D99B1A3D0B0D5B1A01CC5C321B1B90340189&expires=1823440202";

  const lessons = [
    "fizika",
    "fizika-zad",
    "matematika-a",
    "matematika-b",
    "matematika-zad-a",
    "matematika-zad-b",
  ];

  const lessonNames: { [key: string]: string } = {
    fizika: "Fizika",
    "fizika-zad": "Zadaci",
    "matematika-a": "Matematika A",
    "matematika-b": "Matematika B",
    "matematika-zad-a": "Zadaci A",
    "matematika-zad-b": "Zadaci B",
  };

  const lessonDescriptions: { [key: string]: React.ReactNode } = {
    fizika: (
      <>
        <p>- 15 video lekcija teorije</p>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 40 eura</p>
      </>
    ),
    "fizika-zad": (
      <>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 30 eura</p>
      </>
    ),
    "matematika-a": (
      <>
        <p>- 15 video lekcija teorije</p>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 40 eura</p>
      </>
    ),
    "matematika-b": (
      <>
        <p>- 15 video lekcija teorije</p>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 40 eura</p>
      </>
    ),
    "matematika-zad-a": (
      <>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 30 eura</p>
      </>
    ),
    "matematika-zad-b": (
      <>
        <p>- 10 video lekcija zadataka</p>
        <p>- Sve to za samo 30 eura</p>
      </>
    ),
  };

  if (session?.user && session?.user.paidLectures.length > 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-full h-[800px]"></div>
          </div>
          <DarkNavbar />
          <div className="w-full mt-20 justify-center items-center flex flex-col">
            <section className="w-full py-20 flex flex-col justify-center">
              <div className="w-full">
                <h2 className="text-4xl font-medium">Vaše Lekcije</h2>
              </div>
              <div className="w-full py-8">
                <ul className="flex flex-row items-center space-x-4">
                  {session.user.paidLectures.map((lesson) => (
                    <li key={lesson}>
                      <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md min-h-80">
                        <div>
                          <h2 className="text-3xl">{lessonNames[lesson]}</h2>
                          <div className="text-lg mt-4">
                            {lessonDescriptions[lesson]}
                          </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center mt-8">
                          <div className="py-2 px-6 bg-blue-500 text-white font-medium text-xl rounded-md">
                            Otvori Lekciju
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="w-full mb-60 flex flex-col justify-center">
              <h2 className="text-4xl font-medium">Ostale Lekcije</h2>
              <div className="mt-16">
                <div>
                  <h2 className="text-4xl">Matematika</h2>
                  <div className="w-full py-8">
                    <ul className="flex flex-row items-center space-x-4">
                      {lessons
                        .filter((value) => {
                          return (
                            value.includes("matematika") &&
                            session.user.paidLectures.indexOf(value) === -1
                          );
                        })
                        .map((lesson) => (
                          <li
                            key={lesson}
                            className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md min-h-80"
                          >
                            <div>
                              <h2 className="text-3xl">
                                {lessonNames[lesson]}
                              </h2>
                              <div className="text-lg mt-4">
                                {lessonDescriptions[lesson]}
                              </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center mt-8">
                              <BuyLessonButton />
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl mt-12">Fizika</h2>
                  <ul className="flex flex-row items-center space-x-4 py-8">
                    {lessons
                      .filter((value) => {
                        return (
                          value.includes("fizika") &&
                          session.user.paidLectures.indexOf(value) === -1
                        );
                      })
                      .map((lesson) => (
                        <li
                          key={lesson}
                          className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md min-h-80"
                        >
                          <div>
                            <h2 className="text-3xl">{lessonNames[lesson]}</h2>
                            <div className="text-lg mt-4">
                              {lessonDescriptions[lesson]}
                            </div>
                          </div>
                          <div className="w-full flex flex-col items-center justify-center mt-8">
                            <BuyLessonButton />
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>
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
  }

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
        <div className="w-full flex flex-col justify-center py-64 mt-2">
          <h1 className="text-5xl font-semibold text-black">Dobrodošli!</h1>
          <h2 className="text-3xl mt-4">
            Ovdje možete vidjeti sve naše pakete.
          </h2>
          <div className="my-20 mt-40">
            <div>
              <h2 className="text-4xl">Matematika</h2>
              <div className="py-8 flex flex-row space-x-8">
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Matematika A</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Matematika B</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci A</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci B</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl mt-12">Fizika</h2>
              <div className="py-8 flex flex-row space-x-8">
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Fizika</h2>
                    <div className="text-lg mt-4">
                      <p>- 15 video lekcija teorije</p>
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 40 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
                <div className="bg-slate-100 rounded-md p-8 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="text-3xl">Zadaci</h2>
                    <div className="text-lg mt-4">
                      <p>- 10 video lekcija zadataka</p>
                      <p>- Sve to za samo 30 eura</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center mt-8">
                    <BuyLessonButton />
                  </div>
                </div>
              </div>
            </div>
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

export default Lessons;
