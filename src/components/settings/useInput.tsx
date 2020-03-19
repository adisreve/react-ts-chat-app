import { useState } from 'react'

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: (event: React.FormEvent<HTMLInputElement>): void => {
                setValue(event.currentTarget.value)
            }
        }
    }
}
