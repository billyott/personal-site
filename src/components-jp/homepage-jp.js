import React from 'react';

import './homepage-jp.scss';

export default function HomepageJP() {

    return (
        <div className="homepage">
            <div className="homepage__header">
                こんにちは、ビルです。
            </div>
            <div className="homepage__sub-header">
                フロント エンド ウェブ 開発者です。
            </div>
            <div className="homepage__tagline">
                <p>
                    仕事ではVueやReactなどのフレームワークを使ってウェブサイトを構築していますが、フルスタックのトレーニングを受けて、python、ruby、sqlも経験しています。2018年からコードを書き始め、2020年にフルタイムのキャリアにしました。
                </p>
                <p>
                    ニューヨーク在住で、趣味は料理、旅行、ゲーム、日本語の勉強です。
                </p>
            </div>
        </div>
    );

}