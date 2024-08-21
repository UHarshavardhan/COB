import React from 'react';

const ScholarshipEnquiry = () => {
  const data = [
    {
      id: 1,
      fullName: 'Aubrey',
      dob: '12/06/2004',
      email: 'aubrey@gmail.com',
      phone: '044 458 5689',
      education: 'Higher secondary',
      grade12: '70%',
      year12: '2022',
      grade10: '85%',
      year10: '2020',
      studyField: 'Science',
      casteCategory: 'General',
      religion: 'Christianity',
      income: '$20,000',
    },
    {
        id: 1,
        fullName: 'Aubrey',
        dob: '12/06/2004',
        email: 'aubrey@gmail.com',
        phone: '044 458 5689',
        education: 'Higher secondary',
        grade12: '70%',
        year12: '2022',
        grade10: '85%',
        year10: '2020',
        studyField: 'Science',
        casteCategory: 'General',
        religion: 'Christianity',
        income: '$20,000',
      },
      {
        id: 1,
        fullName: 'Aubrey',
        dob: '12/06/2004',
        email: 'aubrey@gmail.com',
        phone: '044 458 5689',
        education: 'Higher secondary',
        grade12: '70%',
        year12: '2022',
        grade10: '85%',
        year10: '2020',
        studyField: 'Science',
        casteCategory: 'General',
        religion: 'Christianity',
        income: '$20,000',
      },
      {
        id: 1,
        fullName: 'Aubrey',
        dob: '12/06/2004',
        email: 'aubrey@gmail.com',
        phone: '044 458 5689',
        education: 'Higher secondary',
        grade12: '70%',
        year12: '2022',
        grade10: '85%',
        year10: '2020',
        studyField: 'Science',
        casteCategory: 'General',
        religion: 'Christianity',
        income: '$20,000',
      },
      {
        id: 1,
        fullName: 'Aubrey',
        dob: '12/06/2004',
        email: 'aubrey@gmail.com',
        phone: '044 458 5689',
        education: 'Higher secondary',
        grade12: '70%',
        year12: '2022',
        grade10: '85%',
        year10: '2020',
        studyField: 'Science',
        casteCategory: 'General',
        religion: 'Christianity',
        income: '$20,000',
      },
    // Add more rows as needed
  ];

  return (
    <div className='bg-white shadow-md rounded p-10'>

    <div className='w-[155vh]'>
      <div className="overflow-x-auto">
        <table className="bg-white">
          <thead>
            <tr className="bg-[#f3f4f6] text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-4 border-b border-gray-300">#ID</th>
              <th className="py-3 px-4 border-b border-gray-300">Full name</th>
              <th className="py-3 px-4 border-b border-gray-300">Date of birth</th>
              <th className="py-3 px-4 border-b border-gray-300">Email address</th>
              <th className="py-3 px-4 border-b border-gray-300">Phone number</th>
              <th className="py-3 px-4 border-b border-gray-300">Current education level</th>
              <th className="py-3 px-4 border-b border-gray-300">12th Grade percentage</th>
              <th className="py-3 px-4 border-b border-gray-300">12th Year of completion</th>
              <th className="py-3 px-4 border-b border-gray-300">10th Grade percentage</th>
              <th className="py-3 px-4 border-b border-gray-300">10th Year of completion</th>
              <th className="py-3 px-4 border-b border-gray-300">Field of study</th>
              <th className="py-3 px-4 border-b border-gray-300">Caste Category</th>
              <th className="py-3 px-4 border-b border-gray-300">Religion</th>
              <th className="py-3 px-4 border-b border-gray-300">Annual family income</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-3 px-4 border-b border-gray-300">{item.id}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.fullName}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.dob}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.email}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.phone}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.education}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.grade12}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.year12}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.grade10}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.year10}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.studyField}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.casteCategory}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.religion}</td>
                <td className="py-3 px-4 border-b border-gray-300">{item.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">01 page of 3</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border-b border-gray-300 rounded">Prev</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">01</button>
          <button className="px-3 py-1 border-b border-gray-300 rounded">02</button>
          <button className="px-3 py-1 border-b border-gray-300 rounded">03</button>
          <button className="px-3 py-1 border-b border-gray-300 rounded">Next</button>
        </div>
      </div>
    </div> </div>
  );
};

export default ScholarshipEnquiry;
