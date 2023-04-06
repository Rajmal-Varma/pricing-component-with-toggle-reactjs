import { useState } from "react"


function Price() {
  const [annually, setAnnually] = useState(false)

  return (
    <>
     

      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center mb-7 price">
          Our Pricing
        </h1>
        <div class="toggle lg:mb-10">
          <label class="name">Annually</label>
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />

          <label for="checkbox" class="label">
            <div class="ball"></div>
          </label>

          <h4 class="name">Monthly</h4>
        </div>

        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          <article className="gradient p-8 rounded box shadow lg:w-full">
            <h2 className="font-serif">Basic</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span> 19.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span> 219.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
                Java Course
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                Html
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-600">
                More Account
              </li>
            </ul>
            <button className="linear-gradient btn text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
              Start Now
            </button>
          </article>

          <article className="linear-gradient p-8 rounded shadow lg:w-full lg:scale-110">
            <h2 className=" font-serif ">Professional</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-white text-5xl">
                <span className="text-3xl mr-3">$</span> 40.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-white text-5xl">
                <span className="text-3xl mr-3">$</span> 400.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="text-white border-t border-white py-3">
              Development Course
              </li>
              <li className="text-white border-t border-white py-3">
                5-Project
              </li>
              <li className="text-white border-y border-white py-3">
                Placement
              </li>
            </ul>
            <button className="bg-white text-slate-800 py-2 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">
              Start Now
            </button>
          </article>

          <article className="gradient p-8 rounded box shadow lg:w-full">
            <h2 className=" font-serif">Master</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span> 50.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span> 580.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
               Professional Courses
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                Automation
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-600">
               Placment+Mentor
              </li>

            </ul>
            <button className="linear-gradient btn text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
             Start Now
            </button>
          </article>
        </div>

        
      </section>

      
    </>
  )
}

export default Price;
