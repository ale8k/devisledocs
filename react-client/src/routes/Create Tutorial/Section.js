import React, { Component } from "react"
import { Button } from "react-bootstrap"

export default class Section extends Component {
  render() {
    const { index, sectionDetailsHandler, sectionDetails } = this.props
    return (
      <React.Fragment>
        <div>
          <h4>Section {index + 1}</h4>
          <tr className="">
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
            <Button
              variant="primary"
              className="m-3"
              onClick={e => sectionDetailsHandler(e, index, "create")}
            >
              Add Details
            </Button>
          </tr>
        </div>

        {sectionDetails !== undefined &&
          sectionDetails.map((data, i) => {
            return (
              <>
                <div className=" m-3">
                  <h4>Detail {i + 1}</h4>
                  <tr>
                    <td>
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
                    </td>
                    <td className="d-flex align-items-center">
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
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="m-3"
                        onClick={e => sectionDetailsHandler(e, index, "delete")}
                      >
                        Remove Details
                      </Button>
                    </td>
                  </tr>
                </div>
              </>
            )
          })}
      </React.Fragment>
    )
  }
}
