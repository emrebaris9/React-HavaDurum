import React from 'react';

class Form extends React.Component{
    render() {
        return(
           <form onSubmit={this.props.getWeather}>
               <input type="text" name="city" placeholder="Şehir..."/>
               <button>Hava Durumu</button>
           </form>
        );
    }

}
export default Form;