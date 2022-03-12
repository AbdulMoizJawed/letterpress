import React from 'react'
import './titlePage.css'
import quotation from '../../Assets/quotation.png'


const TitlePage = () => {
  return (
    <div className='titlePage'>
      <div className='newsTitleContainer'>  
        <h2 className='newsTitle'>News Title Here</h2>
        <div  className='newsDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit., vero error magnam. Dolor explicabo inventore accusamus dolore exercitationem corporis iusto.</div>
        <img src='' alt=''/>
      </div>
      <div className='titlePageContainer2'>
       <img className='quotation' src={quotation} alt=''/>
        <span className='breakThrough'>It's My Break </span><span className='breakThrough'> Through </span>
        <span className='author'> -Hannah Doe, Rookie Actress </span>
      </div>
    </div>
  )
}

export default TitlePage