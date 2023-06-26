import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '87b00dd7b3msheb76822cec8dbc5p1bd189jsn71e531337875')
            headers.set('x-rapidapi-host', 'shazam-core7.p.rapidapi.com')
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopChart: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
    }),
});
export const { useGetTopChartQuery } = shazamCoreApi;