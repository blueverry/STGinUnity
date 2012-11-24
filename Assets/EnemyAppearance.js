#pragma strict
var enemyPrefab : GameObject;
var enemyTime = 1.0;
var enemyType : String[];

private function EnemyAppear (appearancePosition : Vector3, letter : String)
{
	var enemyLife = 30;

	for (var c in letter)
	{
		var enemy = Instantiate(enemyPrefab, appearancePosition, transform.rotation);
		appearancePosition += Vector3(0, 0, 1.5);
		enemy.GetComponentInChildren(TextMesh).text = "" + c;
		enemy.GetComponent(EnemyControl).enemyLife = enemyLife;
		enemyLife = Mathf.Max(enemyLife - 5, 5);
	}
}

function Start () {
	while(true)
	{
		var appearancePositionRandomZ = Random.Range(-7.0, 7.0);
		EnemyAppear( transform.position + Vector3(appearancePositionRandomZ ,0 ,0),
					 enemyType[Random.Range(0, enemyType.Length)]);
		yield WaitForSeconds(enemyTime);
	}
}

function Update () {

}