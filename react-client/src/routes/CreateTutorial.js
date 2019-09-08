import React, { Component } from "react"
import Section from "../components/createTutorial/section"

const sectionsDataModel = {
  sections: [
    {
      sectionName: String,
      sectionDetails: [
        {
          detailHeader: String,
          detailImages: [String],
          detailText: String
        }
      ]
    }
  ]
}

export default class CreateTutorial extends Component {
  state = {
    createTutorial: false,
    tutorialData: {
      tutorialName: null,
      sections: []
    },
    sectionsCounter: null,
    detailHeaderCounter: null,
    detailImagesCounter: null,
    detailTextCounter: null
  }

  createTut() {
    this.setState({
      createTutorial: true
    })
  }

  createSection() {
    const tutorialData = { ...this.state.tutorialData }
    tutorialData.sections.push(sectionsDataModel)
    this.setState({
      tutorialData
    })
  }

  setTutorial() {
    console.log(this.refs)
    this.state.tutorialData.sections.forEach(d => console.log(d))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.createTut()}>Create Tutorial</button>
        {this.state.createTutorial && (
          // /** flexbox on this bad boy */
          <div>
            <label>
              Tutorial Name
              <input
                type="text"
                name="tutorialName"
                placeholder="Enter Tutorial Name"
                ref="tutorialName"
              />
            </label>
            <button onClick={() => this.createSection()}>Create</button>
            {this.state.tutorialData.sections.map((data, i) => {
              return <Section key={i} index={i} />
            })}
            <button type="submit" onClick={() => this.setTutorial()}>
              Submit
            </button>
          </div>
        )}
      </div>
    )
  }
}
