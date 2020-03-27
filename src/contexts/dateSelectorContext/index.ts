import { createContext } from 'react';

interface ContextValue {
    selectedDate?: Date
    selectDate: (date: Date) => void
    clearDate: () => void
}

const defaultContextValue = {
    selectDate: (date: Date) => {},
    clearDate: () => {},
}

export default createContext<ContextValue>(defaultContextValue)
