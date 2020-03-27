import { useContext } from 'react';

import dateSelectorContext from '../../contexts/dateSelectorContext';

function useDateSelector() {
    return useContext(dateSelectorContext)
}

export default useDateSelector
