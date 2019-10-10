import React from 'react'
import Highcharts from 'highcharts';


class Grafica extends React.Component{

	componentDidMount(){
		//console.log(this.props.registros)
		this.initGrafica(this.props.registros)
	}

	componentWillReceiveProps(nextProps){
		this.initGrafica(nextProps.registros)
	}


	initGrafica = (registros)=>{

		  Highcharts.chart('grafica',{
	      title:{
	        text:"Peso vs Fecha"
	      },
	      xAxis:{
	        type:"datetime"
	      },
	      series:[
	        {
	          name:"test",
	          data:registros
	        }

	      ]
	    });

	}

	render(){
		return(
			 <div id="grafica" className="z-depth-2 hoverable" />
			);
	}
}

export default Grafica