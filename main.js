let arr=[45,6,7,-1,0,-2];

let n=parseInt(prompt("Enter your answer"));

function nsmall(arr,n){
	for(i=0;i<arr.length;i++){
		for(j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
				
			}
		}
		document.write(arr[i]);
	}
	let small=arr[n-1]
	return small;
}
document.write(nsmall(arr,n));