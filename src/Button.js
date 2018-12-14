import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state ={
            numOfAnimals: 0,
            animalType: props.animal,
            speciesType: props.species
        }
    }

    incrementAnimals() {
        const currentAnimals = this.state.numOfAnimals;
        this.setState({numOfAnimals: currentAnimals + 1})
        this.props.updateAnimals()
        this.props.speciesInZoo(this)
    }

    deleteAnimals() {
        const currentAnimals = this.state.numOfAnimals;
        this.setState({numOfAnimals: currentAnimals - 1})
        this.props.removeAnimals()
        this.props.removeSpeciesInZoo(this)
    }

    render() {
        return( 
        <div>   
            <button onClick={this.incrementAnimals.bind(this)}>There are {this.state.numOfAnimals} {this.state.animalType} in the zoo</button>
            <button onClick={this.deleteAnimals.bind(this)}>Remove {this.state.animalType} from the Zoo</button>
        </div>
        )

    }
}

export default Button;