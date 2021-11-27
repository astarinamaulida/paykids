import React from 'react';
import Button from 'muicss/lib/react/button';

import "/components/Button.scss"

// Need to update with onClick after the route established
class Button extends React.Component {
  render() {
    return (
      <div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <div>
          <Button className="Button">Submit</Button>
        </div>
      </div>
    );
  }
}

export default <Button />