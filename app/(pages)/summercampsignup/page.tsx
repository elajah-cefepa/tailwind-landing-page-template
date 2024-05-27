"use client";

import React, { useState }  from 'react';
import { uploadToPath } from '@/functions/services';

export default function SummerCampSignUp() {
  const [formData, setFormData] = useState({
    camp_pick: '',
    parent_full_name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    child_name: '',
    child_tshirt_size: '',
    child_age: '',
    child_birthday: '',
    medical_needs: '',
    source: '',
    virtual_signature: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    uploadToPath('/forms/tioga/summercamp-sign-up', formData);
    // Reset form fields after submission
    setFormData({
      camp_pick: '',
      parent_full_name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: '',
      child_name: '',
      child_tshirt_size: '',
      child_age: '',
      child_birthday: '',
      medical_needs: '',
      source: '',
      virtual_signature: ''
    });
  };

  return (
    <form className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-4xl mx-auto text-center pb-8 md:pb-10">
            <h1 className="h1">Sign Up for Summer coming soon</h1>
          </div>
    
          {/*<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
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
                        <select name="camp_pick" id="camp_pick" value={formData.camp_pick} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                        <option value="camp0">Click to Select</option>
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
                          <input
                            type="text"
                            name="parent_full_name"
                            id="parent_full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.parent_full_name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.email}
                            placeholder="email@domain.com"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor="address">Address / Street</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="country">Country / region</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              type="text"
                              name="country"
                              id="country"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value={formData.country}
                              onChange={handleChange}
                            />
                            <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>



                          <button tabIndex={-1 as number} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>


                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="state">State / province</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                                type="text"
                                name="state"
                                id="state"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.state}
                                onChange={handleChange}
                              />
                            <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={18} y1={6} x2={6} y2={18}></line>
                                <line x1={6} y1={6} x2={18} y2={18}></line>
                              </svg>
                            </button>

                            <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </button>

                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="zipcode">Zipcode</label>
                          <input
                                type="text"
                                name="zipcode"
                                id="zipcode"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.zipcode}
                                onChange={handleChange}
                              />
                        </div>

                        <div className="md:col-span-5">
                          <div className="inline-flex items-center">
                            <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                            <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                          </div>
                        </div>

                        {/* Add more fields here */}
                        <div className="md:col-span-5">
                          <label htmlFor="child_name">Child's First and Last Name</label>
                          <input
                                type="text"
                                name="child_name"
                                id="child_name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.child_name}
                                onChange={handleChange}
                              />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_tshirt_size">Child's T-shirt Size</label>
                          <select name="child_tshirt_size" id="child_tshirt_size"  value={formData.child_tshirt_size} onChange={handleChange}className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                            <option value="0">Click to Select</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                            <option value="xxl">Extra Extra Large</option>
                          </select>
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_age">Child's Age</label>
                          <input
                                type="number"
                                name="child_age"
                                id="child_age"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.child_age}
                                onChange={handleChange}
                              />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="child_birthday">Child's Birthday</label>
                          <input
                                type="date"
                                name="child_birthday"
                                id="child_birthday"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.child_birthday}
                                onChange={handleChange}
                              />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="medical_needs">Alergies or Medical needs</label>
                          <textarea name="medical_needs" id="medical_needs" value={formData.medical_needs}  onChange={handleChange} className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="source">How did you hear about CEF of Tioga County?</label>
                            <textarea name="source" id="source"  value={formData.source}  onChange={handleChange} className="border mt-1 rounded px-4 w-full bg-gray-50"></textarea>
                            
                          </div>

                        <div className="md:col-span-5">
                          <label htmlFor="virtual_signature">Virtual Signature</label>
                          <p> In case of emergency, I authorize CEF staff to furnish necessary examination and treatment.</p>
                          <p>  In case of emergency, I authorize CEF staff to furnish necessary examination and treatment</p>
                          <p>  I give permission for my child to be included in any camp photographs that are used for ministry promotional purposes for CEF of Tioga County. </p>
                          <input
                                type="text"
                                name="virtual_signature"
                                id="virtual_signature"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formData.virtual_signature}
                                onChange={handleChange}
                              />
                        </div>

                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
    </form>
  )
}
