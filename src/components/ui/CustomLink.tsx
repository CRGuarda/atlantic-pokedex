import { Link, LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const CustomLink = ({ className, children, ...rest }: LinkProps) => {
  return (
    <Link className={twMerge(['font-bold bg-zinc-200 px-2 py-1 rounded-xl hover:bg-zinc-300', className])} {...rest}>
      {children}
    </Link>
  )
}
