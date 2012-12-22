#pragma strict
var time = 120;
var flame = 0;

function OnGUI () {
	GUI.Label(Rect(0, 20, 500, 500), "Time : "+time);
}

function Start () {

}

function Update () {
	flame++;
	
	if (flame >= 60)
	{
		time -= 1;
		flame = 0;
	}
}