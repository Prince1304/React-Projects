import React from "react";
import img from "./assets/img.png";

const Form = () => {
    const form = () => {
        onDefault
        console.log("Typing");
    }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col md:flex-row">
          {/* Left Section - Form */}
          <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12">
            <form className="flex flex-col gap-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-amber-700 tracking-tight">
                Save Notes
              </h1>
              <p className="text-center text-gray-500 text-sm sm:text-base -mt-3">
                Write down your thoughts and never forget them.
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-lg sm:text-xl font-semibold text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="w-full text-base sm:text-lg p-3 sm:p-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none transition-all duration-200 placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-lg sm:text-xl font-semibold text-gray-700">
                  Note
                </label>
                <textarea
                  placeholder="Enter Your Note"
                  rows="6"
                  className="w-full text-base sm:text-lg p-3 sm:p-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 outline-none transition-all duration-200 resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                onSubmit={() => {
                    form()
                }
                }
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg sm:text-xl font-semibold p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                ✨ Save Note
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="hidden md:flex w-full md:w-2/5 bg-gradient-to-br from-amber-100 to-orange-200 items-center justify-center p-6 sm:p-8 md:p-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-300/30 rounded-full blur-2xl"></div>
              <img
                src={img}
                alt="Notebook illustration"
                className="relative w-full max-w-[220px] lg:max-w-[280px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
