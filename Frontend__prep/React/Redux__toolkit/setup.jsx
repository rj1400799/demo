//App.jsx
import "./styles.css";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}


//store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

//export default store;

//cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: ["banana", "beetroot"],
  },
  name: "cartSlice",
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clear: () => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
//export default cartSlice.reducer;


//Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddition = () => {
    dispatch(addItem("orange"));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item} </div>
      ))}
      <button onClick={handleAddition}> Add item </button>
    </div>
  );
};

//export default Cart;
