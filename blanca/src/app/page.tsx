import Navbar from "./(app)/components/Navbar/page"

export default function Home() {
  return (
    <div className="bg-[#FFFC92]">
      <Navbar />
      <div className="flex-col lg:px-80  py-20">
        <div className="flex">
          <div className="flex flex-col">
            <p className="lg:text-5xl text-black font-sans my-4">Instant answers to all your research questions from all your qualitative data</p>
            <p className="lg:text-2xl text-black font-sans my-4">Iterate and collaborate with our AI research assistant to get instant synthesis from multiple files at once, backed by evidence.</p>
          </div>
          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" className="rounded-lg mx-8" />
        </div>
      </div>
    </div>
  );
}
