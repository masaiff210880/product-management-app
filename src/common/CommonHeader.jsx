import React from 'react';

const CommonHeader = ({
    title,
    description,
    showSearch = true,
    showFilter = true,
    showSort = true,
    searchPlaceholder = "Search...",
    filterOptions = [],
    onSearchChange,
    onFilterChange,
    onSortChange,
    searchValue = "",
    onClearSearch,
    filterValue = "",
    sortValue = ""
}) => {
    return (
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 px-4 lg:px-6">
            {/* Title and Description - Left Side */}
            {(title || description) && (
                <div className="flex-1">
                    {/* {title && (
            <h1 className="text-3xl font-bold text-blue-900">{title}</h1>
          )} */}
                    {/* {description && (
            <p className="text-gray-600 mt-2">{description}</p>
          )} */}
                </div>
            )}

            {/* Search and Filter Section - Right Side */}
            {(showSearch || showFilter) && (
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search Input */}
                    {showSearch && (
                        <div className="w-full sm:w-64">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder={searchPlaceholder}
                                    value={searchValue}
                                    onChange={onSearchChange}
                                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {searchValue && (
                                    <button
                                        onClick={onClearSearch}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-700"
                                        type="button"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400 hover:text-gray-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Filter Dropdown */}
                    {showFilter && filterOptions.length > 0 && (
                        <div className="w-full sm:w-48">
                            <select
                                value={filterValue}
                                onChange={onFilterChange}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">All Categories</option>
                                {filterOptions.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Sort Dropdown */}
                    {showSort && (
                        <div className="w-full sm:w-48">
                            <select
                                value={sortValue}
                                onChange={onSortChange}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Sort by Price</option>
                                <option value="asc">Price: Low to High</option>
                                <option value="desc">Price: High to Low</option>
                            </select>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommonHeader;

