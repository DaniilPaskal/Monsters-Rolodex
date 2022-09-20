import { Component } from 'react';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div>
                {monsters.map((monster) => {
                    const { name, email, id } = monster;
                    return (
                        <div className='card-container' key={monster.id}>
                            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardList;