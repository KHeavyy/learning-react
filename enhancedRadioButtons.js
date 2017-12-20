class Button extends React.Component {
    handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    };
  
    render() {
      return (
        <button onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      );
    }
  }
  
  class Radio extends React.Component {
      handleChange = function(e) {
        this.props.setRadioVal(e.target.value)
    }
    
    render() {
        return (
          <div onChange = {this.handleChange.bind(this)}>
            <span>Val 1</span> &nbsp;
              <input type="radio" 
                       name="test" 
                 value="Val1"
                 checked={this.props.selectedOption === 'Val1'}/>
          &nbsp;
          
          <span>Val 2</span>
          
          &nbsp;
            
          <input type="radio" 
                       name="test" 
                 value="Val2" 
                 checked={this.props.selectedOption === 'Val2'}/>
          </div>
      );
    }
  }
  
  const Result = (props) => {
    return (
      <div>{props.counter}</div>
    );
  };
  
  const RadioResult = function (props) {
      return (
        <div>
          <span>You've picked: </span>
            <span>{ props.val } </span>
      </div>
    )
  }
  
  class App extends React.Component {
    state = { counter: 0, radioVal: 'Val1' };
  
    incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
    };
  
      setRadioValue = (value) => {
      this.setState(() => ({
        radioVal: value
      }));   
    }
  
    render() {
      return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
          <Radio setRadioVal = { this.setRadioValue } selectedOption = {this.state.radioVal}/>
          <RadioResult val = { this.state.radioVal } />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, mountNode);