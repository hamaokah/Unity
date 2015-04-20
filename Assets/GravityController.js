#pragma strict

private var accel : Vector3;

function Start () {
 accel = Vector3 (0, 0, -1);
}

function Update () {
 accel = (accel + Input.acceleration) * 0.5;
 Physics.gravity = Vector3 (-accel.y, accel.z, accel.x) * 50.0;
}