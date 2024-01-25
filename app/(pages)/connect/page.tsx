export const metadata = {
    title: 'Connect - Simple',
    description: 'Page description',
  }
    
  export default function Connect() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Connect</h1>
          </div>

          <div className="mb-3 text-lg text-black dark:text-gray-400 pt-5">
              Email: tiogacounty@cefepa.net
              <br/><br/> Phone Number: 570-724-4591
              <br/><br/> Address: 16 Charleston St. Wellsboro, PA 16901
              <br/><br/> Office Hours: 9am-5pm Monday - Friday
          </div>

        </div>
      </div>
    </section>
    )
  }
  