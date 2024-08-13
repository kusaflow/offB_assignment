"use client"

import React, { useState, useEffect } from 'react';
import IssueItem from './issue_item';
import InfiniteScroll from 'react-infinite-scroll-component';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const hasMore = true;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await fetch(`https://api.github.com/repos/facebook/react/issues`);
      const data = await response.json();
      setIssues(prev => [...prev, ...data]);
    };

    fetchIssues();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={issues.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Please wait, Loading...</h4>}
      className="space-y-8"
    >
      {issues.map(issue => (
        <IssueItem key={issue.id * Math.floor(Math.random() * 1000)} issue={issue} />
      ))}
    </InfiniteScroll>
  );
};

export default IssuesList;
