import { useState } from "react"

interface IInput {
  label: string
  value: string
}
export default function Input({label, value}: IInput) {
  const [newValue, setNewValue] = useState(value)
  return (
    <div>
      {
        label ? (
          <label className="sr-only">
            {label}
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </label>
        )
        : (
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            value={newValue}
            onChange={e => {
              console.log('test de onchange');
            }}
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
        )
      }
    </div>
  )
}
