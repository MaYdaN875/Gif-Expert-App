import { mockGifs } from "./mocks/gifs.mocks";
import { CustomHeader } from "./shared/components/CustomHeadr";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { useEffect, useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";


export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["Goku", "Saitama", "Elden ring", "Berserk"]);



  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = async (query: string) =>{
    if(previousTerms.includes(query)) return;
    if(query.trim().length === 0) return;
    setPreviousTerms([query, ...previousTerms].splice(0,7));
    const gifs = await getGifsByQuery(query);
    console.log(gifs);
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

        <GifList gifs={mockGifs}/>
    </>
  );
}
