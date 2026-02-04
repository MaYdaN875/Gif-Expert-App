import { giphyApi } from "../api/giphy.api";

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";


export const getGifsByQuery = async(query: string): Promise<Gif[]>=> {
    const response = await giphyApi<GiphyResponse>('/search',{
        params: {
            q: query,
            limit: 10
        }
    });

    return response.data.data.map( gif => ({
       id: gif.id,
       title: gif.title,
       url: gif.images.downsized_medium.url,
       width: parseInt(gif.images.downsized_medium.width),
       height: parseInt(gif.images.downsized_medium.height),
    }));
    
    
}