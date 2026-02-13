
import { CustomHeader } from "./shared/components/CustomHeadr";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";


export const GifsApp = () => {


  const { gifs, handleSearch, handleTermClicked, previousTerms} = useGifs();

  
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
