import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";



export default function EventDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  


  const location = useLocation();

  const event = location.state;
  console.log(event);

  // const event = {
  //   id: 1,
  //   title: "Kabbadi",
  //   category: "Sports",
  //   type: "Team",
  //   date: new Date().toDateString(),
  //   durationMins: 60,
  //   location: "Main Auditorium",
  //   tags: ["Onsite", "Team", "Prize money"],
  //   short:
  //     "Lorem ipsum dolor sit amet, ship an MVP or perform on stage.",
  //   description:
  //     "This is a sample description. Replace with real copy from your CMS. Includes rules, evaluation, and contact details.",
  //   prizes: "₹15,000 + goodies",
  //   regFee: 99,
  // };



  return (
    <div className="min-h-screen py-10 px-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          {event.title}
        </h1>

        {/* Short Info */}
        <p className="text-gray-700 text-lg mb-6">{event.short}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-semibold text-gray-600">Category:</p>
            <p className="text-gray-800">{event.category}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Type:</p>
            <p className="text-gray-800">{event.type}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Date:</p>
            <p className="text-gray-800">{event.date}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Duration:</p>
            <p className="text-gray-800">{event.durationMins} mins</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Location:</p>
            <p className="text-gray-800">{event.location}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Registration Fee:</p>
            <p className="text-gray-800">₹{event.regFee}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <p className="font-semibold text-gray-600 mb-2">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="font-semibold text-gray-600 mb-2">Description:</p>
          <p className="text-gray-800 leading-relaxed">{event.description}</p>
        </div>

        {/* Prizes */}
        <div>
          <p className="font-semibold text-gray-600 mb-2">Prizes:</p>
          <p className="text-gray-800">{event.prizes}</p>
        </div>
      </div>

      <div className="w-full max-w-md backdrop-blur-md bg-white/10 rounded-lg shadow-lg p-8 absolute">
        <h2 className="text-3xl font-bold text-[#433bff] mb-6 text-center">Login</h2>
        {/* <form onSubmit={handleSubmit(submitHandler)} className="space-y-5"> */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-900 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded backdrop-blur-md bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
          </div>
          <div>
            <label className="block text-gray-900 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`w-full px-4 py-2 rounded backdrop-blur-md bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border border-red-500' : ''}`}
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "password is required",
              })}
            />
            {/* {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password.message}</div>} */}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#433bff] hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-800">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-300 hover:underline">
            Register
          </Link>
        </p>
      </div>

    </div>

  );
}
