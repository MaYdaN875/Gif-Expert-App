import { mockGifs } from "./mocks/gifs.mocks";


export const GifsApp = () => {
  return (
    <>
        {/*Header*/}
        <div className="search-container">
            <input type="text" placeholder="Buscar gifs" />
            <button>Buscar</button>
        </div>
        {/* Busquedas previas*/}

        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                <li>Goku</li>
                <li>Saitama</li>
                <li>Elden ring</li>
                <li>Berserk</li>
            </ul>
        </div>

        {/* */ }

        <div className="gifs-container">
            {
                mockGifs.map( (gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height}</p>
                    </div>
                    
                ))
            }
        </div>
    </>
  );
}
