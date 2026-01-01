import React from 'react';

const Wrapper = ({ 
  children, 
  fullScreen = false, 
  className = '',
  headerContent = null 
}) => {
  if (fullScreen) {
    return (
      <div className={`fixed inset-0 top-16 lg:top-16 lg:left-64 bottom-0 right-0 bg-gray-50 ${className}`}>
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col">
            {headerContent && (
              <div className="w-full pt-6 pb-4">
                {headerContent}
              </div>
            )}
            <div className="flex-1 px-4 lg:px-6 pb-4 lg:pb-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;

