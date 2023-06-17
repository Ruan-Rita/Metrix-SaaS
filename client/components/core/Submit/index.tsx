import { ButtonHTMLAttributes, ReactNode } from "react"

interface ISubmitButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  type?: 'submit' | 'button' | 'reset'
  children?: ReactNode
}

export default function SubmitButton({ label, type = 'submit', children, ...rest }: ISubmitButton) {

  function getProps() {
    let className = "group relative flex p-2 justify-center rounded-md border border-transparent bg-indigo-600 hover:text-white text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    rest.className = `${rest.className} ${className}`

    return {
      ...rest
    }
  }

  return (
    <button
      type={type}
      {...getProps()}
    >
      {children ? children : label}
    </button>
  )
}