
import React from 'react';

const Structure = () => {
  const feeStructure = {
    tuitionFee: {
      amount: 85000,
      period: 'per semester'
    },
    hostelFee: {
      amount: 45000,
      period: 'per semester'
    },
    additionalFees: [
      { name: 'Library Fee', amount: 2000, period: 'per year' },
      { name: 'Lab Fee', amount: 5000, period: 'per semester' },
      { name: 'Internet Fee', amount: 1500, period: 'per semester' },
      { name: 'Student Activity Fee', amount: 2500, period: 'per year' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Fee Structure</h1>
        <div className="space-y-6">
          {/* Main Fees */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Main Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium mb-2">Tuition Fee</h3>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{feeStructure.tuitionFee.amount}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {feeStructure.tuitionFee.period}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium mb-2">Hostel Fee</h3>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{feeStructure.hostelFee.amount}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {feeStructure.hostelFee.period}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Fees */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Additional Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {feeStructure.additionalFees.map((fee, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded">
                  <h3 className="font-medium mb-2">{fee.name}</h3>
                  <p className="text-xl font-bold text-blue-600">₹{fee.amount}</p>
                  <p className="text-sm text-gray-600 mt-1">{fee.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>All fees must be paid before the semester begins</li>
              <li>Late payment will incur additional charges</li>
              <li>Fees can be paid online through the student portal</li>
              <li>Refund policy applies as per university guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
