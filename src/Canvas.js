import React from 'react';


class Canvas extends React.Component {
render() {
    return(
      <div>
        <canvas ref="canvas" height='100%'/>
      </div>
    )
  }
}
export default Canvas