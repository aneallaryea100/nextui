import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ArtCenterSectionTwoArtWorksData from "@localDatabase/Data/centerArtSection2Artworks";

export const fetchArtWorks =  createAsyncThunk('artwork/fetchArtWorks', async () => {
    try {
        const response = await fetch(ArtCenterSectionTwoArtWorksData);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const artWorkSlice = createSlice({
    name: "artwork",
    initialState: {
        artworkData: [],
        status: 'idle',
        error: null,
        loading: false,
    },

    reducers: {
        setArtDetails: (state, action) => {
            state.artDetails = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtWorks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArtWorks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.artworkData = action.payload;
            })
            .addCase(fetchArtWorks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setArtDetails } = artWorkSlice.actions;
export default artWorkSlice.reducer;
