import React, { Component } from "react"

export default class section extends Component {
  render() {
    const { index } = this.props
    return (
      <div>
        <div>
          <h3>Section {index + 1}</h3>
          <label>
            Section Name
            <input
              type="text"
              name="sectionName"
              placeholder="Section Name"
              ref="sectionName"
            />
          </label>
        </div>
        <div>
          <label>
            Header Name
            <input
              type="text"
              name="detailHeader"
              placeholder="Header Name"
              ref="detailHeader"
            />
          </label>
          <label>
            Paragraph Here
            <textarea
              name="detailText"
              placeholder="Paragraph Here"
              ref="detailText"
            />
          </label>
        </div>
      </div>
    )
  }
}
