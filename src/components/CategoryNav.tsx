import { CATEGORIES } from '../data/catalog'

interface Props {
  active: string
  onChange: (id: string) => void
}

export default function CategoryNav({ active, onChange }: Props) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`
                flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${active === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
