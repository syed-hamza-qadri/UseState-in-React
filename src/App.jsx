import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fatherName, setFatherName] = useState('');

  const addStudent = (e) => {
    e.preventDefault();
    setStudents([...students, { name, rollNo, fatherName }]);
    setName('');
    setRollNo('');
    setFatherName('');
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-10">
        Students List
      </h1>

      <form
        onSubmit={addStudent}
        className="max-w-full md:max-w-lg mx-auto mb-8 bg-white p-6 md:p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Roll No
          </label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Father's Name
          </label>
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          Add Student
        </button>
      </form>

      <div className="overflow-x-auto mx-4 md:mx-0">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <th className="py-3 md:py-4 px-4 md:px-6 font-semibold text-left text-sm md:text-xl">
                #
              </th>
              <th className="py-3 md:py-4 px-4 md:px-6 font-semibold text-left text-sm md:text-xl">
                Name
              </th>
              <th className="py-3 md:py-4 px-4 md:px-6 font-semibold text-left text-sm md:text-xl">
                Roll No
              </th>
              <th className="py-3 md:py-4 px-4 md:px-6 font-semibold text-left text-sm md:text-xl">
                Father's Name
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <td className="py-3 md:py-4 px-4 md:px-6 border-b border-gray-200 text-sm md:text-lg text-gray-700">
                  {index + 1}
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 border-b border-gray-200 text-sm md:text-lg text-gray-700">
                  {student.name}
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 border-b border-gray-200 text-sm md:text-lg text-gray-700">
                  {student.rollNo}
                </td>
                <td className="py-3 md:py-4 px-4 md:px-6 border-b border-gray-200 text-sm md:text-lg text-gray-700">
                  {student.fatherName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;
