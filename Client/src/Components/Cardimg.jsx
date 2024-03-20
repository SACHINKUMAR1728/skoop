import React from 'react'

const Cardtxt = (props) => {
    return (
      <div class="tweet-container1">
          <div class="summary1">
              <h2 className='text-xl	'>
                {props.Title}
              </h2>
          </div>
          <div class="tweet-header1">
              <div class="user-info1">
                  By:
                  <span class="user-name"> {props.Name}</span>
              </div>
          </div>
          <div class="tweet-text1">
              {props.Sub}
          </div>
          
          
      </div>
    )
  }

const Cardimg = (props) => {
  return (
    <div class="tweet-container">
        <div class="summary">
            <h2 className='text-xl'>
                {props.Title}
            </h2>
        </div>
        <div class="tweet-header">
            <div class="user-info">
                <div class="user-name">By: {props.Name}</div>
            </div>
        </div>
        
        <div class="tweet-image">
            <img src={props.Url} alt="Tweet Image"/>
        </div>
        <div class="tweet-text">
           {props.Sub}
        </div>
        
    </div>
  )
}

export {Cardimg, Cardtxt}