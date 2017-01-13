function GoogleCity(props){
  return(
    <table className="cityName">
      <tbody>
        <tr>
          <td>{props.cityObject.city}</td>
        </tr>
      </tbody>
    </table>
  )
}

var Cities = React.createClass({
  render: function(){
    var cityRows = [];
    this.props.cities.map(function(currentCity, index){
      // console.log(index+1, currentCity.city)
      cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
    })
    var string = "Hello, World. I'm cold."
    return(
      <div>{cityRows}</div>
    )
  } 
})

ReactDOM.render(
  <Cities cities={cities} />,
  document.getElementById('cities-container')
)


