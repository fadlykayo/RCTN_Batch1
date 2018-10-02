import {
  LOGOUT,
} from '../constants/Types';

/*
A bit intro about dispatch:
Action di Redux hanya menerima data berupa object literal dan action tidak dapat men-dispatch action lainnya.
Dengan menggunakan thunk, yg tadinya kita hanya me-return sebuah action object, kita bisa me-return sebuah fungsi (dispatch).
Dengan bantuan redux-thunk (dispatch) ini kita bisa men-dispatch (memberi kabar) kepada banyak action sekaligus
*/

export function createProduct() {
  return {
    type: LOGOUT,
  };
}
