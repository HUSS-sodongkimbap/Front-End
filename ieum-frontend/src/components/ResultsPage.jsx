// src/components/ResultsPage.jsx
import React from 'react';

// 나중에 진짜 결과 화면으로 채워질 임시 컴포넌트입니다.
function ResultsPage({ prompt }) {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>분석 결과</h1>
            <p>다음은 "{prompt}"에 대한 분석 결과입니다.</p>
            <p>(여기에 실제 결과 UI가 들어올 예정입니다.)</p>
        </div>
    );
}

export default ResultsPage;