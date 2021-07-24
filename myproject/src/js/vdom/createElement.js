export default (tagName, { attrs = {}, children = [] }) => {
    const vElement = Object.create(null);


    //オブジェクトをマージ(まとめる)することができる
    Object.assign(vElement, {
        tagName,
        attrs,
        children,
    });

    return vElement;
}
