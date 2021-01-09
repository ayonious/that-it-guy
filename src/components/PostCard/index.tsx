import Image from "gatsby-image";
import React, { useContext } from "react";

import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import StyledButton from "../StyledButton";
import TagsList from "../TagsList";
import {
  CardArticleWrapper,
  CardImageWrapper,
  InfoDivWrapper,
  FlexRowWrapper,
  InfoDateWrapper,
  InfoHeadlineWrapper,
  InfoExcerptWrapper,
  ButtonWrapper,
  MiniCardImageWrapper,
  HeadlineAndDateWrapper,
} from "./styles";

export interface PostCardData {
  post: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
      tags: string[];
      image: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
    excerpt: string;
  };
  key: number;
}

const PostCard = (props: PostCardData) => {
  const {
    post: {
      frontmatter: {
        title,
        date,
        slug,
        tags,
        image: {
          childImageSharp: { fluid: img },
        },
      },
      excerpt,
    },
  } = props;

  const {
    state: { theme },
  } = useContext(ThemeContext);

  return (
    <CardArticleWrapper theme={theme}>
      <CardImageWrapper>
        <Image fluid={img} />
      </CardImageWrapper>
      <InfoDivWrapper theme={theme}>
        <FlexRowWrapper>
          <MiniCardImageWrapper>
            <Image fluid={img} />
          </MiniCardImageWrapper>
          <HeadlineAndDateWrapper>
            <InfoHeadlineWrapper>{title}</InfoHeadlineWrapper>
            <InfoDateWrapper>{date}</InfoDateWrapper>
          </HeadlineAndDateWrapper>
        </FlexRowWrapper>
        <TagsList tags={tags} />
        <InfoExcerptWrapper>{excerpt}</InfoExcerptWrapper>
        <ButtonWrapper>
          <StyledButton
            to={`blogs/${slug}`}
            theme={theme}
            title={"Read More..."}
          />
        </ButtonWrapper>
      </InfoDivWrapper>
    </CardArticleWrapper>
  );
};

export default PostCard;
