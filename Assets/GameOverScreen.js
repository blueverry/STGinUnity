#pragma strict

var gameOverStyle : GUIStyle;
private var isReady = false;

function Start ()
{
	yield WaitForSeconds(1.0);
	isReady = true;
	yield WaitForSeconds(1.0);
	while(!Input.GetMouseButtonUp (0))
	{
		yield;
	}
	Application.LoadLevel(0);
}

function Update () {
}

function OnGUI ()
{
	if (isReady)
	{
		var finalScore = FindObjectOfType(ScoreControl).score;
		GUI.Label(Rect(0, 0, Screen.width, Screen.height), "GameOver\n\nYour Score :\n"+ finalScore, gameOverStyle);
	}
}