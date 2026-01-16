interface Props{
  searches: string[];
  onSearchClick: (term: string) => void;
}

export const PreviousSearches = ({searches, onSearchClick}: Props) => {
  return (
    <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
            {searches.map((search, index) => (
                <li key={index}
                onClick={() => onSearchClick(search)}
                >{search}</li>
            ))}
            
        </ul>
    </div>
  )
}
