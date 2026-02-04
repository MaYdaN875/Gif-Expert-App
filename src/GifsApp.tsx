
import { CustomHeader } from "./shared/components/CustomHeadr";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import {  useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";


export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);


  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = async (query: string) =>{
    if(previousTerms.includes(query)) return;
    if(query.trim().length === 0) return;
    setPreviousTerms([query, ...previousTerms].splice(0,7));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
    
  }
  return (
    <>
        {/*Header*/}
        <CustomHeader title="Gifs App" description="Busca tus gifs favoritos" />
        
        <SearchBar

          onSearch={handleSearch}
        />
        {/* Busquedas previas*/}


       <PreviousSearches searches={previousTerms} onSearchClick={handleTermClicked} />

        {/* Gifs List */ }

        <GifList gifs={gifs}/>
    </>
  );
}
