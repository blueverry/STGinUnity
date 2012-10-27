#pragma strict
var bulletSpeed = 1.0;

function Start () {
	yield WaitForSeconds(1.0);
	Destroy(gameObject);
}

function Update () {
	transform.position += transform.forward * bulletSpeed;
}