import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './scss/style.scss'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      meals: [],
      category: 'chicken'
    }
  }

  componentDidMount() {
    this.loadData()
  }

  handleClick(e) {
    console.log(e.target.innerHTML)
    this.setState({
      category: e.target.innerHTML
    }, () => {
    // this.loadData() has to wait until handleClick() has finished setting state
      this.loadData() 
    })

  }

  loadData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.category}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ meals: resp.meals }))
  }

  render() {
    console.log(this.state.meals)
    return (
      <div>
        <header> 
          <h1>Meal Pantry</h1>
        </header>
        <nav>
          <button onClick={(e) => this.handleClick(e)}>{'breakfast'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'side'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'vegetarian'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'pasta'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'chicken'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'beef'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'seafood'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'dessert'}</button>
          <button onClick={(e) => this.handleClick(e)}>{'miscellaneous'}</button>
        </nav>
        <div className="container">
          {this.state.meals.map((meal, i) => {
            return <div className="meals" key={i}>
              <img src={meal.strMealThumb} />
              <h6>{meal.strMeal}</h6>
            </div>
          })}
        </div>
        <footer>
          <p>Lucy Casey <span>@</span> <a href="https://github.com/lucycasey">GitHub</a></p>
        </footer>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)