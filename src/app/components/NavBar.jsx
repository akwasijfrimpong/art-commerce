import Image from "next/image";
export default function NavBar() {
  return (
    <div className="h-[60px] sticky top-0 w-[100%] bg-white z-30 flex gap-10 items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="ml-2"
      />
      <div>
        <button className="h-[60px] w-[120px] border-[1px] font-bold">
          {" "}
          Explore Art
        </button>
        <button className="h-[60px] w-[120px] border-[1px] border-l-0 font-bold">
          Publish Art
        </button>
      </div>
      <input
        className="rounded-2xl border-[1px] border-black h-[65%] w-[50%] pl-8"
        placeholder="Search Art"
      ></input>
      <div>
        <button className="h-[60px] w-[120px] border-[1px] font-bold">
          {" "}
          Login{" "}
        </button>
        <button className="h-[60px] w-[120px] border-[1px] font-bold border-l-0">
          {" "}
          Cart{" "}
        </button>
      </div>
    </div>
  );
}
