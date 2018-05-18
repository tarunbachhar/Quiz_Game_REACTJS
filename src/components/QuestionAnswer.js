import {Component} from 'react'
import {hot} from 'react-hot-loader'
import Navbar from './Navbar'
import QuestionFilter  from './QuestionFilter'

let cc=0;

class QuestionAnswer extends Component {
  constructor(){
    super()
    this.state={
      noOfQ:"",
      category:"",
      difficulty:"",
      type:"",
      url:"",
      data:"",
      status:"",
      len:"",
      correct:""
    }
  }
  handleNumberOfQ(v){
    this.setState({
      noOfQ:v
    })
  }
  handleCategory(v){
    this.setState({category:v})
  }
  handleDiffSel(v){
    this.setState({
      difficulty:v
    })
  }
  handleSelectType(v){
    this.setState({
      type:v
    })
  }
  // componentDidMount(){
  //
  // }
  // handleData(){
  //   let url = this.state.url
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then((result)=>
  //     this.setState({
  //       data:result
  //     })
  //   )
  //   console.log(this.state.url)
  // }
  handleFetUrl(){

    let amount = this.state.noOfQ;
    let category= this.state.category;
    let difficulty =this.state.difficulty;
    let type = this.state.type;
    // if(this.state.noOfQ && this.state.noOfQ !== 'undefined'){
    // amount= `amount=${this.state.noOfQ}`
    // }
    let am = (amount !=="" && amount !== null) ? `amount=${amount}`: null;
    let cat = (category !=="" && category !==null)? `category=${category}`:null;
    let diff= (difficulty !=="" && difficulty !==null)? `difficulty=${difficulty}` : null;
    let ty = (type !=="" && type !==null)? `type=${type}`: null;
    let url = `https://opentdb.com/api.php?${am}&${cat}&${diff}&${ty}`

  //   fetch(url)
  //   .then(res=>res.json())
  //   .then((result)=>
  //   {this.setState({
  //     data:result
  //   })
  // })
  this.setState({
    url:url
  })


    // this.handleData()
    // console.log(this.state.data)
  }

  handleReseto(){
    this.setState({
      noOfQ:"",
      category:"",
      difficulty:"",
      type:"",
      url:"",
      data:"",
      status:"",
      len:"",
      correct:""
    })
    console.log('reseto')
  }

  handleStatus(val,len){


    if(val=="Correct"){
      cc+=1;
    }

    this.setState({
      status:val,
      length:len,
      correct:cc
    })
  }

  render(){
    let incorrect = this.state.length - this.state.correct
    return(
      <div>
        <h1>Quiz&#39;s Games</h1>
        <Navbar
        handleNumQ={this.handleNumberOfQ.bind(this)}
        noOfQuestion={this.state.noOfQ}
        catValNav={this.state.category}
        handlecatValue={this.handleCategory.bind(this)}
        diff={this.state.difficulty}
        handleDifficulty={this.handleDiffSel.bind(this)}
        anyType = {this.state.type}
        handleTypeSelection={this.handleSelectType.bind(this)}
        handleFetching={this.handleFetUrl.bind(this)}
        handleRes={this.handleReseto.bind(this)}

        />

        <QuestionFilter
        seltype={this.state.type}
        url={this.state.url}
        statusQue={this.handleStatus.bind(this)}
        statu={this.state.status}
        length={this.state.length}
        correct={this.state.correct}
        incorrect={incorrect}
        />
      </div>
    )
  }
}

module.exports = hot(module)(QuestionAnswer)
