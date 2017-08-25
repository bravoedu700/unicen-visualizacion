

	var canvas = null;
	var context = null;
	var imageData = null;
  var imageDataOriginal = null;

	// google groups catedra upload
	$(function() {
	    $('#file-input').change(function(e) {
	        var file = e.target.files[0],
	            imageType = /image.*/;
	        if (!file.type.match(imageType))
	            return;
	        var reader = new FileReader();
	        reader.onload = fileOnload;
	        reader.readAsDataURL(file);
			$('#myCanvas').show();
			$('.file-input-content').hide();
			$('#guardar').show();
	    });
    function fileOnload(e) {
        var $img = $('<img>', { src: e.target.result });
        canvas = $('#myCanvas')[0];
        context = canvas.getContext('2d');
        $img.load(function() {
            context.drawImage(this, 0, 0);
            imageData = context.getImageData(0,0,this.width,this.height);
            imageDataOriginal = context.getImageData(0,0,this.width,this.height);
            context.putImageData(imageData,0,0);
        });
	    }
	});
	// fin upload catedra

	function brighness(){
        var valor = $("#bg1").val();
        for(var x=0; x<imageData.width; x++){
			for(var y=0; y<imageData.height; y++){
                setRed(imageData,x,y,Math.round((255 * (valor *(getRed(imageDataOriginal,x,y)*100/255)/50))/100));
				setGreen(imageData,x,y,Math.round((255 * (valor *(getGreen(imageDataOriginal,x,y)*100/255)/50))/100));
				setBlue(imageData,x,y,Math.round((255 * (valor *(getBlue(imageDataOriginal,x,y)*100/255)/50))/100));
			}
		context.putImageData(imageData,0,0);
		}
	}

	function negative(){
		for(var x=0; x<imageData.width; x++){
			for(var y=0; y<imageData.height; y++){
				setRed(imageData,x,y,255-getRed(imageDataOriginal,x,y));
				setGreen(imageData,x,y,255-getGreen(imageDataOriginal,x,y));
				setBlue(imageData,x,y,255-getBlue(imageDataOriginal,x,y));
			}
		}
		context.putImageData(imageData,0,0);
	}

	function grey(){
		for(var x=0; x<imageData.width; x++){
			for(var y=0; y<imageData.height; y++){
				var promedio = (getRed(imageDataOriginal,x,y)+getGreen(imageDataOriginal,x,y)+getBlue(imageDataOriginal,x,y))/3;
				setRed(imageData,x,y,promedio);
				setGreen(imageData,x,y,promedio);
				setBlue(imageData,x,y,promedio);
			}
		}
		context.putImageData(imageData,0,0);
	}

	function sepia(){
		for(var x=0; x<imageData.width; x++){
			for(var y=0; y<imageData.height; y++){
				var red = (0.393 * getRed(imageDataOriginal,x,y)) + (0.769 * getGreen(imageDataOriginal,x,y)) + (0.189 * getBlue(imageDataOriginal,x,y));
				var green = (0.349 * getRed(imageDataOriginal,x,y)) + (0.686 * getGreen(imageDataOriginal,x,y)) + (0.168 * getBlue(imageDataOriginal,x,y));
				var blue = (0.272 * getRed(imageDataOriginal,x,y)) + (0.534 * getGreen(imageDataOriginal,x,y)) + (0.131 * getBlue(imageDataOriginal,x,y));
				setRed(imageData,x,y,red);
				setGreen(imageData,x,y,green);
				setBlue(imageData,x,y,blue);
			}
		}
		context.putImageData(imageData,0,0);
	}



	function binarization() {
        var valor = $('#bi1').val();
        for(var x=0; x<imageData.width; x++){
            for(var y=0; y<imageData.height; y++){
            	if(getRed(imageDataOriginal,x,y)>valor) setRed(imageData,x,y,255);
				else setRed(imageData,x,y,0);
				if(getGreen(imageDataOriginal,x,y)>valor) setGreen(imageData,x,y,255);
				else setGreen(imageData,x,y,0);
				if(getBlue(imageDataOriginal,x,y)>valor) setBlue(imageData,x,y,255);
				else setBlue(imageData,x,y,0);
            }
        }
        context.putImageData(imageData,0,0);
    }

	function blurRange(){
        var valor = Number($('#bl1').val());
        for(var x=0; x<imageData.width; x++){
			for(var y=0; y<imageData.height; y++){
                // around
                cantR = 0;
                cantG = 0;
                cantB = 0;
                sum = 0;
    			for(j =( x-valor ); j <= ( x+valor );j++) {
					for (k = ( y-valor ); k <= ( y+valor ); k++) {
						if((j>0) && (k>0)) {
							cantR = cantR + getRed(imageDataOriginal, j, k);
							cantG = cantG + getGreen(imageDataOriginal, j, k);
							cantB = cantB + getBlue(imageDataOriginal, j, k);
							sum++;
						}
					}
				}
                setRed(imageData,x,y,cantR/sum);
                setGreen(imageData,x,y,cantG/sum);
                setBlue(imageData,x,y,cantB/sum);
            }
		}
		context.putImageData(imageData,0,0);
	}

    function smoothing(){
        for(var x=0; x<imageData.width; x++){
            for(var y=0; y<imageData.height; y++){
				// around
        cantR = 0;
				cantG = 0;
        cantB = 0;
				sum = 0;
				for(j=x-1;j<=x+1;j++) {
            for (k = y - 1; k <= y + 1; k++) {
                if((j>0) && (k>0)) {
                    cantR = cantR + getRed(imageData, j, k);
                    cantG = cantG + getGreen(imageData, j, k);
                    cantB = cantB + getBlue(imageData, j, k);
                    sum++;
                    }
                }
            }
        setRed(data,x,y,cantR/sum);
        setGreen(data,x,y,cantG/sum);
        setBlue(data,x,y,cantB/sum);
        }
      }
      context.putImageData(data,0,0);
    }

	function sobelH(){
        var kernelX = [
	      [-1,0,1],
	      [-2,0,2],
	      [-1,0,1]
	    ];
		sobel(kernelX);
	}

    function sobelV(){
        var kernelY = [
          [-1,-2,-1],
          [0,0,0],
          [1,2,1]
        ];
        sobel(kernelY);
    }

    function sobelB(){
        // todo por 1/9
        var kernelB = [
            [1/9,1/9,1/9],
            [1/9,1/9,1/9],
            [1/9,1/9,1/9]
        ];
        sobel(kernelB);
    }


    function sobel(mat){
        im = imageDataOriginal;
        for(var x=1; x<imageData.width-1; x++){
            for(var y=1; y<imageData.height-1; y++){
                // red channel
                var pixelSobel =
                    getRed(im,x-1,y-1) * mat[0][0] +
                    getRed(im,x,y-1) * mat[0][1] +
                    getRed(im,x+1,y-1) * mat[0][2] +
                    getRed(im,x-1,y) * mat[1][0] +
                    getRed(im,x,y) * mat[1][1] +
                    getRed(im,x+1,y) * mat[1][2] +
                    getRed(im,x-1,y+1) * mat[2][0] +
                    getRed(im,x,y+1) * mat[2][1] +
                    getRed(im,x+1,y+1) * mat[2][2];
                setRed(imageData,x,y,pixelSobel);
                setGreen(imageData,x,y,pixelSobel);
                setBlue(imageData,x,y,pixelSobel);
            }
        }
        context.putImageData(imageData,0,0);
    }

	function getRed(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+0];
	}

	function setRed(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+0]=valor;
	}

	function getGreen(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+1];
	}

	function setGreen(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+1]=valor;
	}

	function getBlue(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+2];
	}

	function setBlue(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+2]=valor;
	}

	function getDownloadData() {
        return canvas.toDataURL('image/jpg');

    }
    $("#guardar").click(function() {
        $(this).attr("href", getDownloadData());
    });
