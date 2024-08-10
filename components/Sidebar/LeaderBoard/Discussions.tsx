'use client'
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

interface Comment {
  id: number;
  text: string;
  votes: number;
  comments: string[];
  userVote: number; // 1 for upvote, -1 for downvote, 0 for no vote
}

const Discussions = () => {
  const [discussions, setDiscussions] = useState<Comment[]>([]);
  const [newDiscussion, setNewDiscussion] = useState<string>('');

  // Load discussions from local storage on component mount
  useEffect(() => {
    const savedDiscussions = localStorage.getItem('discussions');
    if (savedDiscussions) {
      setDiscussions(JSON.parse(savedDiscussions));
    }
  }, []);

  // Save discussions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('discussions', JSON.stringify(discussions));
  }, [discussions]);

  const addDiscussion = () => {
    if (newDiscussion.trim() !== '') {
      const newComment: Comment = {
        id: Date.now(), // Use a unique identifier
        text: newDiscussion,
        votes: 0,
        comments: [],
        userVote: 0,
      };
      setDiscussions([newComment, ...discussions]);
      setNewDiscussion('');
    }
  };

  const voteDiscussion = (id: number, type: 'up' | 'down') => {
    setDiscussions(discussions.map(discussion => {
      if (discussion.id === id) {
        let newVoteCount = discussion.votes;
        let newUserVote = discussion.userVote;

        if (type === 'up') {
          if (discussion.userVote === 1) {
            newVoteCount -= 1;
            newUserVote = 0;
          } else if (discussion.userVote === 0) {
            newVoteCount += 1;
            newUserVote = 1;
          } else if (discussion.userVote === -1) {
            newVoteCount += 2;
            newUserVote = 1;
          }
        } else if (type === 'down') {
          if (discussion.userVote === -1) {
            newVoteCount += 1;
            newUserVote = 0;
          } else if (discussion.userVote === 0) {
            newVoteCount -= 1;
            newUserVote = -1;
          } else if (discussion.userVote === 1) {
            newVoteCount -= 2;
            newUserVote = -1;
          }
        }

        return {
          ...discussion,
          votes: newVoteCount,
          userVote: newUserVote,
        };
      }
      return discussion;
    }));
  };

  const addComment = (id: number, comment: string) => {
    setDiscussions(discussions.map(discussion => {
      if (discussion.id === id) {
        return {
          ...discussion,
          comments: [...discussion.comments, comment],
        };
      }
      return discussion;
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-8 border-[#44403C] border-x-[1.5px] border-b-[3px] border-t-[1px]">
      <h2 className="text-xl text-[#44403C] font-bold mb-4">Discussions</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e.target.value)}
          placeholder="Start a new discussion..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
        />
        <Button onClick={addDiscussion} 
        className="bg-[#14B8A5] border-[#44403C] text-white border-x-[1.5px] border-b-[3px] border-t-[1px] px-4 py-2 rounded-lg">
          Post Discussion
        </Button>
      </div>
      <ul>
        {discussions.map((discussion) => (
          <li key={discussion.id} className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <p>{discussion.text}</p>
              <div className="flex items-center">
                <button
                  onClick={() => voteDiscussion(discussion.id, 'up')}
                  className={`mr-2 ${discussion.userVote === 1 ? 'text-primary' : ''}`}
                >
                  👍
                </button>
                <span>{discussion.votes}</span>
                <button
                  onClick={() => voteDiscussion(discussion.id, 'down')}
                  className={`ml-2 ${discussion.userVote === -1 ? 'text-primary' : ''}`}
                >
                  👎
                </button>
              </div>
            </div>
            <div className="ml-4">
              {discussion.comments.map((comment, index) => (
                <p key={index} className="text-sm text-secondary mt-1">{comment}</p>
              ))}
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                  addComment(discussion.id, e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussions;


