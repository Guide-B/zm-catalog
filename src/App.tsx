import { useState, useMemo } from 'react'
import { CATALOG_PRODUCTS } from './data/catalog'
import CategoryNav from './components/CategoryNav'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductDetail from './components/ProductDetail'
import type { CatalogProduct } from './data/catalog'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selected, setSelected] = useState<CatalogProduct | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return CATALOG_PRODUCTS
    return CATALOG_PRODUCTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <CategoryNav active={activeCategory} onChange={setActiveCategory} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Count */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelected(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 dark:text-gray-600">
            <p className="text-3xl mb-2">-</p>
            <p className="text-sm">No products in this category yet</p>
          </div>
        )}
      </main>

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
