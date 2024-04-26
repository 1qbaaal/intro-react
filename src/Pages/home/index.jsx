export default function HomePage() {
  return (
    <>
      <div className="h-[650px] flex flex-col justify-center items-start">
        <div className="font-bold text-white text-5xl">Hi, There!</div>
        <div className="flex justify-center items-start pt-2">
          <p className="font-bold text-white text-5xl">I'am </p>
          <p className="text-violet-400 text-5xl ml-2">Muhammad Iqbal</p>
        </div>
        <div className="text-violet-400 text-3xl my-3">
          Full Stack kenek trug
        </div>
      </div>
      <div className="h-[650px] text-white">
        <div className="flex justify-center">
          <div className="text-3xl text-white">
            LET ME <span className="text-violet-400">INTRODUCE </span>MYSELF
          </div>
        </div>

        <div className="text-white my-3 justify-start">
          <div className="flex items-start">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </div>
          <div className="flex items-start">
            I am fluent in classics like C++, Javascript and Go.
          </div>
          <div className="flex items-start">
            My field of Interest's are building new Web Technologies and
            Products and also in areas related to Blockchain.
          </div>
          <div className="flex justify-start">
            Whenever possible, I also apply my passion for developing products
            with Node.js and Modern Javascript Library and Frameworks like
            React.js and Next.js
          </div>
        </div>
      </div>
    </>
  );
}
