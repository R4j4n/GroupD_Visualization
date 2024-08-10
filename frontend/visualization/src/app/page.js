"use client";

import { useState } from "react";


import { predictFirstYearPersistence } from "@/utils/apiConnector";

export default function Home() {
  const [formData, setFormData] = useState({
    first_language: "",
    funding: "",
    school: "",
    fast_track: "",
    coop: "",
    residency: "",
    gender: "",
    prev_education: "",
    age_group: "",
    english_grade: "",
    first_term_gpa: "",
    second_term_gpa: "",
    high_school_average_mark: "",
    math_score: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await predictFirstYearPersistence(formData);
    console.log("Response from API:", response);

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center text-black p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Input Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="first_language">First Language</label>
          <input
            type="number"
            name="first_language"
            id="first_language"
            placeholder="First Language"
            value={formData.first_language}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="funding">Funding</label>
          <input
            type="number"
            name="funding"
            id="funding"
            placeholder="Funding"
            value={formData.funding}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="school">school</label>
          <input
            type="number"
            name="school"
            id="school"
            placeholder="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Repeat similar structure for each form field */}
        {/* You can use loops or map function in React to avoid repetition, depending on how you structure your code */}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fast_track">fast_track</label>
          <input
            type="number"
            name="fast_track"
            id="fast_track"
            placeholder="fast_track"
            value={formData.fast_track}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="coop">coop</label>
          <input
            type="number"
            name="coop"
            id="coop"
            placeholder="coop"
            value={formData.coop}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="residency">residency</label>
          <input
            type="number"
            name="residency"
            id="residency"
            placeholder="residency"
            value={formData.residency}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">gender</label>
          <input
            type="number"
            name="gender"
            id="gender"
            placeholder="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="prev_education">prev_education</label>
          <input
            type="number"
            name="prev_education"
            id="prev_education"
            placeholder="prev_education"
            value={formData.prev_education}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="age_group">age_group</label>
          <input
            type="number"
            name="age_group"
            id="age_group"
            placeholder="age_group"
            value={formData.age_group}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="english_grade">english_grade</label>
          <input
            type="number"
            name="english_grade"
            id="english_grade"
            placeholder="english_grade"
            value={formData.english_grade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="first_term_gpa">first_term_gpa</label>
          <input
            type="number"
            name="first_term_gpa"
            id="first_term_gpa"
            placeholder="first_term_gpa"
            value={formData.first_term_gpa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="second_term_gpa">second_term_gpa</label>
          <input
            type="number"
            name="second_term_gpa"
            id="second_term_gpa"
            placeholder="second_term_gpa"
            value={formData.second_term_gpa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="high_school_average_mark">high_school_average_mark</label>
          <input
            type="number"
            name="high_school_average_mark"
            id="high_school_average_mark"
            placeholder="high_school_average_mark"
            value={formData.high_school_average_mark}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>



        {/* Add remaining form fields here */}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="math_score">Math Score</label>
          <input
            type="number"
            name="math_score"
            id="math_score"
            placeholder="Math Score"
            value={formData.math_score}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}