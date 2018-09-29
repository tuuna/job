//import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import {render} from 'react-dom'

class NoFilter extends React.Component {
  state = {
    selectedOptions: [
      {id: 1, name: "Avocado" ,checked:true},
      {id: 2, name: "Avocado" ,checked:true},
      {id: 3, name: "Avocado" ,checked:false},
      {id: 4, name: "Avocado" ,checked:true},
      {id: 5, name: "Avocado" ,checked:true}
    ]
  }

  handleDeselect(index) {
    let selectedOptions = this.state.selectedOptions.slice()
    selectedOptions.splice(index, 1)
    this.setState({selectedOptions})
  }

  handleClearSelection = (e) => {
    this.setState({selectedOptions: []})
  }

  render() {
    let {selectedOptions} = this.state
    return <div className="row">
      <div className="col-md-5">
        {selectedOptions.length === 0 && <p>(nothing selected yet)</p>}
        {selectedOptions.length > 0 && <div>
          {selectedOptions.map((a, i) => <li key={a.id} style={{listStyle:"none"}}>
            {`${a.name} `}
            <span  style={{cursor: 'pointer'}} onClick={() => this.handleDeselect(i)}>
              &times;
            </span>
          </li>)}
        </div>}
        {selectedOptions.length > 0 && <button style={{marginLeft: 20}} className="btn btn-default" onClick={this.handleClearSelection}>
          Clear Selection
        </button>}
      </div>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div className="container mb-5">
      <NoFilter/>
    </div>
  }
}

render(<App/>, document.querySelector('#demo'))

// import 'bootstrap/dist/css/bootstrap.min.css'
//
// import React from 'react'
// import {render} from 'react-dom'
// import FilteredMultiSelect from '../../src/index'
//
// import CULTURE_SHIPS from './ships.json'
// import FRUIT from './fruit.json'
// const BOOTSTRAP_CLASSES = {
//   filter: 'form-control',
//   select: 'form-control',
//   button: 'btn btn btn-block btn-default',
//   buttonActive: 'btn btn btn-block btn-primary',
// }
//
// class NoFilter extends React.Component {
//   state = {
//     selectedOptions: []
//   }
//   handleDeselect(index) {
//     var selectedOptions = this.state.selectedOptions.slice()
//     selectedOptions.splice(index, 1)
//     this.setState({selectedOptions})
//   }
//   handleClearSelection = (e) => {
//     this.setState({selectedOptions: []})
//   }
//   handleSelectionChange = (selectedOptions) => {
//     selectedOptions.sort((a, b) => a.id - b.id)
//     this.setState({selectedOptions})
//   }
//   render() {
//     var {selectedOptions} = this.state
//     return <div className="row">
//       <div className="col-md-5">
//         <FilteredMultiSelect
//           classNames={BOOTSTRAP_CLASSES}
//           onChange={this.handleSelectionChange}
//           options={FRUIT}
//           selectedOptions={selectedOptions}
//           textProp="name"
//           valueProp="id"
//           showFilter={false}
//         />
//       </div>
//       <div className="col-md-5">
//         {selectedOptions.length === 0 && <p>(nothing selected yet)</p>}
//         {selectedOptions.length > 0 && <ol>
//           {selectedOptions.map((fruit, i) => <li key={fruit.id}>
//             {`${fruit.name} `}
//             <span style={{cursor: 'pointer'}} onClick={() => this.handleDeselect(i)}>
//               &times;
//             </span>
//           </li>)}
//         </ol>}
//         {selectedOptions.length > 0 && <button style={{marginLeft: 20}} className="btn btn-default" onClick={this.handleClearSelection}>
//           Clear Selection
//         </button>}
//       </div>
//     </div>
//   }
// }
// class App extends React.Component {
//   render() {
//     return <div className="container mb-5">
//       <NoFilter/>
//     </div>
//   }
// }
// render(<App/>, document.querySelector('#demo'))
