export const metadata = {
    title: 'Ministries - Simple',
    description: 'Page description',
  }

  import Afterschool from '@/public/images/afterschool.jpg';
  import GNC from '@/public/images/gnc.jpg';
  import Release from '@/public/images/release.jpg';
  import TTC from '@/public/images/ttc.jpg';

  export default function Ministries() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-15">
            <h1 className="h1">Ministries</h1>
          </div>

          {/* Icon Blocks */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-10">

                {/* Card */}
                <div className="w-full h-full bg-white shadow-lg p-5 dark:bg-slate-900">
                  <div className="flex flex-col lg:flex-row items-center gap-x-4 mb-3">
                    <img src={Afterschool.src} width="200" height="200" className='pr-5'/>
                    <div className="flex-shrink-0">
                      <h3 className="block text-xl font-semibold mt-4 lg:mt-0 text-gray-800 dark:text-white">After School Program</h3>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400">Elementary schools are one of the largest mission fields in the United States today. After School/In School Good News Clubs are designed to reach boys and girls in the elementary schools with the Gospel of Jesus Christ. These clubs are held immediately after school for one hour per week and are taught by teams of trained volunteers from local churches. Clubs include a Bible lesson, memory verse, missionary story, songs, prizes, and more.</p>
                </div>
                {/* End Card */}

                {/* Card */}
                <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                  <div className="flex flex-col lg:flex-row items-center gap-x-4 mb-3">
                    <img src={GNC.src} width="200" height="200" className='pr-5'/>
                    <div className="flex-shrink-0">
                      <h3 className="block text-xl font-semibold mt-4 lg:mt-0 text-gray-800 dark:text-white">5-Day Clubs</h3>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400">5-Day Clubs are free, hour-long programs held for five consecutive days during the summer months in parks, on porches and front steps, in yards, or inside homes.
                    The 5-Day Club environment not only allows a unsaved child to hear the Gospel, but it also challenges the saved child to grow in their walk with the Lord. The children are challenged to see the mission field that is all around them, both locally and all around the world. They are encouraged to share their faith and invite friends to join them in club.</p>
                </div>
                {/* End Card */}

                {/* Card */}
                <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                  <div className="flex flex-col lg:flex-row items-center gap-x-4 mb-3">
                    <img src={TTC.src} width="200" height="200" className='pr-5'/>
                    <div className="flex-shrink-0">
                      <h3 className="block text-xl font-semibold mt-4 lg:mt-0 text-gray-800 dark:text-white">Teacher Training</h3>
                    </div>
                  </div>
                  <p className="text-black dark:text-gray-400">Throughout the school year, free teacher training classes are held at our office. During class, we present and discuss Good News Club material, share teaching tips, and have a wonderful time of fellowship. If you are looking to strengthen your teaching skills and learn how to more effectively share the Word of God with children, we would love to have you join us! For churches who are interested, we are more than happy to come to you. Call our office to find out more about our Teacher Training Class today.</p>
                </div>
                {/* End Card */}

              </div>
            </div>
            {/* End Icon Blocks */}         

        </div>
      </div>
    </section>
    )
  }
  