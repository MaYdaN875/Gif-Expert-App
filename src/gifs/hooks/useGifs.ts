import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> ={};
export const useGifs =()=>{
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if( gifsCache.current[term]){
      setGifs(gifsCache.current[term]);
      return;  
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;

  }

  const handleSearch = async (query: string) =>{
    if(previousTerms.includes(query)) return;
    if(query.trim().length === 0) return;
    setPreviousTerms([query, ...previousTerms].splice(0,7));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
    gifsCache.current[query] = gifs;
    
  };
  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked,
  }
}