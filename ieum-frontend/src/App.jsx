// src/App.jsx
import React, { useState } from 'react';
import MainPage from './components/MainPage';
import LoadingPage from './components/LoadingPage';
import ResultsPage from './components/ResultsPage'; // 결과 페이지 (미래에 만들 컴포넌트)

function App() {
  const [pageState, setPageState] = useState('main'); // main, loading, results
  const [prompt, setPrompt] = useState('');

  const handlePromptSubmit = (submittedPrompt) => {
    setPrompt(submittedPrompt);
    setPageState('loading'); // 로딩 페이지 보여주기

    // --- MCP 서버에 실제 API 요청 보내기 ---
    // fetch('/api/mcp/match', { method: 'POST', body: JSON.stringify({ prompt: submittedPrompt }) })
    //   .then(res => res.json())
    //   .then(data => {
    //     // 데이터 받으면 결과 페이지로 전환
    //     setPageState('results'); 
    //   })
    //   .catch(err => {
    //     // 에러 처리
    //     setPageState('main'); // 에러 시 메인으로 돌아가기
    //   });

    // 임시로 5초 후에 결과 페이지로 넘어가는 로직
    setTimeout(() => {
      setPageState('results');
    }, 15000);
  };

  if (pageState === 'loading') {
    return <LoadingPage />;
  }
  if (pageState === 'results') {
    return <ResultsPage prompt={prompt} />;
  }
  return <MainPage onSubmit={handlePromptSubmit} />; // MainPage에 onSubmit 함수 전달
}

export default App;