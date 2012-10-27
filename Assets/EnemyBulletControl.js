#pragma strict
var bulletSpeed = 0.5;

function Start () {
	yield WaitForSeconds(2.0);
	Destroy(gameObject);
}

function Update () {
	transform.position += transform.forward * bulletSpeed;
}