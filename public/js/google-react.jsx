function GoogleCity(props) {
  return (
    <table className="cityName">
      <tbody>
      <tr>
        <td>{props.cityObject.city}</td>
      </tr>
      </tbody>
    </table>
  )
}

class Cities extends React.Component {
  render() {
    let cityRows = [];
    this.props.cities.map(function (currentCity, index) {
      // console.log(index+1, currentCity.city)
      cityRows.push(<GoogleCity cityObject={currentCity} key={index}/>)
    });
    let string = "Hello, World. I'm cold.";
    return (
      <div>{cityRows}</div>
    );
  }
}

ReactDOM.render(
  <Cities cities={cities}/>,
  document.getElementById('cities-container')
);
