import { useEffect, useState } from "react";

interface Props{
    placeholder?: string;
    onSearch: (query: string) => void;
}
export const SearchBar = ({placeholder = "Buscar gifs", onSearch}: Props) => {
    const [query, setQuery] = useState("");

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if(query.trim().length === 0) return;
            onSearch(query);
        }, 700);

        return () =>{
            clearTimeout(timeoutId)
        }
    },[query, onSearch]);

    const handleSearch = () => {
        if(query.trim().length === 0) return;
        onSearch(query);
        setQuery("");
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
  return (
    <div className="search-container">
            <input 
                type="text" 
                placeholder={placeholder}
                value={query}
                onChange={ (event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown} />
            <button onClick={handleSearch}>Buscar</button>
        </div>
  )
}
