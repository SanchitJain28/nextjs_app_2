"use client"
import { Check, CircleCheck } from "lucide-react";
import Navbar from "./(app)/components/Navbar/page"
import { motion } from "motion/react"
export default function Home() {
  return (
    <div className="bg-[#FFFC92]">
      <Navbar />
      <div className="flex-col lg:px-80 px-8 py-20">
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col">
            <p className="lg:text-5xl text-4xl text-black font-sans my-4">Instant answers to all your research questions from all your qualitative data</p>
            <p className="lg:text-2xl text-2xl text-black font-sans my-4">Iterate and collaborate with our AI research assistant to get instant synthesis from multiple files at once,<span className="font-bold">backed by evidence</span> .</p>
            <button className='bg-[#311F35] mx-2 rounded-3xl px-4 py-2 text-[#FFFC92] min-w-1/3 my-4  text-2xl'>Get answers from your files for free</button>
          </div>
          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" className="rounded-lg mx-8" />
        </div>

        <div className="flex lg:flex-row flex-col tags my-12 lg:px-24 px-8">
          <div className="flex mx-4 my-2">
            <Check color="#ffffff" className="mx-2  p-1 bg-[#311F35] rounded-full" />
            <p className="text-black">SOC 2 Type II</p>
          </div>
          <div className="flex mx-4 my-2">
            <Check color="#ffffff" className="mx-2 p-1 bg-[#311F35] rounded-full" />
            <p className="text-black">Data stored in Scandinavia</p>
          </div>
          <div className="flex mx-4 my-2">
            <Check color="#ffffff" className="mx-2 p-1 bg-[#311F35] rounded-full" />
            <p className="text-black">PII Redaction</p>
          </div>
          <div className="flex mx-4 my-2">
            <Check color="#ffffff" className="mx-2 p-1 bg-[#311F35] rounded-full" />
            <p className="text-black">SOC 2 Type II</p>
          </div>
          <div className="flex mx-4 my-2">
            <Check color="#ffffff" className="mx-2 p-1 bg-[#311F35] rounded-full" />
            <p className="text-black">SOC 2 Type II</p>
          </div>
        </div>

        <div className="lg:px-40 px-8 mt-24">
          <p className="text-3xl font-bold text-center text-[#311F35] font-sans">Trusted by research, UX and product teams at</p>
          <div className="flex lg:flex-row flex-col justify-center my-12 ">
            <div className="flex lg:mx-12 my-4">
              <Check color="#ffffff" size={48} className="mx-2 p-1 bg-[#311F35] text-3xl rounded-full" />
              <p className="text-3xl font-bold text-center text-[#311F35] font-sans">Norwegeian</p>
            </div>
            <div className="flex lg:mx-12 my-4">
              <Check color="#ffffff" size={48} className="mx-2 p-1 bg-[#311F35] text-3xl rounded-full" />
              <p className="text-3xl font-bold text-center text-[#311F35] font-sans">Opinion</p>
            </div>
            <div className="flex lg:mx-12 my-4">
              <Check color="#ffffff" size={48} className="mx-2 p-1 bg-[#311F35] text-3xl rounded-full" />
              <p className="text-3xl font-bold text-center text-[#311F35] font-sans">Netlife</p>
            </div>
            <div className="flex lg:mx-12 my-4">
              <Check color="#ffffff" size={48} className="mx-2 p-1 bg-[#311F35] text-3xl rounded-full" />
              <p className="text-3xl font-bold text-center text-[#311F35] font-sans">Netlife</p>
            </div>
          </div>
        </div>

        <motion.div className="flex flex-col my-32" initial={{backgroundColor:"#FFFC92"}} transition={{duration:10}} whileInView={{backgroundColor:"#FFFFFF"}} >
          <p className="text-5xl font-bold text-center text-[#311F35] font-[none]">Analyse your research <br/> project in seconds</p>
          <p className="text-2xl my-8 font-sans text-center text-[#311F35] font-sans">Analyse multiple user- interviews or tests, notes, reports and more.<br/> In seconds you'll get instant themes and findings across all the files.</p>
          <img src="https://cdn.prod.website-files.com/66557da95006d9608d1d9932/666856685797a0428f39a201_Sea%20of%20insights-p-800.png" className="w-full px-56"/>
        </motion.div>
      </div>
    </div>
  );
}
