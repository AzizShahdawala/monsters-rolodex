import "./card-list-style.css";
import CardContainer from "../card-container/card-container-component";

// Destructuring the props received from parent component 
// It can also be written as
// const CardList = (props) =>  {
//     const {monsters} = props;
// }

const CardList = ({monsters}) =>  {

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <CardContainer key={id} monsterId={id} monsterName={name} monsterEmail={email} />
          );
        })}
      </div>
    );
}

export default CardList;
