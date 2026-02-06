import { type InputHTMLAttributes } from "react"
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    registration: UseFormRegisterReturn
    error?: FieldError
    containerClassName?: string
}

export function Input({
    label,
    registration,
    error,
    containerClassName = "col-span-12",
    type = "text",
    ...rest
}: InputProps) {
    return (
        <div className={`${containerClassName} flex flex-col`}>
            <label
                htmlFor={registration.name}
                className="text-sm font-medium text-gray-700 mb-1"
            >
                {label}
            </label>
            <input
                id={registration.name}
                type={type}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                {...registration}
                {...rest}
            />
            {error && (
                <p className="text-red-500 text-xs mt-1">{error.message}</p>
            )}
        </div>
    )
}
