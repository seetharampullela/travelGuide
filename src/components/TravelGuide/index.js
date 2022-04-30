import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelItems from '../TravelItems'

class TravelGuide extends Component {
  state = {isLoading: false, travelPlacesList: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()

    const updatedData = data.packages.map(each => ({
      id: each.id,
      description: each.description,
      imageUrl: each.image_url,
      name: each.name,
    }))

    this.setState({travelPlacesList: updatedData, isLoading: true})
  }

  renderSuccessView = () => {
    const {travelPlacesList} = this.state

    return (
      <ul>
        {travelPlacesList.map(each => (
          <TravelItems travelItems={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoaderView = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <h1>Travel Guide</h1>
        {isLoading ? this.renderSuccessView() : this.renderLoaderView()}
      </div>
    )
  }
}

export default TravelGuide
