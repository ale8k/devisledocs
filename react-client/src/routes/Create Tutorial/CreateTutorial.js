import React, { Component } from "react"
import Section from "./Section"
import { SectionDataModel } from "../../shared/models/SectionDataModel"
import { SectionDetailDataModel } from "../../shared/models/SectionDetailDataModel"
import { Button } from "react-bootstrap"
import axios from "axios"
import "../../App.css"
export default class CreateTutorial extends Component {
  state = {
    createTutorial: false,
    tutorialData: {
      tutorialName: null,
      sections: [],
      tutorialCategory: null
    },
    sectionsCounter: null,
    detailHeaderCounter: null,
    detailImagesCounter: null,
    detailTextCounter: null
  }

  createTut() {
    this.setState({
      createTutorial: !this.state.createTutorial
    })
  }

  sectionNameHandler = event => {
    const { name, value } = event.target

    this.setState({
      tutorialData: {
        ...this.state.tutorialData,
        [name]: value
      }
    })
  }

  createSection(event, index, type) {
    const tutorialData = { ...this.state.tutorialData }
    switch (type) {
      case "create":
        tutorialData.sections.push(SectionDataModel)
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

  sectionDetailsHandler = (event, index, type) => {
    let tutorialData = { ...this.state.tutorialData }
    switch (type) {
      case "create":
        tutorialData.sections[index].sectionDetails.push(SectionDetailDataModel)
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

  setTutorial() {
    const tutorialData = { ...this.state.tutorialData }

    console.log(this.state.tutorialData)
    axios
      .post("http://localhost:5000/tutorials/save-tutorial", { tutorialData })
      .then(res => {
        if (res.status === 200) {
          alert("Data has been successfully submitted!")
          this.props.history.push("/")
        }
      })
    // this.state.tutorialData.sections.forEach(d => console.log(d))
  }

  render() {
    return (
      <div className="bg-dark">
        <div className="p-2 container body-height">
          <table className="col-md-12">
            <tbody>
              <tr>
                <Button
                  variant="primary"
                  className="m-3"
                  style={{ width: "100%" }}
                  onClick={() => this.createTut()}
                >
                  Create Tutorial
                </Button>
              </tr>
              <tr>
                {this.state.createTutorial && (
                  // /** flexbox on this bad boy */
                  <React.Fragment>
                    <div className="d-flex flex-column justify-content-center align-items-center text-light">
                      <tr>
                        <td>
                          <label htmlFor="tutorialName" className="m-2">
                            Tutorial Name:
                          </label>
                        </td>
                        <td>
                          <input
                            id="tutorialName"
                            className="form-control"
                            type="text"
                            name="tutorialName"
                            placeholder="Enter Tutorial Name"
                            ref="tutorialName"
                            onChange={e => this.sectionNameHandler(e)}
                          />
                        </td>
                        <td>
                          <Button
                            variant="primary"
                            className="m-3"
                            onClick={e =>
                              this.createSection(e, "index", "create")
                            }
                          >
                            Add Section
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="tutorialName" className="m-2">
                            Tutorial Category:
                          </label>
                        </td>
                        <td>
                          <select
                            name="tutorialCategory"
                            onChange={e => this.sectionNameHandler(e)}
                          >
                            <option value="">---</option>
                            <option value="tutorial">Tutorial</option>
                            <option value="guide">Guide</option>
                            <option value="article">Article</option>
                          </select>
                        </td>
                      </tr>
                      {this.state.tutorialData.sections.map((data, index) => {
                        return (
                          <>
                            <Section
                              sectionDetailsHandler={this.sectionDetailsHandler}
                              sectionDetails={
                                this.state.tutorialData.sections[index]
                                  .sectionDetails
                              }
                              key={index}
                              index={index}
                            />
                            <tr className="section-bottom">
                              <td>
                                <Button
                                  variant="danger"
                                  className="m-3"
                                  onClick={e =>
                                    this.createSection(e, index, "delete")
                                  }
                                >
                                  Remove Section
                                </Button>
                              </td>
                            </tr>
                          </>
                        )
                      })}
                      <tr>
                        <td>
                          <Button
                            variant="success"
                            className="m-3"
                            type="submit"
                            onClick={() => this.setTutorial()}
                          >
                            Submit
                          </Button>
                        </td>
                      </tr>
                    </div>
                  </React.Fragment>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
