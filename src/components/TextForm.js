import React,{useState} from "react";

export default function TextForm(props) {
  const titlecase=(string)=>{
    return string
    .toLowerCase().split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    
  }
  const sentencecase=(string)=>{
    return string
    .toLowerCase().split(/(?<=[.!?])\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  }
  const handelclickedforupercase=()=>{
   let newtext = text.toUpperCase()
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else
    {props.showalert('Converted to UpperCase Successfully!', 'success')}
    }
  const handelclickedforlowercase=()=>{
   let newtext = text.toLowerCase()
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else
    {props.showalert('Converted to LowerCase Successfully!', 'success')}
    }
  const handelclickedforcleartext=()=>{
   let newtext = ''
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else
    {props.showalert('Text Cleared!', 'success')}
    }
  const handelclickedfortitlecase=()=>{
   let newtext = titlecase(text)
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else
    {props.showalert('Converted to TitleCase Successfully!', 'success')}
    }
  const handelclickedforsentencecase=()=>{
   let newtext = sentencecase(text)
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else
    {props.showalert('Converted to sentenceCase Successfully!', 'success')}
    }
  const handelclickedforremovewhitespace=()=>{
    let newtext = text.replace(/\s+/g, ' ').trim();
    settext(newtext)
    if(text==='')
    {props.showalert('Oops! You have not typed anything yet.', 'danger')}
    else{
      props.showalert('White spaces Removed Successfully!', 'success')
    }
    }
  const handelchanged=(event)=>{
     settext(event.target.value);
  }
   const[text,settext] = useState('')

  return (
    < >
    <div className="primbox" style={{backgroundColor : props.mode==='dark'? 'rgb(30, 30, 30)': '#c5bfbf'  ,color : props.mode==='dark'? 'white': 'rgb(30, 30, 30)',}}>
    <div className="container1 my-3">
       <h1 className="text-center">{props.heading}</h1>
        <textarea className="form-control textarea "id="textbox"rows="10"style={{backgroundColor : props.mode==='dark'? 'rgb(30, 30, 30)': 'White',color : props.mode==='dark'? 'white': 'rgb(30, 30, 30)'}} placeholder="Enter Text Here" value={text} onChange={handelchanged} />
        <button className="btn btn-primary my-3 mx-1 " onClick={handelclickedforupercase} >Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-1  " onClick={handelclickedforlowercase} >Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-1  " onClick={handelclickedfortitlecase} >Title Case</button>
        <button className="btn btn-primary my-3 mx-1  " onClick={handelclickedforsentencecase} >Sentence Case</button>
        <button className="btn btn-primary my-3 mx-1  " onClick={handelclickedforremovewhitespace} >Remove WhiteSpaces</button> <br/>
        <button className="btn btn-primary my-3 mx-1  " onClick={() =>  {if(text==='')
        {props.showalert('Oops! You have not typed anything yet.', 'danger')}
         else{
         props.showalert('Text Copied to Clipboard Successfully!', 'success')
        navigator.clipboard.writeText(text)} }  }>Copy Text</button>
        <button className="btn btn-primary my-3 mx-1  " onClick={handelclickedforcleartext} >Clear Text</button>
         </div>
    <div className="container2">
      <h1>Text Summary</h1>
      <p> <b>{text.trim().split(/\s+/).filter(Boolean).length}</b> Words and <b>{text.length}</b> Character </p>
      <p>{text.split(/[.!?]/).filter(Boolean).length} sentences</p>
      <h2>Minutes required to read</h2>
      <p>{0.008*text.split(' ').length} Minutes</p>
      <h2>Text preview</h2>
      <p>{text<1? 'Enter Some Text in Box to Preview': text }</p>
    </div>
    </div>
    </>
  );
}
