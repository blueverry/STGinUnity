#pragma strict
var enemySpeed = 0.05;
var enemyBulletPrefab : GameObject;
var bulletTime = 0.1;
var enemyLife = 30;
var score : int;

function Start ()
{
	while(true)
	{
		yield WaitForSeconds(bulletTime);
	}
	
	yield WaitForSeconds(12.0);
	Destroy(gameObject);
}

function Update ()
{
	transform.position += transform.forward * enemySpeed;
}

function OnTriggerEnter (other : Collider)
{
	Debug.Log("HIT");

	if(other.gameObject.tag == "PlayerBullet")
	{
		var scoreReference = GameObject.Find("Score");
		Destroy(other.gameObject);
		scoreReference.GetComponent(ScoreControl).score += score / 10; 
		enemyLife -= 1;
	}
	
	if(enemyLife <= 0)
	{
		scoreReference = GameObject.Find("Score");
		scoreReference.GetComponent(ScoreControl).score += score; 
		Destroy(gameObject);
	}
}