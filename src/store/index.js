import { configureStore } from '@reduxjs/toolkit'
import DeAuditsSlice from './slices/DeAuditsSlice'
import ModalSlice from './slices/ModalSlice'

export default configureStore({
    reducer: {
        deAudit: DeAuditsSlice,
        modal: ModalSlice,
    },
})