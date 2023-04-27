import { ButtonHTMLAttributes } from "react"

interface ISubmitButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  type?: 'submit' | 'button' | 'reset'
}

export default function SubmitButton({ label, type = 'submit', ...rest }: ISubmitButton) {

  function getProps() {
    let className = "group relative w-40 flex py-2 px-4 justify-center rounded-lg mx-auto border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    rest.className = `${rest.className} ${className}`

    return {
      ...rest
    }
  }

  return (
    <button
      type="submit"
      {...getProps()}
    >
      {label}
    </button>
  )
}