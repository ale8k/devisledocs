import React, { Component } from "react"
import { Button } from "react-bootstrap"
export default class section extends Component {
  render() {
    const { index, SectionDetailsHandler, sectionDetails } = this.props
    return (
      <div>
        <div>
          <h4>Section {index + 1}</h4>
          <div className="">
            <label for="sectionName" className="m-2">
              Section Name:
            </label>
            <input
              className="p-2"
              id="sectionName"
              type="text"
              name="sectionName"
              placeholder="Section Name"
              ref="sectionName"
            />
          </div>
        </div>
        <Button
          variant="primary"
          className="m-3"
          onClick={e => SectionDetailsHandler(e, index, "create")}
        >
          Add Details
        </Button>
        {sectionDetails !== undefined &&
          sectionDetails.map((data, i) => {
            return (
              <>
                <div className=" m-3">
                  <h4>Detail {i + 1}</h4>
                  <div>
                    <label for="detailHeader" className="m-2">
                      Header Name:
                    </label>
                    <input
                      id="detailheader"
                      type="text"
                      className="p-2"
                      name="detailHeader"
                      placeholder="Header Name"
                      ref="detailHeader"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label for="detailText" className="m-2">
                      Paragraph Here:
                    </label>
                    <textarea
                      id="detailText"
                      name="detailText"
                      className="p-2"
                      placeholder="Paragraph Here"
                      ref="detailText"
                    />
                  </div>
                </div>
                <Button
                  variant="danger"
                  className="m-3"
                  onClick={e => SectionDetailsHandler(e, index, "delete")}
                >
                  Remove Details
                </Button>
              </>
            )
          })}
      </div>
    )
  }
}
