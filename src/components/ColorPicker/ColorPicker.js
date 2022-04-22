import React,{ Component } from 'react';
import 'components/ColorPicker/ColorPicker.css';

class ColorPicker extends Component{
    state = {
        activeOptionIdx: 0,
    };

    setActiveInx = index => {
        this.setState({ activeOptionIdx: index });
    };
    
    makeOptionsClasssName = index => {
        const optionClasses = ['ColorPicker__option'];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join('');
    };

   
    render() {
        const { label } = this.props.options[this.state.activeOptionIdx];

        return (
             <div className="ColorPicker">
             <h2 className="ColorPicker__tittle">Color Picker</h2>
                <p>Colors: { label }</p>
                <div>
            {this.props.options.map(({ label, color },index) =>(
                    <button
                        key={label}
                        className={this.makeOptionsClasssName(index)}
                        style={{ backgroundColor: color }}
                        onClick={()=> this.setActiveInx(index)}
                    ></button>
            ))}
            </div>
         </div>
        ) 
    }
   
};
export default ColorPicker;

// console.log(ColorPicker)