import TopAnimeSlider from "./TopAnimeSlider";

const TopAnimeSection = () => {

    return (
        <div className='py-10 bg-gradient-to-t from-[#181408]'>
            <div className="px-3 lg:px-5">
                <div className='flex'>
                    <h2 className='text-[2.3rem] font-bold'>Popular</h2>
                    <h2 className='text-[2.3rem] font-bold text-[#FFDD95]'>Anime</h2>
                </div>
                <p className='text-[1rem] text-[#FFDD95] -mt-2'>Check Out Some Popular Anime!</p>
            </div>
            <div className='mt-5'>
                <TopAnimeSlider />
            </div>
        </div>
    );
}
export default TopAnimeSection;