#pragma strict
var bulletSpeed = 1.0;

function Start () {
	yield WaitForSeconds(0.5);
	Destroy(gameObject);
}

function Update () {
	transform.position += transform.forward * bulletSpeed;
}