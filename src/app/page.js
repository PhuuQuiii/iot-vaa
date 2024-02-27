import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-8xl mb-4">XIN CHÀO</h1>
      <h2 className="text-center text-8xl mb-16">WELCOME</h2>
      <p className="text-center text-4xl mb-4">VUI LÒNG LỰA CHỌN NGÔN NGỮ</p>
      <p className="text-center text-4xl mb-16">PLEASE SELECT YOUR LANGUAGE</p>
      <div className="grid grid-cols-3 gap-4 w-2/3">
        <Link href="/Home">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg">
            English
          </button>
        </Link>
        <div className="invisible">02</div>
        <Link href="/Home">
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg">
            Tiếng Việt
          </button>
        </Link>
      </div>
    </div>
  );
}
