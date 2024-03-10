import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { charactersService } from "../../services/charactersService";
import { ICharacter } from "../../interfaces/characters";

interface IInitialState {
  episodeCharacters: ICharacter[];
}

const initialState: IInitialState = {
  episodeCharacters: [],
};

const getAllByIds = createAsyncThunk(
  "charactersSlice/getAllByIds",
  async (ids: number[], { rejectWithValue }) => {
    try {
      const { data } = await charactersService.getByIds(ids);
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllByIds.fulfilled, (state, { payload }) => {
      state.episodeCharacters = payload;
    });
  },
});

const { reducer: charactersReducer, actions } = charactersSlice;

const charactersActions = {
  ...actions,
  getAllByIds,
};

export { charactersReducer, charactersActions };
