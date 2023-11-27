import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MangaDetails = () => {
    const { mangaId } = useParams();
    const [mangaDetails, setMangaDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // console.log(mangaId);

    useEffect(() => {
        const fetchMangaDetails = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaId}`);
                const data = await response.json();
                setMangaDetails(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching anime details:", error);
                // Handle errors as needed
            }
        };

        fetchMangaDetails();
    }, [mangaId]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{mangaDetails.title}</h1>
                    <p>Type: {mangaDetails.type}</p>
                    Add more details as needed
                </div>
            )}
        </div>
    );
};

export default MangaDetails;
