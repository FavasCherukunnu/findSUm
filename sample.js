#include <stdio.h>


int main()
{
    int arr[] ={2,1,5,3,6,2,4};
    int givenNum= 6;
    int size=7;
    int tempArr[size],sum=0,tempArrIndex=0;
    for(int i=0;i<size;i++){
        sum = arr[i];
        tempArrIndex=0;
        tempArr[tempArrIndex++] = arr[i];
        for(int j=0;j<size;j++){
            
            if(j<=i){
                continue;
            }
            sum =0;
            
            //clearing temp aray
            for(int temp=0;temp<size;temp++){
                tempArr[temp]=0;
            }
            tempArrIndex=0;
            //
            for(int k=0;k<=i;k++){
                sum += arr[k];
                tempArr[tempArrIndex++] = arr[k];
            }
            sum += arr[j];
            tempArr[tempArrIndex++] = arr[j];
            
            if(sum==givenNum){
                for(int temp=0;temp<tempArrIndex;temp++){
                    printf("%d,",tempArr[temp]);
                }
                printf("\n");
                for(int temp=0;temp<size;temp++){
                    tempArr[temp]=0;
                }
            }
            
            
        }
        
        
    }

    return 0;
}


 
