import Image from 'next/image';
import React from 'react';

const IssueItem = ({ issue }) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4 m-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-black truncate">
            <a href={issue.html_url} target="_blank">{issue.title}</a>
          </h4>
          <div className="flex items-center text-sm text-gray-500">
            #<b>{issue.number}</b> opened on {new Date(issue.created_at).toLocaleDateString()} by {issue.user.login}
          </div>
          <div className="flex mt-2">
            {issue.labels.map(label => (
              <span key={label.id} className={`mr-2 px-2 py-1 rounded-full text-xs font-semibold text-white`} style={{ backgroundColor: `#${label.color}` }}>
                {label.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href={issue.comments_url} target='_blank' className="flex items-center text-gray-400 hover:text-gray-600">
            <Image
                src={"/assets/chat.png"}
                width={20}
                height={20}
                alt="comment"
            />
            <span className="ml-2 text-black">{issue.comments}</span>
          </a>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        {issue.body.length > 300 ? issue.body.substring(0, 300) + '...' : issue.body}
      </div>
    </div>
  );
};

export default IssueItem;
