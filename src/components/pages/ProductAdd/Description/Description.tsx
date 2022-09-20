import React, {FC} from 'react'
import ReactQuill from 'react-quill'

interface DescriptionProps {
    description: string
    setDescription: (desc: string) => void;
}

const Description: FC<DescriptionProps> = ({ description, setDescription}) => {
    return (
        <div className='mt-5'>
            <div className='mb-2'>Описание</div>
            <ReactQuill theme="snow" value={description} onChange={setDescription} />
        </div>
    )
}

export default Description