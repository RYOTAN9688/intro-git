//再帰的に仮想DOMに対して処理を行っている
import { isEventAttr } from "./utils";

const setAttrs = (target, attrs) => {
    for (const attr in attrs) {
        //isEvents関数を使いeventかどうかを判定
        if (isEventAttr(attr)) {
            target.addEventListener(attr.slice(2), attrs[attr]);
        } else {
            target.setAttribute(attr, attrs[attr]);
        }
    }
}



//渡された要素のtagNameをもとにリアルDOM要素を作成
//tagNameはpなのでリアルDOMでは<P></P>となる
function renderElement({ tagName, attrs, children }) {


    //$elにclassやId,typeなどの属性を付与
    //これによって<p class="hoge"></p>となる
    const $el = document.createElement(tagName);

    setAttrs($el, attrs);

    //appendchildする要素はrender関数にchildを渡している
    //条件が終わるまで関数を行ったり来たりしながら処理を行う
    //ことを再帰処理という
    for (const child of children) {
        $el.appendChild(render(child))
    }


    return $el;
}

export function render(vNode) {
    //渡された要素が文字列かどうか判定
    if (typeof vNode === "string") {
        return document.createTextNode(vNode);
    }
    //文字列でなければrenderElement関数が呼ばれる
    return renderElement(vNode);
}


