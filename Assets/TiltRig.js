#pragma strict

private var accel : Vector3;

function Start () {
 accel = Vector3 (0, 0, -1);
}

function Update () {
 accel = (accel + Input.acceleration) * 0.5;
 var gravity : Vector3 = Vector3 (-accel.y, accel.z, accel.x);
 transform.rotation = Quaternion.FromToRotation (-Vector3.up, gravity);
}