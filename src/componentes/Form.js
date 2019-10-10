import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'
import moment from 'moment'


export default class Form extends React.Component{

	state = {
		fecha:new Date(),
		peso:""
	}

	onSubmit = ()=>{
		
		const {fecha,peso} = this.state
		console.log(fecha,peso)

		if(!peso || isNaN(peso) || peso<0){
			swal('Lectura invalida','El Registro debe ser válido','error')
		}else{
			this.props.onAceptar(this.state)
		}
	}

	cambioFecha = (fecha)=>{
		//console.log(evt)
		this.setState({fecha})
	}

	cambiarPeso = evt =>{

		this.setState({
			peso:evt.target.value
		})
	}

	render(){
		return(
			<div className="row">
				<div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in":""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
					<form>
						<label htmlFor="fecha">
							Fecha:
							<DatePicker
							
							selected={this.state.fecha}
							onChange={this.cambioFecha}
							/>
						</label><br/>
						<label htmlFor="peso">
							Peso:
							<input type="datetime" name="peso" value={this.state.peso}
							onChange={this.cambiarPeso} id="peso"/>
						</label>
						<input type="button" onClick={this.onSubmit} value="Agregar"/>
						<input type="button" onClick={()=>this.props.onCerrar()}value="Cerrar"/>
					</form>
				</div>
			</div>
			);
	}

}