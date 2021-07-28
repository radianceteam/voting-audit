import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'deAudit',
    initialState: {
        deAudits: [],
        curDeAudit: {},
        locked: true
    },
    reducers: {
        setDeAudits: (state, action) => {
            console.log(action, action.payload)
            state.deAudits = action.payload
            state.locked = false;
        },

        setCurDeAudit: (state, action) => {
            state.curDeAudit = action.payload;
        }
    },
})

export const { setDeAudits, setCurDeAudit } = counterSlice.actions

export default counterSlice.reducer