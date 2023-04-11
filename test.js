
		function CheckInput() {
			var temp;
			var temp2;
			var mystr;
			temp = "";
			document.form0.sD3.value =document.getElementById("sD3A").value;
			document.form0.sM.value =document.getElementById("sMA").value;
			mystr = document.form0.sA.value;
			if (mystr == "") {
				temp = temp + "*姓名";
			}
			mystr = document.form0.sD1.value;
			if (mystr == "") {
				temp = temp + "\n*手機";
			}
			mystr = document.form0.sD2.value;
			if (mystr == "") {
				temp = temp + "\n*EMAIL";
			}


		if(!(typeof(document.getElementById('FileUpload0').files[0])=="undefined"))
	   {                                            
			if(document.form0.sImageCheck1.value =="A")
			{			
			}
			else
			{
			temp=temp + "\n*請按【上傳附件】";   
			}
	   }

			var sImageCheck=""; 
		   if(document.form0.sImageCheck1.value !="")
		   {
				if(document.form0.sImageCheck1.value =="A")
				{
					sImageCheck="1";
				}
			
			} 
		   if(sImageCheck=="")
		   {
				temp=temp + "\n*須達成任務";
			}
		
				
			if (temp != "") {
				temp2 = "請完成\n" + temp + " \n\n 再送出";
				window.alert(temp2);
				return false;
			}
	   else
	   {
	   	document.form0.sD.value=document.form0.sD1.value+","+document.form0.sD2.value+","+document.form0.sD3.value;				
				document.form0.submit();

			}
		}


var sImageFileAll='';
function fUploadFile(iFileNo) {
				var fileUpload = $("#FileUpload" +iFileNo ).get(0);
				var files = fileUpload.files;
				var sImage='';
				var sImageDoc='';
				var sImageFile='';
				var sNow='<%=sDateNow%>';
				var sUploadFileExt='<%=sUploadFileExt%>';
				var sUploadFileExtImage='<%=sUploadFileExtImage%>';
				var sFileExt='';
				var data = new FormData();
				document.getElementById("sImage"+iFileNo).innerHTML='';
				document.getElementById("sImageDoc"+iFileNo).innerHTML='';
				for (var i = 0; i < files.length; i++) {
					data.append(files[i].name, files[i]);
					sFileExt=files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
					sImageFile=sNow + '_'+  iFileNo + '.'+sFileExt.toLowerCase() ;
					if(sUploadFileExt.indexOf(sFileExt.toLowerCase())<0) 
					{
		}			
		else
		{
			sImageFileAll += sImageFile+'|';
		 
		  if(sUploadFileExtImage.indexOf(sFileExt.toLowerCase())>=0)
		  	sImage+="<img src='./File/Image/ASK/Upload/"+ sImageFile +"?iS=" + Math.random()+ "' width=200>";
		  else
		  	sImageDoc+="<A href='./File/Image/ASK/Upload/"+ sImageFile +"?iS=" + Math.random()+ "'><img src='./File/Image/"+ sFileExt +".png' border=0></A>";

		 }
		}
		
		var options = {};
		options.url = "./AskUpload.ashx?iNo="+iFileNo;
		options.type = "POST";
		options.data = data;
		options.contentType = false;
		options.processData = false;
		options.success = function (result) { 
		switch(result.substring(0,2))
		{
			case "00":
				document.getElementById("sImage"+iFileNo).innerHTML =sImage;	
				document.getElementById("sImageDoc"+iFileNo).innerHTML =sImageDoc;
				document.getElementById("sImageFile").value=sImageFileAll;
				switch (iFileNo)
				{
					case 0:
						document.form0.sImageCheck1.value+='A';
						break;
				}
			break;
			case "01":
			alert('上傳之檔案格式不支援！');
			break;
			case "02":
			alert('上傳之檔案大小超過限制02！');
			break;
			default:
			alert('Error=' +result); 
			break;
		}
	};
	options.error = function (err) { 
		alert('上傳之檔案大小超過限制Error！');
};
    $.ajax(options);
    event.preventDefault();
}
