'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() {
		return (
		    <div>
			    <AFPBE/>

			</div>
		)
	}
}
// end::app[]

class AFPBESkjema extends React.Component{
  constructor(props) {
    super(props);
    this.state = {pensjonsgrunnlagAP: '50 000 kr'};

    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("AFPBESkjema::handleChange")
    this.setState({pensjonsgrunnlagAP: event.target.value});
  }

  handleSubmit(event) {
    //alert('Pensjonsgrunnlag AP angitt: ' + this.state.pensjonsgrunnlagAP);
    //event.preventDefault();
    this.props.onYtelseEndret(e.target.value)
  }

  render() {
    return (
      <form onChange={() => this.props.onSubmit()}>
        <label>
          Pensjonsgrunnlag AP:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={() => this.props.onBeregn()}>Beregn</button>
        <input type="submit" value="Nullstill" />
      </form>
    );
  }
}

class Ytelse extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
            <h2>Estimert nettoytelse</h2>
            <p> {this.props.nettoytelse} </p>

            <h2>Estimert bruttoytelse</h2>
            <p> {this.props.bruttoytelse} </p>
            </div>
        );
    }

}

class AFPBE extends React.Component{
    constructor(props) {
        super(props);

       this.state = {
          pensjonsgrunnlagAP: "85 000 kr",
          nettoytelse: "35 000 kr",
          bruttoytelse:"35 000 kr"
       }
    }

    onSubmitting() {
        console.log("onSubmit");

        this.setState(
               {
                    pensjonsgrunnlagAP: "85 000 kr",
                    nettoytelse: "55 000 kr",
                    bruttoytelse:"55 000 kr"
                });
    }

    onBeregn() {
        console.log("onBeregn");

        this.setState(
               {
                    pensjonsgrunnlagAP: "95 000 kr",
                    nettoytelse: "65 000 kr",
                    bruttoytelse:"65 000 kr"
                });
    }


    render() {
        const pensjonsgrunnlagAP = this.state.pensjonsgrunnlagAP;
        const nettoytelse = this.state.nettoytelse;
        const bruttoytelse = this.state.bruttoytelse;

        return (
            <div>
                  <AFPBESkjema
                    onSubmit={() => this.onSubmitting()}
                    onBeregn={() => this.onBeregn()}
                  />
                  <Ytelse
                    nettoytelse={nettoytelse}
                    bruttoytelse={bruttoytelse}
                  />
            </div>
        )
    }



}




// tag::employee-list[]
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

