import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
    const { animeId } = useParams();
    const [animeDetails, setAnimeDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // console.log(animeId);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
                const data = await response.json();
                setAnimeDetails(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching anime details:", error);
                // Handle errors as needed
            }
        };

        fetchAnimeDetails();
    }, [animeId]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{animeDetails.title}</h1>
                    <p>Type: {animeDetails.type}</p>
                    Add more details as needed
                </div>
            )}
        </div>
    );
};

export default AnimeDetails;
