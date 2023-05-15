import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type NotiType = {
  message: string;
  status: string;
} | null;

interface Initial {
  isMenuOpen?: boolean;
  toastNoti?: NotiType;
}

const initialState: Initial = {
  isMenuOpen: false,
  toastNoti: null,
};

const emit = createSlice({
  name: 'emit',
  initialState,
  reducers: {
    menuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
    noti(state, action: PayloadAction<NotiType>) {
      state.toastNoti = action.payload;
    },
  },
});

export const { menuOpen, noti } = emit.actions;
export default emit.reducer;
