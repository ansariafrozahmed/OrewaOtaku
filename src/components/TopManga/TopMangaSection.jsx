import TopMangaSlider from "./TopMangaSlider";


const TopMangaSection = () => {

    return (
        <div className='py-10 bg-gradient-to-b from-[#181408]'>
            <div className="px-3 lg:px-5">
                <div className='flex'>
                    <h2 className='text-[2.3rem] font-bold'>Popular</h2>
                    <h2 className='text-[2.3rem] font-bold text-[#FFDD95]'>Manga</h2>
                </div>
                <p className='text-[1rem] text-[#FFDD95] -mt-2'>Check Out Some Popular Manga!</p>
            </div>
            <div className='mt-5'>
                <TopMangaSlider />
            </div>
        </div>
    );
}
export default TopMangaSection;