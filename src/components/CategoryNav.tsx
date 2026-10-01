import { CATEGORIES } from '../data/catalog'

interface Props {
  active: string
  onChange: (id: string) => void
}

export default function CategoryNav({ active, onChange }: Props) {
  return (
    <div className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-1.5 overflow-x-auto py-3 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`
                flex-shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all
                ${active === cat.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-xs'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
