import React, { Component } from 'react'

import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchQuery: '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleOnChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    const { monsters, searchQuery } = this.state
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleOnChange={this.handleOnChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
