function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6I6PlMLRbxM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzs_6cz83AuxPQv7ZguYqt0jC2sYF90PxforKsOnMrYneCdmRPSXXJx4XjyWEX3hQTwOQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

