#pragma strict
var enemySpeed = 0.05;
var enemyBulletPrefab : GameObject;
var bulletTime = 0.1;
var enemyLife = 30;
// var enemyType = { A, B, C };

function Start ()
{
	while(true)
	{
		// if (enemyType == A)
		// {
		// Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(10, Vector3(0, 1, 0)));
		// Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(-10, Vector3(0, 1, 0)));
		yield WaitForSeconds(bulletTime);
		// }
		// if else (enemyType == B)
		// {
		//		Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(10, Vector3(0, 1, 0)));
		//		Instantiate(enemyBulletPrefab, transform.position, transform.rotation * Quaternion.AngleAxis(-10, Vector3(0, 1, 0)));
		//		
		//		yield WaitForSeconds(bulletTime);
		// }
	}
	
	yield WaitForSeconds(12.0);
	Destroy(gameObject);
}

function Update ()
{
	// if (enemyType == A)
	// {
	transform.position += transform.forward * enemySpeed;
	// }
	// else if (enemyType == B)
	// {
	// 		transform.position += transform.forward * enemySpeed;
	//		transform.rotation += 0.02f;
	// }
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