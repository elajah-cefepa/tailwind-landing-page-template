import Mark from '@/public/images/Mark.jpg';
  
  export default function Staff() {
    return (
      <section className="bg-gradient-to-b from-[#F15A24] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-10 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Meet Our Staff</h1>
          </div>

          <div className="flex items-end">
            <img src={Mark.src} width="200" height="200" className='pr-5'/>
            <h1 className='text-2xl font-bold'>Director</h1>
          </div>
          <p className="mb-3 text-lg text-black dark:text-gray-400 pt-5">
              Mark is a city boy who loves the countryside. He hails from Philadelphia, where he came to know Jesus later in life. 
              After serving as a missionary in Kensington for several years, Mark moved to Wellsboro to work as Farm Manager for a Christian discipleship program. 
              He loves playing guitar and board games, as well as hunting, hiking, and heralding the good news of Jesus Christ. 
              He is excited to be serving the children of Tioga County!
          </p>

        </div>
      </div>
    </section>
    )
  }
  