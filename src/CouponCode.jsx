import React from 'react';

const CouponCode = () => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Coupon code"
        className="border rounded px-4 py-2 mr-2"
      />
      <button className="bg-red-500 text-white rounded px-4 py-2">
        APPLY COUPON
      </button>
    </div>
  );
};

export default CouponCode;
