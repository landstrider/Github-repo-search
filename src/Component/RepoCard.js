import React from 'react';
import Pills from 'Component/Pills';
import { RepoCardContainer, Card, CardContent, Avatar, RepoName, PillsContainer, RepoDescription, ViewRepoButton } from 'Component/styles';

function RepoCard(props) {
  const {
    name,
    description,
    forks,
    open_issues,
    owner__avatar_url,
    html_url,
    stargazers_count
  } = props.cardConfig;

  const pillConfig = [{
    name: 'Stars',
    count: stargazers_count,
  }, {
    name: 'Fork',
    count: forks,
  }, {
    name: 'Open Issues',
    count: open_issues,
  }]

  return (
    <RepoCardContainer>
    <Card>
      <CardContent>
        <Avatar>
          <img src={owner__avatar_url} />
        </Avatar>
        <RepoName>{name}</RepoName>
        <PillsContainer>
          {pillConfig.map(function(each) {
            return (
              <Pills pillConfig={each} key={each.name} />
            )})}
          </PillsContainer>
          <RepoDescription>{description}</RepoDescription>
        </CardContent>
        <ViewRepoButton href={html_url}><span>view profile</span></ViewRepoButton>
      </Card>
    </RepoCardContainer>
  );
}

export default RepoCard;
