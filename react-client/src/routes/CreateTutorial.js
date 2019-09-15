import React, { Component } from "react"
import Section from "../components/createTutorial/section"

//Bootstrap
import { Button } from "react-bootstrap"

const sectionsDataModel = {
  sectionName: String,
  sectionDetails: [
    {
      detailHeader: String,
      detailImages: [String],
      detailText: String
    }
  ]
}

const sectionsDetailsDataModel = {
  detailHeader: String,
  detailImages: [String],
  detailText: String
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

  createTut = () => {
    this.setState({
      createTutorial: !this.state.createTutorial
    })
  }

  createSection = (event, index, type) => {
    const tutorialData = { ...this.state.tutorialData }
    switch (type) {
      case "create":
        tutorialData.sections.push(sectionsDataModel)
        this.setState({
          tutorialData
        })
        break

      case "delete":
        tutorialData.sections.splice(index, 1)
        this.setState({
          tutorialData
        })
        break
    }
  }

  SectionDetailsHandler = (event, index, type) => {
    const tutorialData = { ...this.state.tutorialData }
    switch (type) {
      case "create":
        tutorialData.sections[index].sectionDetails.push(
          sectionsDetailsDataModel
        )
        this.setState({
          tutorialData
        })
        console.log(tutorialData, "tutorialData")
        break

      case "delete":
        tutorialData.sections[index].sectionDetails.splice(index, 1)
        this.setState({
          tutorialData
        })
        console.log(tutorialData, "tutorialData")
    }
  }

  setTutorial = () => {
    console.log(this.refs)
    // this.state.tutorialData.sections.forEach(d => console.log(d))
  }

  render() {
    return (
      <div className="bg-dark">
        <div
          className="p-2 container"
          style={{ minHeight: "calc(100vh - 50px)" }}
        >
          <Button
            variant="primary"
            className="m-3"
            onClick={() => this.createTut()}
          >
            Create Tutorial
          </Button>
          {this.state.createTutorial && (
            // /** flexbox on this bad boy */
            <div>
              <div className="d-flex flex-column justify-content-center align-items-center text-light">
                <div>
                  <label htmlFor="tutorialName" className="m-2">
                    Tutorial Name:
                  </label>
                  <input
                    id="tutorialName"
                    className="form-control"
                    type="text"
                    name="tutorialName"
                    placeholder="Enter Tutorial Name"
                    ref="tutorialName"
                  />
                </div>
                <Button
                  variant="primary"
                  className="m-3"
                  onClick={e => this.createSection(e, "index", "create")}
                >
                  Add Section
                </Button>
                {this.state.tutorialData.sections.map((data, index) => {
                  return (
                    <>
                      <Section
                        SectionDetailsHandler={this.SectionDetailsHandler}
                        sectionDetails={
                          this.state.tutorialData.sections[index].sectionDetails
                        }
                        key={index}
                        index={index}
                      />
                      <Button
                        variant="danger"
                        className="m-3"
                        onClick={e => this.createSection(e, index, "delete")}
                      >
                        Remove Section
                      </Button>
                    </>
                  )
                })}
                <Button
                  variant="success"
                  className="m-3"
                  type="submit"
                  onClick={() => this.setTutorial()}
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
