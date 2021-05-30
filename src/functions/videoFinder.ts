import ytSearch from "yt-search";

export default async function videoFinder(query: string) {
    const videoResult = await ytSearch(query);
    return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
};