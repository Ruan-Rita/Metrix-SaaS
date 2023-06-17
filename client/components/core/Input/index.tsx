import { useState, InputHTMLAttributes } from "react"
import { EnvelopeIcon, LockClosedIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/20/solid'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: string
  value?: string
}
export default function Input({ label, value, type = 'text', ...rest }: IInput) {
  const [newValue, setNewValue] = useState(value)

  function getProps(classNameOwner?: string) {
    let className = "relative block w-full appearance-none rounded-md border border-gray-100 px-3 py-2 text-gray-700 placeholder-gray-500 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-100 "
    rest.className = `${className} ${rest.className} ${classNameOwner}`
    return {
      type,
      value,
      ...rest
    }
  }

  function getIcon() {
    const styles = {
      className: "w-4 absolute ml-2 z-10 text-neutral-700"
    }
    const typeIcons = {
      'email': <EnvelopeIcon {...styles} />,
      'name': <UserIcon {...styles} />,
      'password': <LockClosedIcon {...styles} />,
      'search': <MagnifyingGlassIcon {...styles} />
    }
    return typeIcons[type] ?? false
  }

  function getComponent() {
    const hasIcon = getIcon()
    return (
      <div className="relative flex left-0 items-center">
        {hasIcon}
        <input
          {...getProps(hasIcon && 'pl-7')}
          onChange={e => setNewValue(e.target.value)}
          value={newValue}
        />
      </div>
    )
  }
  return (
    <>
      {
        label ? (
          <label>
            <div>
              {label}
              {getComponent()}
            </div>
          </label>
        )
          : (
            <div>
              {getComponent()}
            </div>
          )
      }
    </>
  )
}
