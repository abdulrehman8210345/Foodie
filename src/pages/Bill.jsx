// import React from 'react';

import SplitBill from "../components/SplitBill";
import UserOptions from "../components/UserOptions";

const Bill = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-screen max-w-xl border border-b bg-orange-300 px-4 py-8 sm:px-6 lg:px-8" aria-modal="true" role="dialog" tabIndex="-1">
        <div className="mt-4 space-y-6">
          <UserOptions />
          <SplitBill />
        </div>
      </div>
    </div>
  );
};

export default Bill;
