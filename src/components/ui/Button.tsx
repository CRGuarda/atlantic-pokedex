import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge([
        'bg-white rounded-lg py-1 px-2 hover:bg-zinc-300 disabled:pointer-events-none disabled:bg-zinc-100 disabled:text-zinc-400',
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  )
}
