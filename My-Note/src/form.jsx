import React from 'react'

const form = () => {
  return (
    <>
        <div className="main">
            <div className="inner">
                <div className="inn-left">
                    <form>
                        <input type='text' placeholder='Enter Title'/>
                        <textarea placeholder='Enter Your Note'/>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default form