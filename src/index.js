import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値wお取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    // TODO内容を取得
    const text = addTarget.firstElementChild.innerText;
    // li配下を初期化
    addTarget.textContent = null;
    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;
    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    // liタグの下に各要素を格納
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    // 完了リストについて
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  };

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
