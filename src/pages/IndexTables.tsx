import Select from 'react-select';

export function IndexTables() {
  const Species = [
    {label: "Antelope"},
    {label: "Black Bear"},
    {label: "Elk"},
    {label: "Moose"},
    {label: "Mountain Goat"},
    {label: "Mountain Lion"},
    {label: "Mule Deer"},
    {label: "Bighorn Sheep"},
    {label: "Turkey"},
    {label: "Upland Game"},
    {label: "Whitetail Deer"},
    {label: "Wolf"}
  ]

  const Year = [

  ]

  const District = []

  return(
    <div className="container">
      <h1>d</h1>
      <h1>d</h1>
      <h1>d</h1>
      <h1>d</h1>
      <h1>d</h1>
      <h1>d</h1>
      <h1>d</h1>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Select options={Species} />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
  )
}