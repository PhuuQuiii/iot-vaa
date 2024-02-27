import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-6xl font-bold mb-8">
        VUI LÒNG CHỌN LỰA CHỌN
      </h1>
      <p className="text-center text-6xl font-bold mb-20">
        PLEASE SELECT THE OPTION
      </p>
      <div className="grid grid-cols-2 gap-16 w-2/3">
        <Link href="/Voice">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            VOICE {/* Liên kết tới trang Voice */}
          </button>
        </Link>
        <Link href="/Map">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            MAP {/* Liên kết tới trang Map */}
          </button>
        </Link>
        <Link href="/Lookup">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            LOOKUP {/* Liên kết tới trang Lookup */}
          </button>
        </Link>
        <Link href="/Exit">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            EXIT {/* Liên kết tới trang Exit */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
