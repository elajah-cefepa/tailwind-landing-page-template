export const metadata = {
    title: 'What We Believe - Simple',
    description: 'Page description',
  }

  import GNC from '@/public/images/gnc.jpg';
    
  export default function WhatWeBelieve() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">What We Believe</h1>
          </div>

          <h1 className="text-center text-2xl font-semibold">
              Our aim is to inspire the children of Tioga County to persevere in the race before them, empowered by the Holy Spirit. 
          </h1>
          <div className="flex items-center justify-center">
            <img src={GNC.src} width="800" height="800" className="pt-5" alt="Centered Image" />
          </div>

        </div>
      </div>
    </section>
    )
  }
  