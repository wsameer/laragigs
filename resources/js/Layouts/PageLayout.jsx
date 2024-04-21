import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
