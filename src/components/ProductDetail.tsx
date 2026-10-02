import { useState, useEffect } from 'react'
import type { CatalogProduct } from '../data/catalog'
import { SITE_CONFIG, formatPrice } from '../data/catalog'

interface Props {
  product: CatalogProduct
  onClose: () => void
}

export default function ProductDetail({ product, onClose }: Props) {
  const [activeImg, setActiveImg] = useState(0)

  // Lock background body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const whatsappMessage = encodeURIComponent(
    `${SITE_CONFIG.contactMessage}\n\nProduct: ${product.title}`
  )
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`

  const lowestPrice =
    product.variants.length > 0
      ? Math.min(...product.variants.map((v) => v.price))
      : product.price_retail

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] rounded-2xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex-shrink-0 bg-white dark:bg-gray-900 flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 transition-colors">
          <div className="flex items-center gap-2 pr-4 min-w-0">
            {product.brand && (
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                {product.brand}
              </span>
            )}
            <h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
              {product.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 2-Column responsive body */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden min-h-0 md:flex md:divide-x md:divide-gray-100 dark:md:divide-gray-800 custom-scrollbar">
          {/* Left Column: Visuals */}
          <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-start bg-gray-50/50 dark:bg-gray-950/40 md:overflow-y-auto custom-scrollbar">
            {product.images.length > 0 ? (
              <div className="space-y-3 sticky top-0">
                <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-700/60 aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden p-4 shadow-sm">
                  <img
                    src={product.images[activeImg] || product.images[0]}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/brand_showcase/huawei-pura.jpg'
                    }}
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-gray-800 p-1 border-2 transition-all shadow-xs ${
                          i === activeImg
                            ? 'border-gray-900 dark:border-white ring-2 ring-gray-900/10 dark:ring-white/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
                {/* Desktop Quick Price Tag */}
                <div className="hidden md:flex items-center justify-between bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 rounded-xl p-3.5 mt-2">
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Starting from</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {SITE_CONFIG.currency}{formatPrice(lowestPrice)}
                    </p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${product.in_stock ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200/50 dark:border-green-800/40' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'}`}>
                    {product.in_stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-square p-6 flex flex-col justify-between items-center text-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200/70 dark:from-gray-800/70 dark:via-gray-850 dark:to-gray-900 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 select-none">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                  {product.category.replace(/_/g, ' ')}
                </span>
                <div className="my-auto py-4">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-gray-800 dark:text-gray-100 block">
                    {product.brand || 'OFFICIAL'}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mx-auto mt-2 font-medium block">
                    {product.model || product.title}
                  </span>
                </div>
                {/* Desktop Quick Price inside badge if no photo */}
                <div className="w-full bg-white/90 dark:bg-gray-800/90 rounded-xl p-3 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between">
                  <span className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">Starting from</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {SITE_CONFIG.currency}{formatPrice(lowestPrice)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Information, Variants & Specs */}
          <div className="md:w-1/2 p-4 sm:p-5 pb-8 space-y-4 md:overflow-y-auto custom-scrollbar">
            {/* Title & Description */}
            <div>
              <div className="md:hidden flex items-baseline justify-between mb-1.5">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {SITE_CONFIG.currency}{formatPrice(lowestPrice)}
                </span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${product.in_stock ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400'}`}>
                  {product.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                {product.title}
              </h3>
              {product.description && (
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Available Options (Variants) */}
            {product.variants.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Available Options ({product.variants.length})
                  </h4>
                </div>
                <div className="space-y-1.5">
                  {product.variants.map((v, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-800 transition-colors rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700/60"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                          {v.name}
                        </p>
                        {(v.storage || v.color) && (
                          <p className="text-[11px] text-gray-500 dark:text-gray-400">
                            {[v.storage, v.color].filter(Boolean).join(' - ')}
                          </p>
                        )}
                      </div>
                      {v.price > 0 && (
                        <p className="text-xs font-bold text-gray-900 dark:text-white flex-shrink-0">
                          {SITE_CONFIG.currency}{formatPrice(v.price)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {Object.keys(product.specs).length > 0 && (
              <div>
                <h4 className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                  Specifications
                </h4>
                <div className="divide-y divide-gray-100 dark:divide-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-800/40 shadow-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-start px-3 py-1.5 text-xs">
                      <span className="text-gray-500 dark:text-gray-400 font-medium pr-2">{key}</span>
                      <span className="text-gray-900 dark:text-gray-100 font-semibold text-right max-w-[65%] break-words">
                        {String(val)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct WhatsApp CTA Button inside right column */}
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-xl w-full transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire via WhatsApp
              </a>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-1.5">
                Direct inquiry with our local Lusaka team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
