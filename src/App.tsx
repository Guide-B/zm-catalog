import { useState, useMemo } from 'react'
import { CATALOG_PRODUCTS, BRANDS } from './data/catalog'
import CategoryNav from './components/CategoryNav'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail'
import type { CatalogProduct } from './data/catalog'

const PAGE_SIZE = 40

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeBrand, setActiveBrand] = useState('All Brands')
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState<CatalogProduct | null>(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Reset pagination when any filter changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  const handleBrandChange = (b: string) => {
    setActiveBrand(b)
    setVisibleCount(PAGE_SIZE)
  }

  const handleSearchChange = (q: string) => {
    setSearchQuery(q)
    setVisibleCount(PAGE_SIZE)
  }

  const filtered = useMemo(() => {
    let list = CATALOG_PRODUCTS

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }

    // Brand filter
    if (activeBrand !== 'All Brands') {
      list = list.filter((p) => p.brand.toLowerCase() === activeBrand.toLowerCase())
    }

    // Search query filter
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      list = list.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(q)
        const brandMatch = p.brand.toLowerCase().includes(q)
        const modelMatch = p.model.toLowerCase().includes(q)
        const specMatch = Object.values(p.specs).some((v) =>
          typeof v === 'string' && v.toLowerCase().includes(q)
        )
        return titleMatch || brandMatch || modelMatch || specMatch
      })
    }

    return list
  }, [activeCategory, activeBrand, searchQuery])

  const displayed = useMemo(() => {
    return filtered.slice(0, visibleCount)
  }, [filtered, visibleCount])

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filtered.length))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors flex flex-col">
      <Header />
      <CategoryNav active={activeCategory} onChange={handleCategoryChange} />

      {/* Filter and Search Bar Shell */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by model, brand, spec (e.g. Pixel, Mate, 256GB, RTX)..."
              className="w-full bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-2.5 pl-10 pr-10 text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all shadow-2xs"
            />
            {/* Search Icon */}
            <svg
              className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3.5 top-3 select-none pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-2.5 p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                title="Clear search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Quick Brand Filter Rail */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-hide text-xs">
            <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider pl-1 pr-2 flex-shrink-0">
              Brand:
            </span>
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandChange(brand)}
                className={`
                  flex-shrink-0 px-3 py-1 rounded-lg font-medium transition-all text-xs
                  ${activeBrand === brand
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-2xs'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }
                `}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
        {/* Count & Status Bar */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{displayed.length}</span> of{' '}
            <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> products
            {activeBrand !== 'All Brands' && ` • Brand: ${activeBrand}`}
            {searchQuery && ` • Search: "${searchQuery}"`}
          </p>
          {(activeBrand !== 'All Brands' || searchQuery || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setActiveCategory('all')
                setActiveBrand('All Brands')
                setSearchQuery('')
                setVisibleCount(PAGE_SIZE)
              }}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid */}
        {displayed.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {displayed.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelected(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400 dark:text-gray-600">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-base font-semibold text-gray-700 dark:text-gray-300">No matching products found</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try changing category, brand, or search terms</p>
          </div>
        )}

        {/* Load More Pagination */}
        {displayed.length < filtered.length && (
          <div className="mt-10 mb-6 text-center">
            <button
              onClick={loadMore}
              className="px-6 py-2.5 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Load More Products</span>
              <span className="text-xs text-gray-400 dark:text-gray-400 font-normal">
                ({filtered.length - displayed.length} remaining)
              </span>
            </button>
          </div>
        )}
      </main>

      {/* Footer Colophon */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 text-xs py-6 text-center transition-colors">
        <p className="font-semibold text-gray-900 dark:text-gray-200">{CATALOG_PRODUCTS.length.toLocaleString()} Products Available</p>
        <p className="text-[11px] mt-1">Direct Sourced Manufacturer Inventory • Zambia</p>
      </footer>

      {/* Detail modal */}
      {selected && (
        <ProductDetail
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

