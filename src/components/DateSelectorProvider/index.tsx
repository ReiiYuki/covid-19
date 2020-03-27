import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import ReactGA from 'react-ga';

import dateSelectorContext from '../../contexts/dateSelectorContext';

interface Props {
    children: ReactNode
}

const DateSelectorProvider = ({ children }: Props) => {
    const [selectedDate, setSelectedDate] = useState<Date>()

    const clearDate = useCallback(() => {
        setSelectedDate(undefined)
        localStorage.clear()
        ReactGA.event({
            category: 'user',
            action: 'clear_date'
        })
    }, [setSelectedDate])

    const selectDate = useCallback((date: Date) => {
        setSelectedDate(date)
        localStorage.setItem('startDate', date.getTime().toString())
        ReactGA.event({
            category: 'user',
            action: 'select_date'
        })
    }, [setSelectedDate])

    const contextValue = {
        clearDate,
        selectDate,
        selectedDate,
    }

    useEffect(() => {
        const timestampStr = localStorage.getItem('startDate')
        
        if (timestampStr) {
          const timestamp = parseInt(timestampStr)
          setSelectedDate(new Date(timestamp))
        }
      }, [])

    return (
        <dateSelectorContext.Provider value={contextValue}>
            {children}
        </dateSelectorContext.Provider>
    )
}

export default DateSelectorProvider
