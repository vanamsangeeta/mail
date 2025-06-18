
import React from 'react';

const Tuition = () => {
  const tuitionDetails = {
    semesterFee: 85000,
    dueDate: '2024-04-30',
    paymentModes: [
      {
        id: 1,
        mode: 'Full Payment',
        discount: '5%',
        deadline: '2024-04-15'
      },
      {
        id: 2,
        mode: 'Installments',
        terms: [
          {
            installment: '1st Installment',
            amount: 45000,
            deadline: '2024-04-30'
          },
          {
            installment: '2nd Installment',
            amount: 40000,
            deadline: '2024-06-30'
          }
        ]
      }
    ],
    feeBreakdown: [
      { item: 'Tuition Fee', amount: 65000 },
      { item: 'Development Fee', amount: 10000 },
      { item: 'Laboratory Fee', amount: 5000 },
      { item: 'Library Fee', amount: 3000 },
      { item: 'Internet & Computing', amount: 2000 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-auto">
      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Tuition Fees</h1>
          <p className="text-gray-600 mt-2">
            Semester fees and payment information for current academic year
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Fee Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Fee Breakdown</h2>
            <div className="space-y-4">
              {tuitionDetails.feeBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <span className="text-gray-700">{item.item}</span>
                  <span className="font-medium">₹{item.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-semibold">Total Amount</span>
                <span className="text-xl font-bold text-blue-600">
                  ₹{tuitionDetails.semesterFee.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Options Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Payment Options
            </h2>
            <div className="space-y-6">
              {/* Full Payment Option */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800">Full Payment</h3>
                <p className="text-sm text-blue-600 mt-1">
                  Get {tuitionDetails.paymentModes[0].discount} discount
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Deadline: {tuitionDetails.paymentModes[0].deadline}
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
                  Pay Full Amount
                </button>
              </div>

              {/* Installments Option */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Installments</h3>
                {tuitionDetails.paymentModes[1].terms.map((term, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-sm font-medium text-gray-700">
                      {term.installment}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-gray-600">₹{term.amount.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">
                        Due: {term.deadline}
                      </span>
                    </div>
                    <button className="mt-2 w-full bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Pay {term.installment}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Important Information
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Late payment will incur a penalty of ₹100 per day</li>
            <li>• Full payment discount is only applicable before early payment deadline</li>
            <li>• All fees are non-refundable once paid</li>
            <li>• For scholarship holders, please submit relevant documents before payment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
