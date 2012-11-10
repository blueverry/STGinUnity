#pragma strict
var mySpeed = 0.1;					// 自機速度
var myBulletPrefab : GameObject;	// 弾丸のプレハブ
var bulletInterval = 0.1;			// 弾丸射出間隔

function Start ()
{
	// 画面内に存在している間
	while(true)
	{
		// 弾丸の射出(1.弾丸のプレハブ, 2.場所, 3.方向)
		Instantiate(myBulletPrefab, transform.position + Vector3(0.6, 0, 0), transform.rotation);
		Instantiate(myBulletPrefab, transform.position + Vector3(0.4, 0, 0.2), transform.rotation);	
		Instantiate(myBulletPrefab, transform.position + Vector3(0.2, 0, 0.4), transform.rotation);	
		Instantiate(myBulletPrefab, transform.position + Vector3(-0.2, 0, 0.4), transform.rotation);	
		Instantiate(myBulletPrefab, transform.position + Vector3(-0.4, 0, 0.2), transform.rotation);	
		Instantiate(myBulletPrefab, transform.position + Vector3(-0.6, 0, 0), transform.rotation);	
		yield WaitForSeconds(bulletInterval);									// 弾丸射出間隔で設定している時間だけ待つ
	}
}

function Update ()
{
	transform.position.x += Input.GetAxis("Horizontal") * mySpeed;
	for(var touch in Input.touches)
	{
		var touchX = touch.position.x;
		if (touchX <= Screen.width / 2)
		{
			transform.position.x -= mySpeed;
		}		
		else
		{
			transform.position.x += mySpeed;
		}
	}
}

function OnTriggerEnter (other : Collider)
{
	Debug.Log("myShipHIT");

	if(other.gameObject.tag == "EnemyBullet")
	{
		Destroy(other.gameObject);
		FindObjectOfType(GameOverScreen).enabled = true;
		Destroy(gameObject);
	}
}