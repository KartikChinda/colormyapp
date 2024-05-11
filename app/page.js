import HomePage from "./components/HomePage";
import ColorForm from "./components/ColorForm";

export default function Home() {
  return (
    <>
      <div className="border-4 border-black w-[90%] md:mt-14 px-3 mt-5 mx-auto mb-12 flex flex-col md:flex-row bg-[#e6e5db] md:justify-around py-5">
        <div className="border-4 border-black md:w-[62%] p-5 bg-[#fff] ">
          <HomePage />
        </div>
        <div className="border-4 border-black md:w-[32%] p-5 text-center bg-[#fff] ">
          <ColorForm />
        </div>
      </div>

    </>
  );
}
