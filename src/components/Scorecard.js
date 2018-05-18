import {Component} from 'react'

class Scorecard extends Component {
  render(){
    let accu = `${(this.props.correct/this.props.length)*100} %`
    let sty =  (this.props.status==="Correct")? {color:"green",fontWeight:"bold"}:{color:"red",fontWeight:"bold"}
    return (
      <div>
      <div className="scorecard">

          <h2>Score Card</h2>
          <table>
            <tbody>
            <tr>
              <th>Current Q</th>
              <td style={sty}>{this.props.status}</td>
            </tr>
            <tr>
              <th>Total Correct</th>
              <td>{this.props.correct}</td>
            </tr>
            <tr>
              <th>Total Incorrect</th>
              <td>{(this.props.incorrect)? this.props.incorrect: null}</td>
            </tr>
            <tr>
              <th>Gross Total</th>
              <td>{this.props.length}</td>
            </tr>
            <tr>
              <th>Result</th>
              <td>{(this.props.correct && this.props.length)? accu : null}</td>
            </tr>
            </tbody>
          </table>
      </div>
      </div>
    )
  }
}


module.exports = Scorecard
