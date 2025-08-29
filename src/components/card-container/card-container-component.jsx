import './card-container-style.css';

// Destructuring the props received from parent component 
// It can also be written as
// const CardContainer = (props) =>  {
//     const {monsterId, monsterName, monsterEmail} = props;
// }


const CardContainer = ({ monsterId, monsterName, monsterEmail }) => {

    return (
      <div className="card-container" key={monsterId}>
        <img
          alt={`monster ${monsterId}`}
          src={`https://robohash.org/${monsterId}?set=set2&size=180x180`}
        />
        <h1>{monsterName}</h1>
        <p>{monsterEmail}</p>
      </div>
    );
}

export default CardContainer;
