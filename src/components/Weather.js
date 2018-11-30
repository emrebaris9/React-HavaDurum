import React from 'react';

class Weather extends React.Component{
    render() {
        return(
            <div className="hava_bilgisi">
                {
                    this.props.city &&  <p className="Form_icerik"> Yer:
                        <span className="gelen_deger"> { this.props.city }</span>
                    </p>
                }
                {
                    this.props.temperature && <p className="Form_icerik"> Sıcaklık:
                        <span className="gelen_deger"> { this.props.temperature }	</span>
                    </p>
                }
                {
                    this.props.humidity && <p className="Form_icerik"> Nem:
                        <span className="gelen_deger"> %{ this.props.humidity } </span>
                    </p>
                }
                {
                    this.props.main && <p>
                        <span className="gelen_deger"> { this.props.main } </span>
                    </p>
                }
                {
                    this.props.error && <p className="hata">{ this.props.error }</p>
                }
            </div>
        );
    }
}
export default Weather;