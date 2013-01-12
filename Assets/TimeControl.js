#pragma strict
var time = 120.0;

function OnGUI () {
	GUI.Label(Rect(0, 20, 500, 500), "Time : "+time);
}

function Start () {

}

function Update () {
	time -= Time.deltaTime;
	
	if (time <= 0.0)
	{
		Destroy(GameObject.Find("MyShip"));
		FindObjectOfType(GameOverScreen).enabled = true;
		enabled = false;
	}
}