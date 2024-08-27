import React from 'react';

// import { useState } from 'react';

export interface TagsInputProps {
  className: string;
  tags: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({className, tags, onChange}) =>
  (
    <div className={`tags-input ${className}`}>
      <label>
        <textarea name={'tags'} placeholder="Коротко о себе в виде 5-8 хештэгов" onChange={onChange} value={tags}/>
        <span className="tags-input__label">ТЭГИ</span>
      </label>
    </div>
  );

export default TagsInput;
