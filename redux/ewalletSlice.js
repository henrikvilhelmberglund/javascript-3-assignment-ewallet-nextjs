import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialPreviewCard = {
  number: "****************",
  validThru: "1/2024",
  vendor: "DuckCard",
  ccv: "***",
  active: true,
};
export const getPosts = createAsyncThunk(
  "ewalletSlice/getStartUser",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);
const ewalletSlice = createSlice({
  name: "ewalletSlice",
  initialState: {
    cards: [
      {
        number: "6666567891011123",
        validThru: "10/2024",
        vendor: "DuckCard",
        ccv: 176,
        active: true,
      },
    ],
    activeCard: null,
    cardPreview: initialPreviewCard,
  },
  reducers: {
    setActiveCard: (state, action) => {
      console.log(action);
      const { i, newState } = action.payload;
      state.cards[i].active = newState;
    },
    setAllCardsToInactive: (state, action) => {
      console.log(action);
      state.cards.forEach((card) => {
        card.active = false;
      });
    },
    createCard: (state, action) => {
      const newCard = action.payload;
      state.cards.push(newCard);
    },
    updateCardPreview: (state, action) => {
      state.cardPreview = action.payload;
    },
    resetCardPreview: (state, action) => {
      state.cardPreview = initialPreviewCard;
    },
    deleteCard: (state, action) => {
      state.cards.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Success!";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "Rejected";
      });
  },
});

export const {
  setActiveCard,
  setAllCardsToInactive,
  createCard,
  updateCardPreview,
  deleteCard,
  resetCardPreview,
} = ewalletSlice.actions;
export default ewalletSlice.reducer;
