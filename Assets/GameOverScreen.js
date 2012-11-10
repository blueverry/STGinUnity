#pragma strict

var gameOverStyle : GUIStyle;

function Start () {
	yield WaitForSeconds(1.0);
	while(!Input.GetMouseButtonUp (0))
	{
		yield;
	}
	Application.LoadLevel(0);
}

function Update () {
}

function OnGUI () {
	GUI.Label(Rect(0, 0, Screen.width, Screen.height), "GameOver", gameOverStyle);
}