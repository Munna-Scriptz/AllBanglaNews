import {
  Globe,
  Languages,
  LayoutGrid,
  MapPin,
  Newspaper,
  Radio,
  RadioTower,
  Tablet,
  Tv,
} from 'lucide-react'
import { cn } from '../../utils/helpers'

const iconMap = {
  LayoutGrid,
  Newspaper,
  MapPin,
  Radio,
  RadioTower,
  Tablet,
  Languages,
  Tv,
  Globe,
}

export default function CategoryIcon({ name, className, strokeWidth = 1.8 }) {
  const Icon = iconMap[name] ?? Newspaper

  return (
    <Icon
      className={cn('h-5 w-5', className)}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  )
}
