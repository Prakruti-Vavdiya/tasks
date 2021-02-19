import React from 'react'
import {useDropzone} from 'react-dropzone';

const DropZone=(props)=>{
        const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
        
        const files = acceptedFiles.map(file => (
          <li key={file.path}>
            {file.path}
          </li>
        ));
              
        return (
          <div>
            
            <div {...getRootProps({className: 'dropZone'})}>
              <input {...getInputProps()} onChange={props.change(acceptedFiles)}/>
              <p>Drag some files, or click to select files</p>
            </div>

            <div>
              <h4>Files:</h4>
              <ol>{files}</ol>
            </div>

          </div>
        );
}
export default DropZone;
