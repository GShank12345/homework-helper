
demo.document.designMode = "on";
var textkey = ""
var decrypt1 = ""
var decrypted = ""
var textkey1 = ""
var decrypt2 = ""
var decrypted2 = ""
var clicko = false;

var yourfullname = ""
// var iv = CryptoJS.enc.Base64.parse("");
// alert("Enter your name.")


window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<style>.dcolor{width:20%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='downloadpage' title='Rewrite Text' onclick='textpage()' class='dcolor'><h4>Answer</h4></button>&nbsp &nbsp &nbsp &nbsp &nbsp<style>.dcolor1{width:15%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='clearpage' title='Clear page' onclick='clearpage()' class='dcolor1'><h4>Clear Text</h4></button>&nbsp &nbsp &nbsp<style>.dcolor2{width:15%;text-align:center;bold;text-size:4}</style><label class='dcolor2'><b>Enter email:</b></label>&nbsp&nbsp<input height=150 type='text' id='enteremail' placeholder='Enter email' title='enter-email' onclick='enteremail()'></input>&nbsp&nbsp&nbsp <button type='button' id='mailto' title='Email to' onclick='mailtopage()' class='dcolor1'><h4>Email Text</h4></button>&nbsp &nbsp &nbsp<button type='button' id='printpage' title='Print Text' onclick='printpage()' class='dcolor1'><h4>Print Text</h4></button> &nbsp &nbsp &nbsp <br><br><br>")

var textemail = window.document.getElementById('enteremail');
var clearpage = window.document.getElementById('clearpage');
var textpage = window.document.getElementById('downloadpage');
var mailpage = window.document.getElementById('mailto');
var printpage = window.document.getElementById('printpage');

// window.document.write("<iframe name='democ' id='democ' style='background-color: lightblue;color:white;width:75%;' height='300'></iframe>&nbsp;&nbsp;")

window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<iframe name='democ' id='democ' style='background-color: lightblue;color:white;width:75%;' height='300'></iframe>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id='playcorr' src='sound.png' onclick='playcorr()'></img>")

 var playcorr = window.document.getElementById('playcorr');

playcorr.onclick = function playcorr()
 {

    if (democ.document.body.innerHTML == "")
    {
       alert("There is no text")
    }
    else
    {
        if (clicko == false)
        {

            chrome.tts.speak( democ.document.body.innerText, {'voiceName': 'Samantha','rate':0.8,'pitch':0.8});
            clicko = true;
        }
        else
        {
            chrome.tts.stop()
            clicko = false;
        }

        }

 }
printpage.onclick = function printpage()
{
  //  yourname = document.getElementById('entername').value;
   // yourfullname = yourname.substring(0,1).toUpperCase() + yourname.substring(1) + " " + String(d).substring(0,16)
  //  if (yourname == "")
  //  {
  //      alert("Enter name")
 //   }
  //  else
  //  {
        var dem = demo.document.body.innerHTML
        var demc = democ.document.body.innerHTML
        var winds = window.open('','','height=500,width=500')
      //  winds.document.write("<html><body><h2><ul>" + yourfullname +  "Text</ul></h2><br><br>" + dem + "<br><br><h2><ul>Corrected Text</ul></h2><br>" + demc + "<br></body></html>")
    winds.document.write("<html><body><h2><ul>Your question : </ul></h2><br><br>" + dem + "<br><br><h2><ul>Science AI explanation</ul></h2><br>" + demc + "<br></body></html>")
        winds.document.close();
        winds.print();
 //   }
}

mailpage.onclick = function mailtopage()
{
   // alert(textemail.value)
  //  if (textemail.value.includes('@')==false || textemail.value.includes('.com')==false)
   // yourname = document.getElementById('entername').value;
  //  yourfullname = yourname.substring(0,1).toUpperCase() + yourname.substring(1) + " " + String(d).substring(0,16)
  //  if (yourname == "")
  //  {
   //     alert("Enter name")
  //  }
  //  else
 //   {
        var dem1 = demo.document.body.innerHTML
        var demc1 = democ.document.body.innerHTML
        const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (res.test(String(textemail.value).toLowerCase()) == false)
        {
            alert("Please enter a valid e-mail address")
        }
        else
        {
            window.location.href = "mailto:" + textemail.value + "?subject= Your question " + dem1 + "  &body=" + demc1
        }
   // }
}
clearpage.onclick = function clearpage()
{
    demo.document.body.innerHTML = ""
    democ.document.body.innerHTML = ""
}

textpage.onclick = async function textpage()
{
    if (demo.document.body.innerHTML == "")
    {
        alert("Enter Text")
    }
    else
    {
        if (textkey == null)
        {
            Console.log("text key error")
        }
        democ.document.body.innerHTML = "<b><h2>Please wait...Rewriting</h2></b>"
        democ.document.body.innerHTML.editable = false
        // alert("inside and text key",textpage,textkey)


        //

        if ('capabilities' in self.ai.writer) {
          const capabilities = await self.ai.writer.capabilities();
          if (capabilities === 'no') {
           alert("Write does not work in this browser")
            return;
          }
        }
        // Try our luck…
        try {

            const writer = await self.ai.writer.create({sharedContext: 'You are a homework helper'});
            const stream = await writer.write('Write about' + demo.document.body.innerHTML);

         //   for await (const chunk of stream) {
            democ.document.body.innerHTML = "<b><h2>" + stream + "</h2></b>"
                console.log(stream);
         //  }
        } catch (err) {
          // Handle the error.
          console.log(err.name, err.message);
            democ.document.body.innerHTML = "<b><h2>" + err.message + "</h2></b>"
        }



    }
}
