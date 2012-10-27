#pragma strict
var enemyPrefab : GameObject;
var enemyTime = 1.0;

function Start () {
	while(true)
	{
		var appearancePositionRandom = Random.Range(0, 3);
		if (appearancePositionRandom == 0)
		{
			Instantiate(enemyPrefab, transform.position + Vector3(5 ,0 ,0), transform.rotation);
		}
		else if (appearancePositionRandom == 1)
		{
			Instantiate(enemyPrefab, transform.position, transform.rotation);
		}
		else if (appearancePositionRandom == 2)
		{
			Instantiate(enemyPrefab, transform.position + Vector3(-5 ,0 ,0), transform.rotation);
		}
		yield WaitForSeconds(enemyTime);
	}
}

function Update () {

}