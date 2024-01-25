export const metadata = {
    title: 'About us - Simple',
    description: 'Page description',
  }

import * as React from "react";
import Image from 'next/image';
    
import Staff from "./Staff"
import Commitee from "./commitee"

  export default function About() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="bg-gradient-to-br from-[#F8972D] via-[#F15A24] to-[#FE1878] p-4 rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
              <h1 className="h1">About Us</h1>
            </div>

              <p className="mb-3 text-lg text-black dark:text-gray-400">
                Mable Ruth Wray arrived in Wellsboro, Tioga County in 1955 with the purpose of establishing a CEF committee. 
                In August of 1956, the national CEF Committee granted a charter of recognition, 
                and CEF of Tioga County was incorporated in July 1959 with Dorothy Negley as director. 
              </p>
              <p className="text-lg text-black dark:text-gray-400 pb-10">
                The primary ministry was Good News Clubs held at homes. 
                Over time, many people have been involved with the ministry, but the ultimate goal remains the same: 
                to spread the gospel of Jesus Christ to the children of Tioga County.
              </p>
          </div>


          <Staff />

          <h1 className="h1 text-center">Committee Members</h1>
          <Commitee />

        </div>
      </div>
    </section>

    
    )
  }
  