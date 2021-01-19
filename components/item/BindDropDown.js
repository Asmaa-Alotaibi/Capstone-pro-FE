class BindDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        { name: "One", id: 1 },
        { name: "Two", id: 2 },
        { name: "Three", id: 3 },
        { name: "four", id: 4 },
      ],
    };
  }
  render() {
    let optionTemplate = this.state.values.map((v) => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <label>
        Pick your favorite Number:
        <select value={this.state.value} onChange={this.handleChange}>
          {optionTemplate}
        </select>
      </label>
    );
  }
}

ReactDOM.render(<BindDropDown />, document.getElementById("root"));
