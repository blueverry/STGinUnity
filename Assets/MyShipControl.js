#pragma strict
var mySpeed = 0.1;					// 自機速度
var myBulletPrefab : GameObject;	// 弾丸のプレハブ
var bulletInterval = 0.1;			// 弾丸射出間隔
var touching = false;

function Start ()
{
	// 画面内に存在している間
	while(true)
	{
		if (touching == false)
		{
		// 弾丸の射出(1.弾丸のプレハブ, 2.場所, 3.方向)
			Instantiate(myBulletPrefab, transform.position + Vector3(0.6, 0, 0), transform.rotation);
			Instantiate(myBulletPrefab, transform.position + Vector3(0.4, 0, 0.2), transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(0.2, 0, 0.4), transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.2, 0, 0.4), transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.4, 0, 0.2), transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.6, 0, 0), transform.rotation);	
		}
		else
		{
			var left = Quaternion.AngleAxis(-30, Vector3(0, 1, 0));
			var right = Quaternion.AngleAxis(30, Vector3(0, 1, 0));
			// 弾丸の射出(1.弾丸のプレハブ, 2.場所, 3.方向)
			Instantiate(myBulletPrefab, transform.position + Vector3(0.8, 0, 0), left * transform.rotation);
			Instantiate(myBulletPrefab, transform.position + Vector3(0.6, 0, 0), left * transform.rotation);
			Instantiate(myBulletPrefab, transform.position + Vector3(0.4, 0, 0), left * transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(0.2, 0, 0), left * transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.2, 0, 0), right * transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.4, 0, 0), right * transform.rotation);	
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.6, 0, 0), right * transform.rotation);
			Instantiate(myBulletPrefab, transform.position + Vector3(-0.8, 0, 0), right * transform.rotation);
		}
		
		yield WaitForSeconds(bulletInterval);									// 弾丸射出間隔で設定している時間だけ待つ
	}
}

function Update ()
{
	transform.position.x += Input.GetAxis("Horizontal") * mySpeed;
	for(var touch in Input.touches)
	{
		/* タッチ操作
		var touchX = touch.position.x;
		if (touchX <= Screen.width / 2)
		{
			transform.position.x -= mySpeed;
		}		
		else
		{
			transform.position.x += mySpeed;
		}
		*/
	}
	
	touching = Input.GetMouseButton(0);
}

function OnTriggerEnter (other : Collider)
{
	Debug.Log("myShipHIT");

	if(other.gameObject.tag == "EnemyShip")
	{
		Destroy(other.gameObject);
		FindObjectOfType(GameOverScreen).enabled = true;
		FindObjectOfType(TimeControl).enabled = false;
		Destroy(gameObject);
	}
}