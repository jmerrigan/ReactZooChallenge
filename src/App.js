import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalAnimalsInZoo: 0,
      birdsInZoo: 0,
      mammalsInZoo: 0,
      reptilesInZoo: 0
    }
  }

  incrementAnimalsInZoo() {
   const currentAnimals = this.state.totalAnimalsInZoo
   this.setState({totalAnimalsInZoo: currentAnimals + 1})
  }

  removeAnimalsInZoo() {
    const currentAnimals = this.state.totalAnimalsInZoo
    this.setState({totalAnimalsInZoo: currentAnimals - 1})
   }

   updateSpecies(item) {
     if (item.state.speciesType === "Bird"){
      const currentBirds = this.state.birdsInZoo
       this.setState({birdsInZoo: currentBirds + 1})
     }

     else if (item.state.speciesType === "Mammal") {
       const currentMammals = this.state.mammalsInZoo
       this.setState({mammalsInZoo: currentMammals+ 1})
     }
     else if (item.state.speciesType === "Reptile") {
      const currentReptiles = this.state.reptilesInZoo
      this.setState({reptilesInZoo: currentReptiles+ 1})
    }

   }

   removeSpecies(item) {
    if (item.state.speciesType === "Bird"){
     const currentBirds = this.state.birdsInZoo
      this.setState({birdsInZoo: currentBirds - 1})
    }

    else if (item.state.speciesType === "Mammal") {
      const currentMammals = this.state.mammalsInZoo
      this.setState({mammalsInZoo: currentMammals - 1})
    }

    else if (item.state.speciesType === "Reptile") {
      const currentReptiles = this.state.reptilesInZoo
      this.setState({reptilesInZoo: currentReptiles - 1})
    }
  }



  render() {
    return (
      <div className="App">
        <h1>🦁 Welcome to Melbourne Zoo 🐅</h1>
        <h2>We currently have {this.state.totalAnimalsInZoo} animals in our zoo</h2>
        <Button animal="Penguins" species="Bird" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)}/>
        <Button animal="Elephants" species="Mammal" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)}/>
        <Button animal="Lions" species="Mammal" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)} />
        <Button animal="Meerkats" species="Mammal" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)}/> 
        <Button animal="Tasmanian Tiger" species="Mammal" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)} /> 
        <Button animal="Pigeon" species="Bird" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)} />  
        <Button animal="Komodo Dragon" species="Reptile" updateAnimals={this.incrementAnimalsInZoo.bind(this)} removeAnimals={this.removeAnimalsInZoo.bind(this)} speciesInZoo={this.updateSpecies.bind(this)} removeSpeciesInZoo={this.removeSpecies.bind(this)} />  


        <h3> There are currently {this.state.birdsInZoo} birds in the zoo</h3>
        <h3> There are currently {this.state.mammalsInZoo} mammals in the zoo</h3>
        <h3> There are currently {this.state.reptilesInZoo} reptiles in the zoo</h3>

      </div>
    );
  }
}

export default App;
