import React from "react"

class Head extends React.Component<{name: string}> {

  render () {
    return (
      <header className="header">
          <h1>{this.props.name}</h1>
          <h2>Apple with Caramel</h2>
      </header>
    )
  }
}

export default Head;