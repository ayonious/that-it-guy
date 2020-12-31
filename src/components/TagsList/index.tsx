import React, { useContext } from "react";

import { Context } from "../../Context/ThemeContext";
import { TagDivWrapper, TagsDivWrapper } from "./styles";

interface TagData {
  tags: string[];
  addFilter: any;
}

const TagsList = (props: TagData) => {
  const { tags, addFilter } = props;
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <TagsDivWrapper>
      {tags.map((tag, index) => (
        <TagDivWrapper key={index} theme={theme} onClick={() => addFilter(tag)}>
          #{tag}
        </TagDivWrapper>
      ))}
    </TagsDivWrapper>
  );
};

export default TagsList;
