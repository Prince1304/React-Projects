import img from "../assets/img.png";

export default function HeroImage() {
  return (
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
  );
}
