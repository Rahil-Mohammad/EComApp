import React from 'react';
import { LuLoader } from 'react-icons/lu';

function Loading() {
  return (
    <div className="flex items-center justify-center grow">
      <LuLoader className="text-4xl font-semibold text-primary-dark animate-spin" />
    </div>
  );
}

export default Loading.jsx;
