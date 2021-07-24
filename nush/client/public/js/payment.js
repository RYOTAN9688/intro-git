//クレジットカード情報を安全に収集してstripeに登録する


//stripeでは公開鍵と秘密鍵による暗号化を行うことで情報を保護している
//Stripeクラスのコンストラクタには公開鍵を含めている
const stripe = Stripe("pk_test_xxx");
//elementクラスのインスタンスを返す
let elements = stripe.elements();

//注文情報。サーバーはこのjsonを受けとって処理を行う。
let order = {
    items: [
        {
            name: "scrab",
            amount: 2000,
            quantity: 2
        },
        {
            name: "soap",
            amount: 1500,
            quantity: 1
        }
    ],
    currency: "jpy",
    paymentMethhodId: null
}
//カード番号入力のスタイルを決める
let style = {
    base: {
        color: "32325d"
    }
};
//カードのスタイルをstripeに追加する
const card = elements.create("card", { style: style });
//stripe情報をcard-elementに上げる
card.mount("#card-element")

card.on("change", ({ error }) => {
    const displayError = document.getElementById("card=errors");
    //エラーの存在を判定する
    if (error) {
        //カード番号が無効と表示する
        displayError.textContent = error.message;
    } else {
        displayError.textContent = "";
    }
});

//注文確定ボタンのDOMを取得
const submitButton = document.getElementById("payment-form-submit");

//ボタンがクリックされるとアクションを実行
submitButton.addEventListener("click", (event) => {
})
