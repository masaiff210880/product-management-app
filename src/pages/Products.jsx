import React, { useState, useMemo } from "react";
import Wrapper from "../components/Wrapper";
import CommonHeader from "../common/CommonHeader";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import { useGetProductsQuery } from "../server/api";
import useDebounce from "../hooks/useDebounce";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetProductsQuery();

  // Filter and sort products based on debounced search value, category filter, and sort order
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products;

    // Apply category filter
    if (filterValue) {
      filtered = filtered.filter(
        (product) =>
          product.category?.toLowerCase() === filterValue.toLowerCase()
      );
    }

    // Apply search filter
    if (debouncedSearchValue.trim()) {
      const searchLower = debouncedSearchValue.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower) ||
          product.category?.toLowerCase().includes(searchLower)
      );
    }

    // Apply sort by price
    if (sortValue) {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        if (sortValue === "asc") {
          return priceA - priceB;
        } else if (sortValue === "desc") {
          return priceB - priceA;
        }
        return 0;
      });
    }

    return filtered;
  }, [products, debouncedSearchValue, filterValue, sortValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };



  // Filter options for categories
  const filterOptions = [
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
  ];

  const headerContent = (
    <div className="w-full">
      <CommonHeader
        title="Products"
        description="Manage your product inventory"
        showSearch={true}
        showFilter={true}
        showSort={true}
        searchPlaceholder="Search products..."
        filterOptions={filterOptions}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
        sortValue={sortValue}
        onSortChange={handleSortChange}
      />
    </div>
  );

  if (isLoading) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <ErrorMessage
          title="Failed to load products"
          message={
            error?.data?.message ||
            error?.message ||
            "Unable to fetch products. Please try again."
          }
          onRetry={refetch}
        />
      </Wrapper>
    );
  }
  if (!products) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <div>No products found</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper fullScreen={true} headerContent={headerContent}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Products;
