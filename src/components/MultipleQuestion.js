import {Component} from 'react'


class MultiQ extends Component {
  constructor(props){
    super(props)
    this.state={
      data:"",
      im:0
    }
    this.option1 = React.createRef()
    this.option2 = React.createRef()
    this.option3 = React.createRef()
    this.option4 = React.createRef()
  }
  componentDidUpdate(prevProps){
     if( this.props.url1.indexOf('amount')!==-1 && this.props.url1 !== prevProps.url1){
       fetch(this.props.url1)
       .then(res=>res.json())
       .then((result)=> {this.setState({
         data:result
       })
       // console.log(result)
     })
     }
  }

 handleMultiAnswer(correct,len,e){
  // console.log(`${e.target.value}`)
  if(e.target.value.toLowerCase()== correct.toLowerCase()){
      this.props.status("Correct",len)
  }
  else {
     this.props.status("Incorrect",len)  
  }

  this.option1.current.disabled = true
  this.option2.current.disabled = true
  this.option3.current.disabled = true
  this.option4.current.disabled = true

 }

  render(){
    let arr = [];
    let no=0;
 if(this.state.data !== ""){
   let matter =this.state.data.results;

   arr = matter.map((item,index,array)=>{
     no++;
     function getRandom(){
       return (Math.floor(Math.random()*Math.floor(4)))
     }
     if(item.incorrect_answers.indexOf(item.correct_answer)==-1){
       item.incorrect_answers.splice(getRandom(),0,item.correct_answer)
     }
     // console.log(item)
      return  <div key={item.question}>
                <p ><strong>Q-{no} &nbsp;{item.question}</strong></p>
                <h5><span className="opt">A</span><button ref={this.option1} className="necss" onClick={this.handleMultiAnswer.bind(this,item.correct_answer,array.length)} value={item.incorrect_answers[0]}>{item.incorrect_answers[0]}</button></h5>
                <h5><span className="opt">B</span><button ref={this.option2} className="necss" onClick={this.handleMultiAnswer.bind(this,item.correct_answer,array.length)} value={item.incorrect_answers[1]}>{item.incorrect_answers[1]}</button></h5>
                <h5><span className="opt">C</span><button ref={this.option3} className="necss" onClick={this.handleMultiAnswer.bind(this,item.correct_answer,array.length)} value={item.incorrect_answers[2]}>{item.incorrect_answers[2]}</button></h5>
                <h5><span className="opt">D</span><button ref={this.option4} className="necss" onClick={this.handleMultiAnswer.bind(this,item.correct_answer,array.length)} value={item.incorrect_answers[3]}>{item.incorrect_answers[3]}</button></h5>
              </div>
   })
 }

 let muldip;
 let element = (<div>
 <p><strong>Q-1 &nbsp;&nbsp;You Choosed Multiple Choice GamePlay &#46; You will be given 4 Option&#39;s out of which only 1 will be correct &#46;</strong></p>
 <h5><span className="opt">A</span>Option</h5>
 <h5><span className="opt">B</span>Option</h5>
 <h5><span className="opt">C</span>Option</h5>
 <h5><span className="opt">D</span>Option</h5>
 </div>)

   // muldip = arr.length ===0 ? element : arr;
muldip = arr.length===0 ? element : arr[this.state.im]
   let handleNext=()=>{
        if(this.state.im<arr.length-1){
          this.setState(prevState=>({
            im:prevState.im+=1
          }))
        }
        else {
          this.setState({
            im:0
          })
        }
    // console.log()
   }

   let handlePrevious = ()=>{
     // console.log(im)
        if(this.state.im>0){
          this.setState(prevState=>({
            im:prevState.im-=1
          }))
        }
        else {
          this.setState({
            im:arr.length-1
          })
        }
   }

    return (
      <div>
      <div className="multi">
          {muldip}
      </div>
      <div>
      <button className="next" onClick={handlePrevious}><strong>Previous</strong></button>
      <button className="prev" onClick={handleNext}><strong>Next</strong></button>
      </div>
      </div>
    )
  }
}

module.exports = MultiQ
