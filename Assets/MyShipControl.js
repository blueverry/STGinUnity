#pragma strict
var mySpeed = 0.1;					// 自機速度
var myBulletPrefab : GameObject;
var bulletTime = 0.1;

function Start ()
{
	while(true)
	{
		Instantiate(myBulletPrefab, transform.position, transform.rotation);
		yield WaitForSeconds(bulletTime);
	}
}

function Update ()
{
	transform.position.x += Input.GetAxis("Horizontal") * mySpeed;
}