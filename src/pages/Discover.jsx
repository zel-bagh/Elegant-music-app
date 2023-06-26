import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartQuery } from "../redux/services/shazamCore";
const Discover = () => {
    const { data, isFetching, error} = useGetTopChartQuery();
    if (isFetching) return <Loader title="Loading songs..."/>;
    if (error) return <Error  />;
    return (
    <div className="flex flex-col">
        <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
            <select 
            onChange={() => {}}
            value=""
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0"
            >
            {genres.map((genre) => <option key={genre.value} value={genre.value}>
            {genre.title}</option>)}
            </select>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {data?.map((song, i) => (
            <SongCard key={song.key} song={song} i={i}/>))}
        </div>
    </div>
)
}

export default Discover;
