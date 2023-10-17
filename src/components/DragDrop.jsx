import React from 'react'
import '../css/dragdrop.css'

const DragDrop = () => {
  return (
    <>
    <div className="card">
      <div className="top">
        <p>Drag & Drop image upload</p>
      </div>
      <div className="drag-area">
        <span className='select'>
          Drop images here
        </span>
        Darg & Drop image here or {""}
        <span className='select'>
          Browse
        </span>
        <input type="file" name='file' className='file' multiple></input>
      </div>
      <div className='container'>
        <div className="image">
          <span className='delete'>&times;</span>
        </div>
        <img src="" alt="" />
      </div>
      <button type='button'>
        upload
      </button>
    </div>
    </>
  )
}

export default DragDrop