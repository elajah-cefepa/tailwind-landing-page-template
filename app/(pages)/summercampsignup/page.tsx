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
    
          <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
              <div>
                <h2 class="font-semibold text-xl text-gray-600">Camp Registration</h2>
                <p class="text-gray-500 mb-6">Children ages 6-12. Early registration costs $45 per child, and it ends two weeks before camp begins. After that, the fee is $50 per child. Scholarships may be available. The camps are from 9:30 a.m. to 3 p.m.</p>

                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                      <p class="font-medium text-lg">Personal Details</p>
                      <p>Please fill out all the fields.</p>
                      <p class="mt-4"></p> 
                      <div class="md:col-span-5">
                        <label for="camp_pick">Camp Location</label>
                        <select name="camp_pick" id="camp_pick" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                          <option value="camp1">Nauvoo School House116 Linck Hill Road
                                        Morris, PA 16938</option>
                          <option value="camp2">Ives Run South LoopIves Run South Shelter
                                     Mansfield, PA 16933</option>
                        </select>
                        <p class="text-gray-500 mb-6">Type VRQ9+C25 Tioga, Pennsylvania in Google Maps for directions to the exact location.</p>

                      </div>
                    </div>

                    <div class="lg:col-span-2">
                      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                          <label for="parent_full_name">Parent/Guardian Full Name</label>
                          <input type="text" name="parent_full_name" id="parent_full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="email">Email Address</label>
                          <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                        </div>

                        <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div>

              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div>

                        {/* Add more fields here */}
                        <div class="md:col-span-5">
                          <label for="child_name">Child's First and Last Name</label>
                          <input type="text" name="child_name" id="child_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="child_tshirt_size">Child's T-shirt Size</label>
                          <select name="child_tshirt_size" id="child_tshirt_size" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                            <option value="XXL">Extra Extra Large</option>
                          </select>
                        </div>

                        <div class="md:col-span-5">
                          <label for="child_age">Child's Age</label>
                          <input type="text" name="child_age" id="child_age" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="child_birthday">Child's Birthday</label>
                          <input type="date" name="child_birthday" id="child_birthday" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>

                        <div class="md:col-span-5">
                          <label for="medical_needs">Alergies or Medical needs</label>
                          <textarea name="medical_needs" id="medical_needs" class="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                        </div>
                        <div class="md:col-span-5">




                          
                            <label for="source">How did you hear about CEF of Tioga County?</label>
                            <textarea name="medical_needs" id="medical_needs" class="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                            
                          </div>

                        <div class="md:col-span-5">
                          <label for="virtual_signature">Virtual Signature</label>
                          <p> In case of emergency, I authorize CEF staff to furnish necessary examination and treatment.</p>
                          <p>  My child has permission to swim on the designated swim days.</p>
                          <p>  In case of emergency, I authorize CEF staff to furnish necessary examination and treatment</p>
                          <p>  I give permission for my child to be included in any camp photographs that are used for ministry promotional purposes for CEF of Tioga County. </p>
                          <input type="text" name="virtual_signature" id="virtual_signature" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Type your name as a virtual signature" />
                        </div>

                        <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
