#pragma strict
var enemyPrefab : GameObject;
var enemyTime = 1.0;
var enemyType : String[];

private function EnemyAppear (appearancePosition : Vector3, letter : String, enemySpeed : float, enemyLife : int, 
							  enemyColor : String, enemyScale : float, score : int)
{

	for (var c in letter)
	{
		var enemy = Instantiate(enemyPrefab, appearancePosition, transform.rotation);
		appearancePosition += Vector3(0, 0, 1.5 * enemyScale);
		enemy.GetComponentInChildren(TextMesh).text = "<color="+enemyColor+">" + c + "</color>";
		enemy.GetComponent(EnemyControl).enemyLife = enemyLife;
		enemy.GetComponent(EnemyControl).enemySpeed = enemySpeed;
		enemy.transform.localScale = enemyScale * Vector3(1, 1, 1);
		enemyLife = Mathf.Max(enemyLife - 5, 5);
		enemy.GetComponent(EnemyControl).score = score;
	}
}

function Start () {
	while(true)
	{
		var randomValue = Random.value;
		
		if (randomValue <= 0.5)
		{
			var appearancePositionRandomX = Random.Range(-7.0, 7.0);
			EnemyAppear( transform.position + Vector3(appearancePositionRandomX ,0 ,0),
						 enemyType[Random.Range(0, enemyType.Length)], Random.Range(5 ,10)*0.01, 30, "white", 1, 100);
		}
		else if (randomValue > 0.5 && randomValue <= 0.8)
		{
			var offset = Random.Range(-2.0, 2.0);
			var space = Random.Range(2.0, 4.0);
			for (var i= 0; i < 7; i++)
			{
				appearancePositionRandomX = Random.Range(-7.0, -6.0);
				EnemyAppear( transform.position + Vector3(i * space - 7.0 + offset,0 ,i),
							 "―＝十", 0.2, 15, "#80ff80", 1, 50);
			}
		}
		else
		{
			appearancePositionRandomX = Random.Range(-7.0, 7.0);
			EnemyAppear( transform.position + Vector3(appearancePositionRandomX ,0 ,0),
						 enemyType[Random.Range(0, enemyType.Length)], 0.03, 50, "red", 2, 300);
		
		}
		yield WaitForSeconds(enemyTime);
	}
}

function Update () {

}