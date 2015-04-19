#pragma strict

private var ballCount : int; // ボールの数
private var counter : int; // ゴールに触れているボールのカウンター
private var cleared : boolean; // クリアした
var labelStyle : GUIStyle; // この中にスタイルの設定が保持される

// 開始時の処理
function Start () {
 // ボールの総数を特定する
 ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

// トリガーにゲームオブジェクトが侵入した時の処理
function OnTriggerEnter(other : Collider) {
 // タグからボールを判別し、カウントする
 if (other.gameObject.tag == "Ball") {
  counter++;
  if (cleared == false && counter == ballCount){
   // クリア判定成立
   cleared = true;
   Debug.Log("Cleared!");
  }
 }
}

// トリガーからゲームオブジェクトが退出した時の処理
function OnTriggerExit(other : Collider) {
 // タグからボールを判別し、カウントを減らす
 if (other.gameObject.tag == "Ball") {
  counter --;
 }
}

function OnGUI (){
 if (cleared == true) {
  var sw : int = Screen.width;
  var sh : int = Screen.height;
  GUI.Label(Rect(sw / 6, sh / 3, sw * 2 / 3, sh / 3), "CLEARED!!", labelStyle); // GUILabelを呼び出す
  }
 }