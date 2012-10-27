#pragma strict
var enemyPrefab : GameObject;
var enemyTime = 1.0;

function Start () {
	while(true)
	{
		Instantiate(enemyPrefab, transform.position, transform.rotation);
		yield WaitForSeconds(enemyTime);
	}
}

function Update () {

}