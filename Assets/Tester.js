#pragma strict

var skin : GUISkin;

function Awake() {
	Facebook.Install("114118368695293");
}

function OnGUI() {
	GUI.skin = skin;
	
	var sw = Screen.width;
	var sh = Screen.height;
	
	var rect = Rect(0.1 * sw, 0.1 * sh, 0.8 * sw, 0.8 * sh);
	GUILayout.BeginArea(rect, Facebook.GetUserName(), "Window");

	if (GUILayout.Button("Sign in")) {
		Facebook.SignIn();
	}

	if (GUILayout.Button("Sign out")) {
		Facebook.SignOut();
	}

	if (GUILayout.Button("Post to wall")) {
		Facebook.LaunchDialog("これはUnity上の文字列です。");
	}
	
	GUILayout.EndArea();
}
