import React from 'react';

import '../components/homepage.scss';

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
                    私はウェブアプリを作り、主にVueとReactを使って開発しています。フルスタックのトレーニングを受けており、Python、Ruby、SQLの経験もあります。
                </p>
                <p>
                    ミシガン州アナーバーに住んでいます。ウェブサイトを作っていないときは、新しいことを学んだり、料理を楽しんだりしています。
                </p>
            </div>
        </div>
    );

}