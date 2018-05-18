import {Component} from 'react'
import BoolQ from './BooleanQuestion'
import MultiQ from './MultipleQuestion'
import Scorecard from './Scorecard'

class QuestionFilter extends Component {
  constructor(props){
    super(props)
  }

 // handleStatus(val){
 //   this.setState({
 //     status:val
 //   })
 // }

  render(){
    const types = this.props.seltype;
    // let datamul = (types==="multiple")? this.props.data : null;
    // let databol = (types==="boolean") ? this.props.data : null;
    const Ques = types === "boolean" ?
    <BoolQ
    url2={this.props.url}
    status={this.props.statusQue}
    /> :
    <MultiQ
    url1={this.props.url}
    status={this.props.statusQue}
    />

    return (
      <div className="cont2">
      <Scorecard
      status={this.props.statu}
      length={this.props.length}
      correct={this.props.correct}
      incorrect={this.props.incorrect}
      />
      <div className="Qrender">
          {Ques}
      </div>
      </div>
    )
  }
}

module.exports = QuestionFilter
