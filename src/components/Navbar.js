import {Component} from 'react'
import Category from './Category'

class Navbar extends Component {
  constructor(props){
    super(props)

  }
  handleNumQuestion(e){
    e.preventDefault();
    this.props.handleNumQ(e.target.value);
  }
  handleDiff(e){
    e.preventDefault();
    this.props.handleDifficulty(e.target.value)
  }
  handleTypesel(e){
    e.preventDefault();
    this.props.handleTypeSelection(e.target.value)
  }
  handleFetch(e){
    e.preventDefault()
    this.props.handleFetching();
  }
  handleReset(e){
    e.preventDefault()
    this.props.handleRes();
  }
  render(){
    return(
      <div>
          <div className="flex-container">
             <div> <span><strong>Number of Question&#39;s</strong><br/></span> <input className="inpu1" type="number" placeholder="Number of questions" value={this.props.noOfQuestion} onChange={this.handleNumQuestion.bind(this)}/>
             </div>
             <Category
             catVal={this.props.catValNav}
             handlecatVal1 = {this.props.handlecatValue}
             />
             <div>
             <span><strong>Select Difficulty</strong></span> <br/>
              <select className="select" value={this.props.diff} onChange={this.handleDiff.bind(this)}>
                <option >Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
             </div>
             <div>
              <span><strong>Select Type</strong></span> <br/>
              <select className="select" value={this.props.anyType} onChange={this.handleTypesel.bind(this)}>
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
              </select>
             </div>
             <div>
              <button className="ready" onClick={this.handleFetch.bind(this)}><strong>Ready</strong></button>
             </div>
             <div>
              <button className="reset" onClick={this.handleReset.bind(this)}><strong>Reset</strong></button>
             </div>
          </div>
      </div>
    )
  }
}

module.exports = Navbar
