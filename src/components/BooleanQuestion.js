import {Component} from 'react'


class BoolQ extends Component{

  constructor(){
    super()
    this.state = {
      data:"",
      im:0
    }
    this.True = React.createRef()
    this.False = React.createRef()
  }

 componentDidUpdate(prevProps){
   if(this.props.url2.indexOf('amount')!==-1 && this.props.url2 !== prevProps.url2){
     fetch(this.props.url2)
     .then(res=>res.json())
     .then((result)=>{
       this.setState({
         data: result
       })
     })
   }
   // console.log(this.state.data.results.length)
 }

 handleAnswers(correct,len,e){
   // console.log(len)
   // console.log(`correct ${correct}`)
   let em = e.target.value
   let cor = correct

   if(e.target.value == correct.toLowerCase()){
      // alert("Correct answer")
      this.props.status("Correct",len)
      // e.target.disabled="true"
   }
   else {
     this.props.status("Incorrect",len)
     // e.target.disabled="true"
   }
   this.True.current.disabled=true
   this.False.current.disabled=true
 }

  render(){

    let arr=[]
    let no=0;
    if(this.state.data != ""){
      let matter = this.state.data.results

      arr = matter.map((item,index,array)=>{
        no++;
        return <div key={item.question}>
                <h3>Q-{no}&nbsp; {item.question}</h3>
                <h5><button className="resBu" value="true" ref={this.True} onClick={this.handleAnswers.bind(this,item.correct_answer,array.length)}>True</button></h5>
                <h5><button className="resBu" value="false" ref={this.False} onClick={this.handleAnswers.bind(this,item.correct_answer,array.length)}>False</button></h5>
              </div>
      })
    }

    let muldip ;
    let element = (<div>
                    <h3>You choosed Boolean GamePlay. You will be given 2 Option&#39; out of which only 1 will be correct</h3>
                    <h5>True</h5>
                    <h5>False</h5>
               </div>)

    muldip = arr.length===0? element : arr[this.state.im];



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

    return(
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

module.exports = BoolQ
