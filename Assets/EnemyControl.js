#pragma strict
var enemySpeed = 0.05;
var enemyBulletPrefab : GameObject;
var bulletTime = 0.1;
var enemyLife = 30;

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
		Destroy(other.gameObject);
		enemyLife -= 1;
	}
	
	if(enemyLife <= 0)
	{
		Destroy(gameObject);
	}
}