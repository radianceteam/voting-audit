import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        deAuditModal: false
    },
    reducers: {
        deAuditModalTrigger: (state) => {
            state.deAuditModal = !state.deAuditModal
        },
    },
})

export const { deAuditModalTrigger } = modalSlice.actions

export default modalSlice.reducer