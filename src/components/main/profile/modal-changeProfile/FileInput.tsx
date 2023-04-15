import React, { useState } from 'react';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {UserInfoActions} from "../../../../redux/reducers/user-slice";

const FileInputContainer = styled.div`
  position: relative;
width: 100px;
  height: 30px;
  padding: 7px 0;
  text-align: center;
color: ${props => props.theme.colors.primary};
  opacity: 0.9;
  cursor: pointer;
  
  background: ${props=>props.theme.colors.secondary};
  border-radius: 9px;
  font-size: 16px;
  margin-bottom: 5px;
`;

const FileInput = styled.input`
  
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const FileName = styled.span`
  border-radius: 9px;
  margin-left: 8px;
`;

type Props = {
    onChange: (file: File) => void;
    accept: string;
};

const FileInputComponent: React.FC<Props> = ({ onChange, accept }) => {
    const [fileName, setFileName] = useState<string>('');
    const {img} = useAppSelector(state => state.UserInfoReducer.ChangeProfile)
    const {setChangeProfileAvatar} = UserInfoActions
    const dispatch = useAppDispatch()
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (files && files.length > 0) {
            const selectedFile = files[0];
            setFileName(selectedFile.name);
            dispatch(setChangeProfileAvatar(false))
            switch (selectedFile.type){
                case 'image/png':return onChange(selectedFile);
                case 'image/jpeg':return onChange(selectedFile);
                case 'image/jpg':return onChange(selectedFile);
                default:return dispatch(setChangeProfileAvatar(true))
            }

        }
    };

    return (
        <FileInputContainer>
            <FileInput type="file" onChange={handleFileChange} accept={accept} />
            {fileName===''?<span>Choose file</span>:<div></div>}

            <FileName>{fileName}</FileName>
        </FileInputContainer>
    );
};

export default FileInputComponent;