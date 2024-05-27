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
  <h1 className="h1">Sign up for Summer Camp</h1>
  <h1 className="h1">&nbsp;</h1> 
  <h1 className="h1">by</h1> 
  <h1 className="h1">&nbsp;</h1> 
  <h1 className="h1">calling our office at 570-724-4591 or email tiogacounty@cefepa.net to register for summer camp!</h1>
</div>

    

          
        </div>
      </div>
    </form>
  )
}
