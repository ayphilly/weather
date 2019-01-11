import React , {Component} from 'react';

class Form extends Component {
    myfunc = (e) =>{

        const mysa = this.state;
        //console.log(mysa);
        return this.props.mydata(e)

    }
    state = {
        field : {
            city :null ,
            country :null
        }

    }
    render () {

        const cityFunc = (e) => {
            const cityval = e.target.value;
            const field = this.state.field;
            field.city = cityval
            this.setState ({field});
            this.props.onSub({'name':'city', 'value':cityval})
        }
        const countryFunc = (e) =>{
            const countryval = e.target.value;
            const field = this.state.field;
            field.country = countryval
            this.setState ({field});
            this.props.onSub({'name':'country', 'value':countryval})

        }
        return (
            <div>
                <form onSubmit={this.myfunc}>
                    <input type="text"  onChange={cityFunc} name={'city'} placeholder={'city'}/>
                    <input type="text" onChange={countryFunc} name={'country'} placeholder={'country'}/>
                    <button >Get Weather</button>

                </form>

            </div>
        )
    }
}

export default Form;