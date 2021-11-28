import React from 'react';
import Button from 'muicss/lib/react/button';

import "/components/Button.scss"

// Need to update with save data in state and onClick function after the route established
class Button_Money extends React.Component {
  render() {
    return (
      <div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css" />
        <div>
          <Button className="Button">$5</Button>
          <Button className="Button">$10</Button>
          <Button className="Button">$15</Button>
          <Button className="Button">$20</Button>
          <Button className="Button">$50</Button>
          <Button className="Button">$100</Button>
        </div>
      </div>
    );
  }
}

export default <Button_Money />