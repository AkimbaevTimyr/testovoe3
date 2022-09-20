import React, { FC, useRef, useState, useEffect } from 'react'

interface FileUploaderProps {
  setImages: (obj: any)=> void;
  handleDelete: (image: string) => void;
  images: any;
}

const imageTypeRegex = /image\/(png|jpg|jpeg)/i;


const FileUploader: FC<FileUploaderProps> = ({ setImages, images, handleDelete }) => {
  const [imageFiles, setImageFiles] = useState([]);

  const changeHandler = (e: any) => {
    const { files } = e.target;
    const validImageFiles: any = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  }
  useEffect(() => {
    const images: any = [], fileReaders: any = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const r: any = e.target;
          const {result} = r;
          if (result) {
            images.push(result)
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        }
        fileReader.readAsDataURL(file);
      })
    };
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader: any) => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [imageFiles]);

  
  return (
    <>
      <form>
        <p>
          <label htmlFor="file">Upload images</label>
          <input
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg"
            multiple
          />
        </p>
      </form>
      {
        images.length > 0 ?
          <div className='flex mt-5'>
            {
              images.map((image: any, idx: number) => {
                return <p className="mr-1" key={idx}> <img className="w-42 h-32" src={image} alt="" /> <button onClick={()=> handleDelete(image)}>удалить</button></p>
              })
            }
          </div> : null
      }
    </>
  )
}

export default FileUploader