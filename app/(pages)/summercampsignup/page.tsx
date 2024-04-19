import React from 'react';

export const metadata = {
  title: 'Summercampsignup - Simple',
  description: 'Page description',
}

export default function SummerCampSignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10">
            <h1 className="h1">Sign Up for Summer Camp Here</h1>
          </div>
    
          <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <h2 className="font-semibold text-xl text-gray-600">Camp Registration</h2>
                <p className="text-gray-500 mb-6">Children ages 6-12. Early registration costs $45 per child, and it ends two weeks before camp begins. After that, the fee is $50 per child. Scholarships may be available. The camps are from 9:30 a.m. to 3 p.m.</p>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                      <p className="font-medium text-lg">Personal Details</p>
                      <p>Please fill out all the fields.</p>
                      <p className="mt-4"></p> 
                      <div className="md:col-span-5">
                        <label htmlFor="camp_pick">Camp Location</label>
                        <select name="camp_pick" id="camp_pick" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          <option value="camp1">Nauvoo School House116 Linck Hill Road
                                        Morris, PA 16938</option>
                          <option value="camp2">Ives Run South LoopIves Run South Shelter
                                     Mansfield, PA 16933</option>
                        </select>
                        <p className="text-gray-500 mb-6">Type VRQ9+C25 Tioga, Pennsylvania in Google Maps for directions to the exact location.</p>

                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="parent_full_name">Parent/Guardian Full Name</label>
                          <input type="text" name="parent_full_name" id="parent_full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="email">Email Address</label>
                          <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                        </div>

                        <div className="md:col-span-5">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">Country / region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabIndex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state">State / province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabIndex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div>

              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                  <label htmlFor="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div>

                        {/* Add more fields here */}
                        <div className="md:col-span-5">
                          <label htmlFor="child_name">Child's First and Last Name</label>
                          <input type="text" name="child_name" id="child_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_tshirt_size">Child's T-shirt Size</label>
                          <select name="child_tshirt_size" id="child_tshirt_size" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                            <option value="XXL">Extra Extra Large</option>
                          </select>
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_age">Child's Age</label>
                          <input type="text" name="child_age" id="child_age" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_birthday">Child's Birthday</label>
                          <input type="date" name="child_birthday" id="child_birthday" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="medical_needs">Alergies or Medical needs</label>
                          <textarea name="medical_needs" id="medical_needs" className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="source">How did you hear about CEF of Tioga County?</label>
                            <textarea name="medical_needs" id="medical_needs" className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                            
                          </div>

                        <div className="md:col-span-5">
                          <label htmlFor="virtual_signature">Virtual Signature</label>
                          <p> In case of emergency, I authorize CEF staff to furnish necessary examination and treatment.</p>
                          <p>  In case of emergency, I authorize CEF staff to furnish necessary examination and treatment</p>
                          <p>  I give permission for my child to be included in any camp photographs that are used for ministry promotional purposes for CEF of Tioga County. </p>
                          <input type="text" name="virtual_signature" id="virtual_signature" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Type your name as a virtual signature" />
                        </div>

                        <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
              


                        {/* Add more fields here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
