#pragma strict

var labelStyle : GUIStyle;

function Update () {
 if (Input.GetButtonDown("Jump")) { // ジョイスティックのボタン（スペースキー）の押下を検出する
  Application.LoadLevel("Scene_Meiro_1"); // スペースキーを検知したら次のシーンをロードする
  }
}

function OnGUI () {
 var sw = Screen.width;
 var sh = Screen.height;
 GUI.Label (Rect(0, sh /4, sw, sh / 4), "BALL MAZE", labelStyle);
 GUI.Label (Rect(0, sh /2, sw, sh / 4), "Hit Space Key", labelStyle);
 }