#pragma strict
var enemySpeed = 0.05;
var enemyBulletPrefab : GameObject;
var bulletTime = 0.1;
var enemyLife = 30;

function Start ()
{
	while(true)
	{
		Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(10, Vector3(0, 1, 0)));
		Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(-10, Vector3(0, 1, 0)));
		yield WaitForSeconds(bulletTime);
	}
	
	
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