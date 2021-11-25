class Button extends React.Component {
  state = {
    clicked:false
  }  

  toggleBtnHandler = () => {
    return this.setState({
      clicked:!this.state.clicked
    })
    
  }
  render() {
    const styles = ['button'];
    let text = 'Submit';
    let bodyEl = document.body;
    
    if (this.state.clicked) {
      styles.push('clicked');
    } 
    return (
    <div className={Button}>
      <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>{text}</button>
    </div>
    )
  }
}

ReactDOM.render(<Button />, document.getElementById('button'));