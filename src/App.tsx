import React from 'react';
import logo from './logo.svg';
import './App.css';

type CommentType = {
  username: string;
  userImagePath: string;
  commentText: string;
  likeNum: number;
  replies: CommentType[]
}
const comments: CommentType[] = [
  {
    username: 'Lisa',
    userImagePath: '/profileImages/lisa.jpg',
    commentText: 'จริงค่า',
    likeNum: 999,
    replies: [
      {
        username: 'หมาน้อย',
        userImagePath: '/profileImages/puppy.jpg',
        commentText: 'จริงค้าบบบบบบบบ',
        likeNum: 0,
        replies: []
      },
      {
        username: 'แมวตัวหนึ่ง',
        userImagePath: '/profileImages/popcat.png',
        commentText: 'ลิซ่าาาาาาา',
        likeNum: 2,
        replies: []
      }
    ]
  },
  {
    username: 'Charlie Brown',
    userImagePath: '/profileImages/charliebrown.jpg',
    commentText: 'บ้าไปแล้ว',
    likeNum: 207,
    replies: []
  }
]
function App1() {
  const postscomment = (
    <ul>
      {comments.map((post) =>
      <div>
      <div className="flex space-x-2 items-center">
      <img className="w-12 h-12 rounded-full" src="/profileImages/zen.jpg"></img>
      <span className='font-semibold text-lg text-white'>{post.username}</span>
      </div>

      <p className='text-white'>{post.commentText}</p>

          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>{post.likeNum}</p>
          </div>    
          {post.replies.map((reply) =>
            <div>
              <div className="flex space-x-2 items-center">
      <img className="w-12 h-12 rounded-full" src="/profileImages/zen.jpg"></img>
      <span className='font-semibold text-lg text-white'>{reply.username}</span>
      </div>

      <p className='text-white'>{reply.commentText}</p>

            </div>
          )}
         </div>
      )}
    </ul>
  );
  return (
    postscomment
  );
}

function App() {
  
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/zen.jpg"></img>
            <span className='font-semibold text-lg text-white'>Yanatib Bhoosawang 630612097</span>
          </div>

          {/* status message */}
          <p className='text-white'>quiz ยากจุง #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>100 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">Lisa</p>
              <p className='text-white'>ตัวอย่าง Template จ้า</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>999 คน</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">หมาน้อย</p>
              <p className='text-white'>เม้นค้าบ</p>
            </div>
          </div>

          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/popcat.png"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">แมวตัวหนึ่ง</p>
              <p className='text-white'>ลิซ่าาาาาาา</p>
               {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
               <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>2 คน</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/charliebrown.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">Charlie Brown</p>
              <p className='text-white'>บ้าไปแล้ว</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>207 คน</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;
