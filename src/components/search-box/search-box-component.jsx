import './search-box.style.css';

// Destructuring the props received from parent component 
// It can also be written as
// const SearchBox = (props) =>  {
//     const { className, placeHolder, onChangeHandler } = props;
// }

const SearchBox = ({ cssClassName, placeHolder, onChangeHandler }) => {
    return (
      <div>
        <input
          className={`search-box ${cssClassName}`}
          type="search"
          placeholder={placeHolder}
          onChange={onChangeHandler}
        />
      </div>
    );
}

export default SearchBox;
