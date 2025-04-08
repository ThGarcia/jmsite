import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input className='searchbar-input' type='text' placeholder='Pesquisar produtos...' />
            <button className='search-button' type='submit'><i className='ri-search-2-line'></i></button>
        </div>
    );
};
export default SearchBar;
