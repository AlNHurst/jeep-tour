import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    return (<h1>Thank you for your review!</h1>)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Review:
          <textarea onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ReviewForm
