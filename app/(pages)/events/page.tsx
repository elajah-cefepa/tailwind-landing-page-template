export const metadata = {
    title: 'Events - Simple',
    description: 'Page description',
  }
    
  import Soccer from '@/public/images/soccer.jpg';
  import Camp1 from '@/public/images/camp1.jpg';
  import Camp2 from '@/public/images/camp2.jpg';

  export default function Events() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h1">Upcoming Events</h1>
          </div>

          {/* Cards */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Card */}
                <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  <div className="aspect-w-16 aspect-h-11">
                    <img className="w-full object-cover rounded-xl" src={Camp2.src} alt="Image Description" />
                  </div>
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      Nauvoo Good News Day Camp 
                    </h3>
                    <p className="mt-5 text-gray-600 dark:text-gray-400">
                      July 8-12
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-x-3">
                    <div>
                      <h5 className="text-sm text-gray-800 dark:text-gray-200">Location:</h5>
                    </div>
                  </div>
                </a>
                {/* End Card */}

                {/* Card */}
                <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  <div className="aspect-w-16 aspect-h-11">
                    <img className="w-full object-cover rounded-xl" src={Camp1.src} alt="Image Description" />
                  </div>
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                      Ives Run Good News Day Camp 
                    </h3>
                    <p className="mt-5 text-gray-600 dark:text-gray-400">
                      July 29-August 2
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-x-3">
                    <div>
                      <h5 className="text-sm text-gray-800 dark:text-gray-200">Location:</h5>
                    </div>
                  </div>
                </a>
                {/* End Card */}
                
              </div>
              {/* End Grid */}

            </div>
            {/* End Card Blog */}

        </div>
      </div>
    </section>
    )
  }
  