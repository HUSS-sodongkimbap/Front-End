// src/components/LoadingPage.jsx
import React from 'react';
import AnimatedText from './AnimatedText';
import AnimatedMap from './AnimatedMap';
import './LoadingPage.css'; // 스타일 파일
import logo from '../assets/ieum_logo.svg';

function LoadingPage() {
    return (
        <div className="loading-container">
            <header className="header">
                <img src={logo} alt="ieum logo" className="logo" />
                <nav className="nav-links">
                    <a href="#">서비스 소개</a>
                    <a href="#">언어</a>
                    <a href="#">도움말</a>
                </nav>
            </header>
            <main className="loading-content">
                <div className="text-area">
                    <AnimatedText />
                </div>
                <div className="map-area">
                    <AnimatedMap />
                </div>
            </main>
        </div>
    );
}

export default LoadingPage;