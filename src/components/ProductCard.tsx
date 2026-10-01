import type { CatalogProduct } from '../data/catalog'
import { SITE_CONFIG } from '../data/catalog'

interface Props {
  product: CatalogProduct
  onClick: () => void
}

export default function ProductCard({ product, onClick }: Props) {
  const primaryImage = product.images[0] || null
  const priceDisplay =
    product.variants.length > 0
      ? `${SITE_CONFIG.currency}${Math.min(...product.variants.map((v) => v.price)).toLocaleString()}`
      : `${SITE_CONFIG.currency}${product.price_retail.toLocaleString()}`

  const variantCount = product.variants.length

  return (
    <button
      onClick={onClick}
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-200 text-left w-full flex flex-col"
    >
      {/* Image */}
      <div className="bg-gray-50 dark:bg-gray-800/40 aspect-square flex items-center justify-center overflow-hidden">
        {primaryImage ? (
          <img
            src={primaryImage}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="text-gray-300 dark:text-gray-600 text-4xl select-none">?</div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          {product.brand && (
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">
              {product.brand}
            </p>
          )}
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 min-h-[2.6em] leading-tight">
            {product.title}
          </p>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-none">from</p>
            <p className="text-base font-bold text-gray-900 dark:text-white mt-0.5">{priceDisplay}</p>
          </div>
          {variantCount > 1 && (
            <span className="text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full font-medium">
              {variantCount} options
            </span>
          )}
        </div>
        {!product.in_stock && (
          <p className="mt-1.5 text-xs text-red-500 font-medium">Out of stock</p>
        )}
      </div>
    </button>
  )
}
