	        var x = 'true';
			var isPressedBtn00 = 'no';
			var isPressedBtn01 = 'no';
			var isPressedBtn02 = 'no';
			
			var isPressedBtn10 = 'no';
			var isPressedBtn11 = 'no';
			var isPressedBtn12 = 'no';
			
			
			var isPressedBtn20 = 'no';
			var isPressedBtn21 = 'no';
			var isPressedBtn22 = 'no';
			function Clear(x1, x2, x3 ,x4, x5, x6)
			{
				document.getElementById(x1).value='.';
				document.getElementById(x2).value='.';
				document.getElementById(x3).value='.';
				
				document.getElementById(x4).value='.';
				document.getElementById(x5).value='.';
				document.getElementById(x6).value='.';
				
				
			}	
		
			function myFunction()
			{	if( (document.getElementById('btn00').value == 'X' &&
					 document.getElementById('btn01').value == 'X' &&
					 document.getElementById('btn02').value == 'X') ||
					(document.getElementById('btn00').value == 'O' &&
					 document.getElementById('btn01').value == 'O' &&
					 document.getElementById('btn02').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn10' ,'btn11' ,'btn12' ,'btn20' ,'btn21' ,'btn22' );
					}
					else if( (document.getElementById('btn10').value == 'X' &&
					 document.getElementById('btn11').value == 'X' &&
					 document.getElementById('btn12').value == 'X') ||
					(document.getElementById('btn10').value == 'O' &&
					 document.getElementById('btn11').value == 'O' &&
					 document.getElementById('btn12').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn00' ,'btn01' ,'btn02' ,'btn20' ,'btn21' ,'btn22' );
					}
					else if( (document.getElementById('btn20').value == 'X' &&
					 document.getElementById('btn21').value == 'X' &&
					 document.getElementById('btn22').value == 'X') ||
					(document.getElementById('btn20').value == 'O' &&
					 document.getElementById('btn21').value == 'O' &&
					 document.getElementById('btn22').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn00' ,'btn01' ,'btn02' ,'btn10' ,'btn11' ,'btn12' );
					}
					else if( (document.getElementById('btn00').value == 'X' &&
					 document.getElementById('btn10').value == 'X' &&
					 document.getElementById('btn20').value == 'X') ||
					(document.getElementById('btn00').value == 'O' &&
					 document.getElementById('btn10').value == 'O' &&
					 document.getElementById('btn20').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn01' ,'btn11' ,'btn12' ,'btn02' ,'btn12' ,'btn22' );
					}
					else if( (document.getElementById('btn01').value == 'X' &&
					 document.getElementById('btn11').value == 'X' &&
					 document.getElementById('btn21').value == 'X') ||
					(document.getElementById('btn01').value == 'O' &&
					 document.getElementById('btn11').value == 'O' &&
					 document.getElementById('btn21').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn00' ,'btn10' ,'btn20' ,'btn02' ,'btn12' ,'btn22' );
					}
					else if( (document.getElementById('btn02').value == 'X' &&
					 document.getElementById('btn12').value == 'X' &&
					 document.getElementById('btn22').value == 'X') ||
					(document.getElementById('btn02').value == 'O' &&
					 document.getElementById('btn12').value == 'O' &&
					 document.getElementById('btn22').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn00' ,'btn10' ,'btn20' ,'btn01' ,'btn11' ,'btn21' );
					}
					else if( (document.getElementById('btn00').value == 'X' &&
					 document.getElementById('btn11').value == 'X' &&
					 document.getElementById('btn22').value == 'X') ||
					(document.getElementById('btn00').value == 'O' &&
					 document.getElementById('btn11').value == 'O' &&
					 document.getElementById('btn22').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn01' ,'btn02' ,'btn10' ,'btn12'  , 'btn20' ,'btn21');
					}
					else if( (document.getElementById('btn02').value == 'X' &&
					 document.getElementById('btn11').value == 'X' &&
					 document.getElementById('btn20').value == 'X') ||
					(document.getElementById('btn02').value == 'O' &&
					 document.getElementById('btn11').value == 'O' &&
					 document.getElementById('btn20').value == 'O') )
					{
						document.getElementById('display').value='WIN';
						Clear('btn00' ,'btn01' ,'btn10' ,'btn12'  , 'btn21' ,'btn22');
					}
					else if(    isPressedBtn00 == "yes" && 
								isPressedBtn01 == "yes" && 
								isPressedBtn02 == "yes" && 
								isPressedBtn10 == "yes" && 
								isPressedBtn11 == "yes" && 
								isPressedBtn12 == "yes" && 
								isPressedBtn20 == "yes" && 
								isPressedBtn21 == "yes" && 
								isPressedBtn22 == "yes" && 
								document.getElementById('display').value!='WIN')
					{
						document.getElementById('display').value='NO ONE WIN!!!!!!';
					}
			}
			
			document.getElementById('btn00').addEventListener('click', function(e){
				
				
				
				if(isPressedBtn00 == "yes")
				{
					document.getElementById('btn00').value = document.getElementById('btn00').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn00').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn00').value='O';
						x = 'true';
					}
					isPressedBtn00="yes";
				}
				
			});
			
			document.getElementById('btn01').addEventListener('click', function(e){
				if(isPressedBtn01 == "yes")
				{
					document.getElementById('btn01').value = document.getElementById('btn01').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn01').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn01').value='O';
						x = 'true';
					}
					isPressedBtn01="yes";
				}
			});
			
			
			document.getElementById('btn02').addEventListener('click', function(e){
				if(isPressedBtn02 == "yes")
				{
					document.getElementById('btn02').value = document.getElementById('btn02').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn02').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn02').value='O';
						x = 'true';
					}
					isPressedBtn02="yes";
				}
			});
			
			
			
			
			document.getElementById('btn10').addEventListener('click', function(e){
				if(isPressedBtn10 == "yes")
				{
					document.getElementById('btn10').value = document.getElementById('btn10').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn10').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn10').value='O';
						x = 'true';
					}
					isPressedBtn10="yes";
				}
			});
			document.getElementById('btn11').addEventListener('click', function(e){
				if(isPressedBtn11 == "yes")
				{
					document.getElementById('btn11').value = document.getElementById('btn11').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn11').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn11').value='O';
						x = 'true';
					}
					isPressedBtn11="yes";
				}
			});
			document.getElementById('btn12').addEventListener('click', function(e){
				if(isPressedBtn12 == "yes")
				{
					document.getElementById('btn12').value = document.getElementById('btn12').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn12').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn12').value='O';
						x = 'true';
					}
					isPressedBtn12="yes";
				}
			});
			document.getElementById('btn20').addEventListener('click', function(e){
				if(isPressedBtn20 == "yes")
				{
					document.getElementById('btn20').value = document.getElementById('btn20').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn20').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn20').value='O';
						x = 'true';
					}
					isPressedBtn20="yes";
				}
			});
			document.getElementById('btn21').addEventListener('click', function(e){
				if(isPressedBtn21 == "yes")
				{
					document.getElementById('btn21').value = document.getElementById('btn21').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn21').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn21').value='O';
						x = 'true';
					}
					isPressedBtn21="yes";
				}
			});
			document.getElementById('btn22').addEventListener('click', function(e){
				if(isPressedBtn22 == "yes")
				{
					document.getElementById('btn22').value = document.getElementById('btn22').value;
					
				}
				else
				{
					if(x == 'true')
					{
						document.getElementById('btn22').value='X';
						x = 'false';
					}
					else
					{
						document.getElementById('btn22').value='O';
						x = 'true';
					}
					isPressedBtn22="yes";
				}
			});
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			