const HomeCardTwo = () => {
  return (
    <div className="pt-10 h-screen w-screen flex flex-col items-center ">
      <h1 className="font-bold text-[28px]">About Splash Art</h1>
      <section className="flex w-screen justify-center gap-7 pt-10">
        <div className="w-[45%] h-[230px] rounded-xl bg-white ">
          {" "}
          <h1 className="p-5 font-bold text-xl">
            Fun Side Project to show mastery of Next JS
          </h1>
          <p className="p-5">
            I made this app for fun, leverging many frame works. Such as Next.js{" "}
            Tailwind, Javascript, Postgres and more.
          </p>
        </div>
        <div className="w-[45%] h-[230px] bg-white rounded">
          <h1 className="p-5 font-bold text-xl">Ultilization Of Pexel API</h1>
          <p className="p-5">
            I Leveraged Pexel Api to grab all images dispalyed on this site.
            Users can also upload theres images to the site.
          </p>
        </div>
      </section>
      <section className="flex w-screen justify-center gap-7 pt-10">
        <div className="w-[45%] h-[230px] rounded-xl bg-white ">
          {" "}
          <h1 className="p-5 font-bold text-xl">
            Feel Free To upload and delete images{" "}
          </h1>
          <p className="p-5">
            Site has full CRUD functionality. Login users feel free to upload
            and delete items.
          </p>
        </div>
        <div className="w-[45%] h-[230px] bg-white rounded">
          <h1 className="p-5 font-bold text-xl">Ai Image Generation</h1>
          <p className="p-5">
            I did integrate with google gemini to try and create image
            generations but i do not have enough funds for users to keep
            generating images haha
          </p>
        </div>
      </section>
      <button className="w-[150px] h-[50px] bg-blue-800 text-white font-bold rounded mt-10">
        Explore Art{" "}
      </button>
    </div>
  );
};
export default HomeCardTwo;
