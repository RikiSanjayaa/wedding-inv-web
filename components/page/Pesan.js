import { useState, useEffect } from "react";
import { loadComments, saveComments } from "../utilities/SimpanPesan";

export default function FormAndComments() {
  const [comments, setComments] = useState([]);

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    setComments(loadComments());
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    saveComments(comments);
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const message = event.target.message.value;
    const attendance = event.target.attendance.value;

    setComments((prevComments) => [
      ...prevComments,
      { name, message, attendance },
    ]);

    event.target.reset();
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10">
      {/* Form Input */}
      <div className="bg-white p-8 rounded-[10px] shadow-soft-sakura">
        <h2 className="text-center text-sakura-300 text-2xl md:text-3xl font-bold font-['Comfortaa'] mb-4">
          Do'a & Ucapan Teruntuk Mempelai
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sakura-300 font-medium mb-1" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sakura-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sakura-300 font-medium mb-1" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sakura-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sakura-300 font-medium mb-1">
              Attendance <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="Yes"
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="Maybe"
                  className="mr-2"
                />
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="No"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-sakura-300 text-white py-2 px-4 rounded shadow hover:bg-sakura-400 transition-all"
          >
            Send Now!
          </button>
        </form>
      </div>

      {/* Comment Section */}
      <div className="bg-white p-8 rounded-[10px] shadow-soft-sakura mt-8">
        <h2 className="text-center text-sakura-300 text-2xl md:text-3xl font-bold font-['Comfortaa'] mb-4">
          Ucapan yang Masuk
        </h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="p-4 border rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sakura-300">{comment.name}</span>
                <span
                  className={`text-sm font-medium ${
                    comment.attendance === "Yes"
                      ? "text-green-500"
                      : comment.attendance === "Maybe"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {comment.attendance}
                </span>
              </div>
              <p className="text-gray-600">{comment.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
