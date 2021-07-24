import React, { useState, useCallback } from "react";
import "./App.css"
const data = [
    {
        id: 1,
        name: "リオネル・メッシ",
        team: "FCバルセロナ",
        desription:
            "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
        isFollow: false,
    },
    {
        id: 2,
        name: "クリスティアーノ・ロナウド",
        team: "juventus",
        desription:
            "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
        isFollow: true,
    },
    {
        id: 3,
        name: "ネイマール",
        team: "バリサンジェルマン",
        desription:
            "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
        isFollow: false,
    },
]

const App = () => {
    const [accounts, setAccounts] = useState(data);


    //e ==eventオブジェクト
    const onClickFollow = useCallback((id) => {
        //アカウントのidを受けとるようにして渡されたidがaccontsの中に存在していれば、
        //isFollowを入れ替えて、新しい配列に入れる
        const updatedAccounts = accounts.map((e) => {
            if (e.id === id) {
                return {
                    ...e,
                    isFollow: !e.isFollow,
                };
            } else {
                return e;
            }
        });
        //setAccountsメソッドにupdatedAccountsを渡して、accountsを更新する
        setAccounts(updatedAccounts);
    },
        [accounts, setAccounts]//usecallbackを使い、[accounts,setAccounts]に変更があった場合のみ描画が更新される
    );

    return (
        <ul className="accountList">
            {accounts.map((e) => {
                return (
                    <li key={e.id} className="accountList_item">
                        <div>
                            <div className="account__summary">
                                <div>
                                    <p className="account__name">{e.name}</p>
                                    <p className="account__team ">{e.team}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className={`followBtn ${e.isFollow ? "isFollow" : ""}`}
                                        onClick={() => onClickFollow(e.id)}
                                    >
                                        {e.isFollow ? "フォロー中" : "フォローする"}
                                    </button>
                                </div>
                            </div>
                            <p className="account__description">{e.desription}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default App;